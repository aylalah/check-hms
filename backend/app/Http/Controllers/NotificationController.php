<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\SignUpRequest;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Carbon\Carbon;
use Image;
use Intervention\Image\ImageManager;
use Faker\Provider\Image as ProviderImage;
use League\CommonMark\Inline\Element\Image as ElementImage;

use App\Models\Possitions;
use App\Models\User;
use App\Models\General_Settings;
use App\Models\Branches;
use App\Models\Notification;
use App\Models\Notification_settings;

class NotificationController extends Controller
{
    public function __construct()
     {
         $this->middleware('auth:api', ['except' => ['']]);
     }
     


    public function notification($notificationID, $title, $message, $image, $slug, $ids)
        {

              $getDatas= Notification_settings::orderBy('id')->where('id', $notificationID)->first();


                if( $title == ''){
                    $title = $getDatas->title;
                }
                if($message == ''){
                    $message = $getDatas->message;
                }
                if($image == ''){
                    $image = $getDatas->image;
                }
                if($slug == ''){
                    $slug = $getDatas->slug;
                }
                if($ids == ''){
                    $ids = $getDatas->ids;
                }
    
              $dt = Carbon::now();
              $c_date = $dt->toFormattedDateString();
              $c_time = $dt->format('h:i:s A');
              $creator = Auth()->user()->id;
              $position = Auth()->user()->position_id;

              if($getDatas->status == 'active'){

                $update= Notification::orderBy('id')->insert([

                    "setnotify_id" => $getDatas->id,
                    "subject" => $getDatas->subject,
                    "title" => $title,
                    "message" => $message,
                    "image" => $image,
                    "slug" => $slug,                
                    "receiver" => $ids,
                    "link" => $getDatas->path,
                    "created_by" => $creator,
                    "position" => $position,
                    "status" => 'active',
                    "c_time" => $c_date,
                    "c_date" => $c_time                   
                    
                ]); 

                }else{
                    $update= 'null';
                }

           if($update){
                return '{
                    "ResponseCode": 0,
                    "success":true,
                    "message":"Updated Successful"
                }';
            } else if($update == 'null'){
                return '{
                    "ResponseCode": 1,
                    "success":false,
                    "message":"Failed"
                }';
            }
           

        }


    public function getNotifications(){

        $staffId= Auth()->user()->id;
        $staffpos= Auth()->user()->position_id;

       $getSlugsusers =  Notification::orderBy('id')->where('slug', 'users')->select('notification.slug')->get();
       $getSlugspos =  Notification::orderBy('id')->where('slug', 'positions')->select('notification.slug')->get();

       if($getSlugspos){
        $getNotifications =  Notification::orderBy('id', 'desc')->where('slug', 'positions')->where('receiver', $staffpos)->select('notification.*')->get();
        $getNotificationsCount =  Notification::orderBy('id', 'desc')->where('slug', 'positions')->where('receiver', $staffpos)->select('notification.*')->count();
       }else if($getSlugsusers){
        $getNotifications =  Notification::orderBy('id', 'desc')->where('slug', 'users')->select('notification.*')->get();
        $getNotificationsCount =  Notification::orderBy('id', 'desc')->where('slug', 'users')->select('notification.*')->count();
       }

    // $getNotifications =  Notification::orderBy('id')->where('slug', 'positions')->select('notification.*')->get();
    // $getNotificationsCount =  Notification::orderBy('id')->join('users','notification.receiver','=','users.position_id')->where('slug', 'positions')->select('notification.*')->count();
        
        return response()->json([
    
            'notifications'=> $getNotifications,
     
            'countNotifications'=> $getNotificationsCount
            ]);
        }   
        
    public function seeNotification($id){
           $see= Notification::orderBy('id')->where('id', $id)->delete();

           return $see;
        }


}
