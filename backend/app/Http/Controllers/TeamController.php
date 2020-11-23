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

class TeamController extends Controller
{

    protected $NotificationController;
    public function __construct(NotificationController $NotificationController)
   {
       $this->middleware('auth:api', ['except' => ['GETAllPosition']]);
       $this->NotificationController = $NotificationController;
   }

   public function Teams(){
    return response()->json([
        'teams'=> DB::table('team_tb')->join('branches','team_tb.center_tb_id','=','branches.id')->where('team_tb.status','active')->select('team_tb.*','branches.name AS center_name')->get(),
        'centers' =>  DB::table('branches')->select('branches.name','branches.id')->get()
        ]);
    }

    public function AddTeam(Request $request)
    {
        $created_by= Auth()->user()->id;
        $request->merge(["created_by" => $created_by]);
        $request->merge(["updated_by" => $created_by]);
        $insert_team = DB::table('team_tb')->insert($request->all());

        if ($insert_team) {

            $notificationID = 11;
            $title= 'New Teams Category Added';
            $message = $request->team_name.' team Addes';
            $image = '';
            $slug = '';
            $ids = '';
            $response = $this->NotificationController->notification($notificationID, $title, $message, $image, $slug, $ids);

            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {

            $notificationID = 11;
            $title= 'New Teams Category Failed';
            $message = $request->team_name.' team faild to create';
            $image = '';
            $slug = '';
            $ids = '';
            $response = $this->NotificationController->notification($notificationID, $title, $message, $image, $slug, $ids);

            return '{
                "success":false,
                "message":"failed"
            }' ;
        } 
    }
    public function editingTeam(Request $request)
    {
     return $center_type = DB::table('team_tb')->join('branches','team_tb.center_tb_id','=','branches.id')->select('team_tb.*','branches.name AS centerName', 'branches.id AS center_id')->where('team_tb.id',$request[0])->get();
    }


    public function editTeam(Request $request)
    {
        // return $request;
        $created_by= Auth()->user()->id;
        $editRank = DB::table('team_tb')->where('id',$request->id)->update([
            'team_name' => $request->form['team_name'],
            'description' => $request->form['description'],
            'center_tb_id' =>  $request->form['center_tb_id'],
            'updated_by' => $created_by
        ]);

        if ($editRank) {

            $notificationID = 11;
            $title= 'Teams Category Updated';
            $message =  $request->form['team_name'].' team have been updated';
            $image = '';
            $slug = '';
            $ids = '';
            $response = $this->NotificationController->notification($notificationID, $title, $message, $image, $slug, $ids);

            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {

            $notificationID = 11;
            $title= 'Teams Category Updated';
            $message =  $request->form['team_name'].' team Updating failed';
            $image = '';
            $slug = '';
            $ids = '';
            $response = $this->NotificationController->notification($notificationID, $title, $message, $image, $slug, $ids);

            return '{
                "success":false,
                "message":"failed"
            }' ;
        } 
    }
    public function deleteTeam(Request $request)
    {
        // return $request;
        $created_by= Auth()->user()->id;
        $center_type_name = DB::table('team_tb')->where('id',$request[0])->select('team_name')->first();
        $center_type = DB::table('team_tb')->where('id',$request[0])->update([
            'status' => "suspend"
        ]);

        if ($center_type) {

            $notificationID = 11;
            $title= 'Teams Category Deleted';
            $message =  $center_type_name->team_name.' team have been deleted successfully';
            $image = '';
            $slug = '';
            $ids = '';
            $response = $this->NotificationController->notification($notificationID, $title, $message, $image, $slug, $ids);

            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {

            $notificationID = 11;
            $title= 'Teams Category Deleted';
            $message =  $center_type_name->team_name.' team have been deleted. Failed';
            $image = '';
            $slug = '';
            $ids = '';
            $response = $this->NotificationController->notification($notificationID, $title, $message, $image, $slug, $ids);

            return '{
                "success":false,
                "message":"failed"
            }' ;
        } 
    }
}
