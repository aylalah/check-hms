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

class RanksController extends Controller
{
    protected $NotificationController;
    public function __construct(NotificationController $NotificationController)
   {
       $this->middleware('auth:api', ['except' => ['GETAllPosition']]);
       $this->NotificationController = $NotificationController;
   }
   
   public function Ranks(){
    return response()->json([
        'ranks'=> DB::table('rank_tb')->join('departments','rank_tb.dept_id','=','departments.id')->where('rank_tb.status','=','active')->select('rank_tb.*','departments.name AS dept_name')->get(),
        'departments' =>  DB::table('departments')->select('departments.name','departments.id')->get()
        ]);
    }
   
   public function AddRank(Request $request)
   {
       $created_by= Auth()->user()->id;
       $request->merge(["created_by" => $created_by]);
       $request->merge(["updated_by" => $created_by]);
       $center_type = DB::table('rank_tb')->insert($request->all());

       if ($center_type) {
        $notificationID = 12;
        $title= 'Rank Category Added';
        $message =  $request->rank_name.' Rank have been Added successfully';
        $image = '';
        $slug = '';
        $ids = '';
        $response = $this->NotificationController->notification($notificationID, $title, $message, $image, $slug, $ids);

           return '{
               "success":true,
               "message":"successful"
           }' ;
       } else {
        $notificationID = 12;
        $title= 'Rank Category Added';
        $message =  $request->rank_name.' Rank Failed ';
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
   public function editingRank(Request $request)
   {
    return $center_type = DB::table('rank_tb')->join('departments','rank_tb.dept_id','=','departments.id')->select('rank_tb.*','departments.name AS deptname')->where('rank_tb.id',$request[0])->get();
   }

   public function editRank(Request $request)
   {
       // return $request;
       $created_by= Auth()->user()->id;
       $editRank = DB::table('rank_tb')->where('id',$request->id)->update([
           'name' => $request->form['rank_name'],
           'description' => $request->form['description'],
           'dept_id' =>  $request->form['dept_id'],
           'updated_by' => $created_by
       ]);

       if ($editRank) {

            $notificationID = 12;
            $title= 'Rank Category Updated';
            $message =  $request->form['rank_name'].' Rank have been Updated successfully';
            $image = '';
            $slug = '';
            $ids = '';
            $response = $this->NotificationController->notification($notificationID, $title, $message, $image, $slug, $ids);

           return '{
               "success":true,
               "message":"successful"
           }' ;
       } else {

            $notificationID = 12;
            $title= 'Rank Category Updated';
            $message =  $request->form['rank_name'].' Rank Update. Failed';
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
   public function deleteRank(Request $request)
   {
       // return $request;
       $created_by= Auth()->user()->id;
       $center_type = DB::table('rank_tb')->where('id',$request[0])->update([
           'status' => "suspend"
       ]);

       if ($center_type) {

            $notificationID = 12;
            $title= 'Rank Category Deleted';
            $message =  $request->form['rank_name'].' Rank have been deleted successfully';
            $image = '';
            $slug = '';
            $ids = '';
            $response = $this->NotificationController->notification($notificationID, $title, $message, $image, $slug, $ids);

           return '{
               "success":true,
               "message":"successful"
           }' ;
       } else {

        $notificationID = 12;
        $title= 'Rank Category deleted';
        $message =  $request->form['rank_name'].' Rank have been delete failed';
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
