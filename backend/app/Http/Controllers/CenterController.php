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
use Image;
use Intervention\Image\ImageManager;
use App\Models\User;
use App\Models\Possitions;
use Faker\Provider\Image as ProviderImage;
use League\CommonMark\Inline\Element\Image as ElementImage;
class CenterController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */

     public function centerType(){
        return response()->json([
            'centerType'=> DB::table('center_type')->join('departments','center_type.dept_id','=','departments.id')->where('center_type.status','=','active')->select('center_type.*','departments.name AS deptname')->get(),
            'departments' =>  DB::table('departments')->select('departments.name','departments.id')->get()
            ]);
    }
}
