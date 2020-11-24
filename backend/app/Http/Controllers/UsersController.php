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
use App\Models\Notification_settings;

class UsersController extends Controller
{
    protected $NotificationController;
    public function __construct(NotificationController $NotificationController)
   {
       $this->middleware('auth:api', ['except' => ['GETAllPosition']]);
       $this->NotificationController = $NotificationController;
   }

   public function displayAllstaff()
    {
        $id= Auth()->user()->id;
        return response()->json([

            'all'=>$all = User::orderBy('id', 'desc')->join('departments','users.dept_id','=','departments.id')
                ->join('positions','users.position_id','=','positions.id')
                ->join('roles','users.role_id','=','roles.id')
                ->select('users.*','departments.name AS dept_name', 'positions.position_name', 'roles.name AS role_name')
                ->where('users.id', '!=', $id)
                ->get(),
            'byB'=>User::join('branches', 'users.branch_id', '=', 'branches.id')
                ->select('users.id', 'branches.name AS branch_name')
                // ->where('users.dept_id', '=', 'departments.id')
                ->get(),
            'byD'=>User::join('departments','users.dept_id','=','departments.id')
                ->select('users.id','departments.name AS dept_name', 'departments.id AS d_id')
                ->get(),
            'countAll'=> User::count(),
        ]);
    }

    // ROLES

    public function getDesignations()
    {
        return response()->json([
            'positions' =>  DB::table('positions')->where('status', '=', 'active')->get(),
           'roles' =>  DB::table('roles')->where('status', '=', 'active')->get(),
           'ranks' => DB::table('rank_tb')->where('status', '=', 'active')->get(),
           'teams' => DB::table('team_tb')->where('status', '=', 'active')->get()

        ]) ;
    }

    public function deptModules($id)
    {
        return response()->json([
           "dept" => DB::table('possition_module')
            ->join('component_tb','possition_module.component_id','=','component_tb.id')
            ->select('component_tb.*')
            ->where('possition_module.status','=','permite')
            ->where('possition_module.position_id','=', $id)
            ->get(),
            "department" => DB::table('positions')
            ->join('departments','positions.dept_id','=','departments.id')
            ->select('departments.*')
            ->where('positions.id','=', $id)
            ->get(),
            "centers" => DB::table('branches')
            ->join('departments','branches.dept_id','=','departments.id')
            ->join('positions','departments.id','=','positions.dept_id')
            ->select('branches.name','branches.id')
            ->where('positions.id','=', $id)
            ->get(),

        ]);

    }
   
}
