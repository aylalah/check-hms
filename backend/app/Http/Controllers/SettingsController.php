<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\SignUpRequest;
use Tymon\JWTAuth\Facades\JWTAuth;
use App\Models\General_Settings;
use Carbon\Carbon;

use App\Models\User;
use App\Models\Possitions;

class SettingsController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['GETAllPosition']]);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */

    public function GETAllPosition()
    {
        $possition= Possitions::join('departments','positions.dept_id','=','departments.id')->select('positions.*','departments.name AS department')->get();

        return response()->json([
            'ResponseCode' => 0,
            'Message' => 'Data Fetched',
            'Data' => $possition,
            'ErrorResponse' => 'success'
        ]);
    }

     
}
