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

    //POSITION SETTINGS

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

    public function onEditPos($id)
    {
        $pos = auth()->user()->position_id;

        if($id == 4){
            $adminpos = DB::table('component_tb')
            ->join('module','component_tb.module_id','=','module.id')
            ->join('departments','module.id','=','departments.module_id')
            ->join('positions','departments.id','=','positions.dept_id')
            ->select('component_tb.id','module.module','component_tb.component_name','component_tb.description')
            ->get(); 
        }else{
            $adminpos = DB::table('component_tb')
            ->join('module','component_tb.module_id','=','module.id')
            ->join('departments','module.id','=','departments.module_id')
            ->join('positions','departments.id','=','positions.dept_id')
            ->select('component_tb.id','module.module','component_tb.component_name','component_tb.description')
            ->where('positions.id','=', $id)
            ->get(); 
        }


        return response()->json([
            'position'=>DB::table('positions')->join('departments','positions.dept_id','=','departments.id')
            ->select('positions.position_name','positions.description','positions.id','departments.name')
            ->where('positions.id',$id)->get(),

           "positionCom" => DB::table('component_tb')
            ->join('possition_module','component_tb.id' ,'=', 'possition_module.component_id')
            ->select('component_tb.*','possition_module.status AS pos_status')
            ->where('possition_module.position_id','=', $id)
            ->get(),

            "deptCom" =>  $adminpos,
        ]);

    }

    public function permtes(Request $request)
    {
        $user_id = Auth()->user()->id;
        $request ->merge(['created_by'=>$user_id]);
        $request ->merge(['updated_by'=>$user_id]);
        $positioned = DB::table('possition_module')->where('position_id',$request->id)->where('component_id',$request->component_id)->select('status')->get();
   
        if ($positioned->count()>0) {
            if ($positioned[0]->status =='permite') {
                $update=  DB::table('possition_module')->where('position_id',$request->id)->where('component_id',$request->component_id)->update(['status' => 'unpermite','updated_by'=>$user_id]);
            } else {
                $update=  DB::table('possition_module')->where('position_id',$request->id)->where('component_id',$request->component_id)->update(['status' => 'permite','updated_by'=>$user_id]);
                
            }

            if($update){
                return '{
                    "ResponseCode": 0,
                    "success":true,
                    "message":"Updated Successful"
                }' ;
            } else {
                return '{
                    "ResponseCode": 1,
                    "success":false,
                    "message":"Failed"
                }';
            }
            
        } else {
            $update= DB::table('possition_module')->insert([
                'position_id' =>$request->id,
                'component_id' => $request->component_id,
                'status'       =>'permite',  
                'created_by'   =>  $user_id,
                'updated_by'   =>  $user_id
           ]); 

           if($update){
            return '{
                "ResponseCode": 0,
                "success":true,
                "message":"Updated Successful"
            }' ;
        } else {
            return '{
                "ResponseCode": 1,
                "success":false,
                "message":"Failed"
            }';
        }
           
        }
    }



    public function updateGeneralSet(Request $request)
    {

        $dt = Carbon::now();
        $cDate = $dt->toFormattedDateString();
        $cTime = $dt->format('h:i:s A');
        $userId = auth()->user()->id;

       $datas= $request;
       $id= $datas['id'];

       $currenticon= $datas['icon2'];
       $currentlogo= $datas['logo2'];

       if ($request->logo != $currentlogo){
           $logofile=$request->logo;
           $logofilename=time().'.' . explode('/', explode(':', substr($logofile, 0, strpos($logofile,';')))[1])[1];
           Image::make($logofile)->resize(300, 300)->save(public_path('upload/uploads/'.$logofilename));

        //    $manager = new ImageManager(array('driver' => 'imagick'));
        //    $image = $manager->make('public/foo.jpg')->resize(300, 200);
    } else{
        $logofilename = $currentlogo;
    }

       if ($request->icon != $currenticon){
        $iconfile=$request->icon;
        $iconfilename=time().'.' . explode('/', explode(':', substr($iconfile, 0, strpos($iconfile,';')))[1])[1];
        Image::make($iconfile)->resize(300, 300)->save(public_path('upload/uploads/'.$iconfilename));
    }else{
        $iconfilename =  $currenticon;
    }


        $update = DB::table('general_settings')->where('id','=',$id)->update([
            'logo'=>$logofilename,
            'icon'=>$iconfilename,
            'company_name'=>$datas['company_name'],
            'app' => $datas['app'],
            'short_name' =>$datas['short_name'],
            'address' =>$datas['address'],
            'contact_number' =>$datas['contact_number'],
            'web_url' =>$datas['web_url'],
            'email' =>$datas['email'],
            'module' =>$datas['module'],
            'for_email'=> $datas['for_email'],
            'owner_name' => $datas['owner_name'],
            'owner_mobile' => $datas['owner_mobile'],
            'country' => $datas['country'],
            'state' => $datas['state'],
            'city' => $datas['city'],
            'phone2' => $datas['phone2'],
            'time_zone' => $datas['time_zone'],
            'date_formate' => $datas['date_formate'],
            'language' => $datas['language'],
            'currency' => $datas['currency'],
            'currency_symbol' => $datas['currency_symbol'],
            'invoice_prefix' => $datas['invoice_prefix'],
            'expiring_date' => $datas['expiring_date'],
            'updated_by' =>$userId,
            'updated_at' =>  $cDate
        ]);
        if($update){
            return '{
                "ResponseCode": 0,
                "success":true,
                "message":"Updated Successful"
            }' ;
        } else {
            return '{
                "ResponseCode": 1,
                "success":false,
                "message":"Failed"
            }';
        }
    }

    public function updateAppImage(Request $request)
    {
        return $request;

       $datas=$request;
       $id=$datas['id'];

        $currentfile= $datas['logo'];
        if ($request->image != $currentfile){
            $file=$request->image;
            $filename=time().'.' . explode('/', explode(':', substr($file, 0, strpos($file,';')))[1])[1];
            // Image::make($file)->resize(300, 300)->save(public_path('upload/uploads/'.$filename));
            $update =DB::table('general_settings')->where('id','=',$id)->update([ 'logo'=>$filename]);
        }

        // logo : [this.appInfo.logo],
        // icon : [this.appInfo.icon],

        if($update){
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
            return '{
                "success":false,
                "message":"Failed"
            }';
        }
    }


}
