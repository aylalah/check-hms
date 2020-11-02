<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\Models\User;
use App\Http\Requests\SignUpRequest;
use Tymon\JWTAuth\Facades\JWTAuth;
use App\Models\General_Settings;
use Carbon\Carbon;

class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login','signup', 'check', 'activation', 'app_info']]);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function check()
    {
        $app = General_settings::select('company_name','short_name','logo','icon','contact_number','email','web_url','app_url','for_email','status')->first();
        return response()->json([
            'ResponseCode' => 0,
            'Message' => 'Processing Completed',
            'Data' => $app,
            'ErrorResponse' => 'success'
        ]);
    }

    public function app_info()
    {
        $appInfo = General_settings::first();
        return response()->json([
            'ResponseCode' => 0,
            'Message' => 'Data Fetched',
            'Data' => $appInfo,
            'ErrorResponse' => 'success'
        ]);
    }

    public function activation()
    {
        $dt = Carbon::now();
        $cDate = $dt->toFormattedDateString();
        $cTime = $dt->format('h:i:s A');

        $activation_key= request('value');

        if($activation_key == ''){
            return response()->json([
                'ResponseCode' => 2,
                'Message' => 'Empty Value, Please input your 
                activation key',
                // 'Data' => $app,
                'ErrorResponse' => 'error'
            ]);
        }

        $update =General_settings::where('license_key','=', $activation_key)
        ->update([
            'status'=> 'activated',
            'create_date'=> $cDate, 
            'create_time'=> $cTime ,        
        ]);
        if($update){
            return response()->json([
                'ResponseCode' => 0,
                'Message' => 'Activation Successfull',
                // 'Data' => $app,
                'ErrorResponse' => 'success'
            ]);
        } else {
            return response()->json([
                'ResponseCode' => 1,
                'Message' => 'Activation Decline',
                // 'Data' => $app,
                'ErrorResponse' => 'error'
            ]);
        }

    }
    

    public function login()
    {
        $credentials = request(['email', 'password']);

        if (! $token = JWTAuth::attempt($credentials)) {
            return response()->json(['error' => 'Email or password doesn\'t exist'], 401);
        }

        return $this->respondWithToken($token);
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json(auth()->user());
    }

    public function signup(SignUpRequest $request)
    {
        $user = User::create($request->all());
        return $this->login($request);
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth('api')->factory()->getTTL() * 60,
            'user' => auth()->user()->name
        ]);
    }
}   