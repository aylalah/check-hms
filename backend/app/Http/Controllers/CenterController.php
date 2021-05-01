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

use App\Http\Controllers\NotificationController;

use App\Models\Possitions;
use App\Models\User;
use App\Models\General_Settings;
use App\Models\Branches;
use App\Models\Notification_settings;

class CenterController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
     protected $NotificationController;
     public function __construct(NotificationController $NotificationController)
     {
         $this->middleware('auth:api', ['except' => ['']]);
         $this->NotificationController = $NotificationController;
     }

     public function centerType(){
        return response()->json([
            'centerType'=> DB::table('center_type')->join('departments','center_type.dept_id','=','departments.id')->where('center_type.status','=','active')->select('center_type.*','departments.name AS deptname')->get(),
            'departments' =>  DB::table('departments')->select('departments.name','departments.id')->get()
            ]);
    }

    public function CenterTypes(Request $request)
    {
        $created_by= auth()->user()->id;
        $request->merge(["created_by" => $created_by]);
        $request->merge(["updated_by" => $created_by]);
        $center_type = DB::table('center_type')->insert($request->all());

        if ($center_type) {
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
            return '{
                "success":false,
                "message":"failed"
            }' ;
        }
    }

    public function updateCenterType(Request $request)
    {
        // return $request;
        $created_by= Auth()->user()->id;
        $center_type = DB::table('center_type')->where('id',$request->id)->update([
            'name' => $request->form['name'],
            'description' => $request->form['description'],
            'dept_id' =>  $request->form['dept_id'],
            'updated_by' => $created_by
        ]);

        if ($center_type) {
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
            return '{
                "success":false,
                "message":"failed"
            }' ;
        }
    }
    public function deleteCenterType(Request $request)
    {
        // return $request;
        $created_by= Auth()->user()->id;
        $center_type = DB::table('center_type')->where('id',$request[0])->update([
            'status' => "suspend"
        ]);

        if ($center_type) {
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
            return '{
                "success":false,
                "message":"failed"
            }' ;
        }
    }

    public function editCentertypes(Request $request)
    {
     return $center_type = DB::table('center_type')->join('departments','center_type.dept_id','=','departments.id')->select('center_type.*','departments.name AS deptname')->where('center_type.id',$request[0])->get();
    }

    public function AddWardType(Request $request)
    {
        $dt = Carbon::now();
        $cDate = $dt->toFormattedDateString();
        $cTime = $dt->format('h:i:s A');
        $created_by= Auth()->user()->id;
        $request->merge(["created_by" => $created_by]);
        $request->merge(["updated_by" => $created_by]);
        $request->merge(["c_date" => $cDate]);
        $request->merge(["c_time" => $cTime]);
        $center_type = DB::table('ward_type')->insert($request->all());

        if ($center_type) {
            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {
            return '{
                "success":false,
                "message":"failed"
            }' ;
        }
    }



    // Get all Departments

    public function getDepertment(){
        return DB::table("departments")->orderBy('id')->where('departments.status', '=', 'active')->get();
    }

    // Display All Centers

    public function displaysetBranch()
    {
        return response()->json([
        'pharm'=> Branches::orderBy('id', 'desc')->join('departments', 'branches.dept_id', '=', 'departments.id')->join('module', 'departments.module_id', '=', 'module.id')->where('branches.status', '!=', 'trash')->where('module.id',4)->select('branches.*', 'departments.name as dept_name')->get(),
        'revenue'=> Branches::orderBy('id', 'desc')->join('departments', 'branches.dept_id', '=', 'departments.id')->join('module', 'departments.module_id', '=', 'module.id')->where('branches.status', '!=', 'trash')->where('module.id', 6)->select('branches.*', 'departments.name as dept_name')->get(),
        'clinic'=> Branches::orderBy('id', 'desc')->join('departments', 'branches.dept_id', '=', 'departments.id')->where('branches.status', '!=', 'trash')->where('branches.dept_id',2)->select('branches.*', 'departments.name as dept_name')->get(),
        'admin'=> Branches::orderBy('id', 'desc')->join('departments', 'branches.dept_id', '=', 'departments.id')->where('branches.status', '!=', 'trash')->where('branches.dept_id',10)->select('branches.*', 'departments.name as dept_name')->get(),
        'radio'=> Branches::orderBy('id', 'desc')->join('departments', 'branches.dept_id', '=', 'departments.id')->where('branches.status', '!=', 'trash')->where('branches.dept_id',12)->select('branches.*', 'departments.name as dept_name')->get(),
        'lab'=> Branches::orderBy('id', 'desc')->join('departments', 'branches.dept_id', '=', 'departments.id')->where('branches.status', '!=', 'trash')->where('branches.dept_id',15)->select('branches.*', 'departments.name as dept_name')->get(),
        'record'=> Branches::orderBy('id', 'desc')->join('departments', 'branches.dept_id', '=', 'departments.id')->where('branches.status', '!=', 'trash')->where('branches.dept_id',16)->select('branches.*', 'departments.name as dept_name')->get(),
        'theater'=> Branches::orderBy('id', 'desc')->join('departments', 'branches.dept_id', '=', 'departments.id')->where('branches.status', '!=', 'trash')->where('branches.dept_id',17)->select('branches.*', 'departments.name as dept_name')->get(),
        'nurse'=> Branches::orderBy('id', 'desc')->join('departments', 'branches.dept_id', '=', 'departments.id')->where('branches.status', '!=', 'trash')->where('branches.dept_id',18)->select('branches.*', 'departments.name as dept_name')->get(),
        'ward'=> Branches::orderBy('id', 'desc')->join('departments', 'branches.dept_id', '=', 'departments.id')->where('branches.status', '!=', 'trash')->where('branches.dept_id',19)->select('branches.*', 'departments.name as dept_name')->get(),
        'patient'=> Branches::orderBy('id', 'desc')->join('departments', 'branches.dept_id', '=', 'departments.id')->where('branches.status', '!=', 'trash')->where('branches.dept_id',20)->select('branches.*', 'departments.name as dept_name')->get()
    ]);

        // return Branches::all();

    }

    // Get all unit

    public function getAllUnits(){
           return response()->json([
            'modules' =>  DB::table('center_type')->where('center_type.status', '=', 'active')->get(),
           ]);
          }

    // Create new Branch Centers

    public function createCenters(Request $request)
          {
              // return $request->all();
              $creator = Auth()->user()->id;
              $req_name=$request->bran_name;
              $depts=DB::table("departments")->where('departments.id',$request->dept_id)->first();
            //   $branch;
              if ($depts->module_id==4){
              $dt = Carbon::now();
              $item_date = $dt->toFormattedDateString();
              $item_time = $dt->format('h:i:s A');
              $table_name = 'branch_'.strtolower(trim(str_replace('', '', $req_name)));
              Schema::create($table_name, function (Blueprint $table) {
                  $table->increments('id');
                  $table->string('open_stock')->default(0);
                  $table->string('sales')->default(0);
                  $table->string('transfer')->default(0);
                  $table->string('receive')->default(0);
                  $table->string('total_remain')->default(0);
                  $table->string('close_balance')->default(0);
                  $table->string('variance')->default(0);
                  $table->string('physical_balance')->default(0);
                  $table->string('amount')->default(0);
                  $table->string('balance')->default(0);
                  $table->string('c_date')->nullable();
                  $table->string('c_time')->nullable();
                  $table->timestamps();
                  $table->string('add_status')->nullable();
                  $table->string('update_status')->nullable();
                  $table->string('item_detail_id')->index();
                  $table->string('staff_id')->index()->default(0);
              });
              $itemD = DB::table("item_details")->get();
              foreach($itemD as $rowID){
                  $insert = DB::table($table_name)->insertGetId(
                      [
                          'item_detail_id' => $rowID->id,
                          'c_date' => $item_date,
                          'c_time' => $item_time,
                      ]
                      );
              }
              $request->merge(['name' => $req_name]);

              $staffId= Auth()->user()->id;
              $request->merge(['staff_id' => $staffId]);

              $request->merge(['br_name' => $table_name]);
              $branch= Branches::create($request-> all());
          }
          else{
              $request->merge(['name' => $req_name]);
              $branch= Branches::create($request-> all());
          }
              if($branch){

                $notificationID = 6;
                $title= '';
                $message = $request->bran_name.' branch have be created';
                $image = '';
                $slug = '';
                $ids = '';
                $response = $this->NotificationController->notification($notificationID, $title, $message, $image, $slug, $ids);

                  return '{
                      "success":true,
                      "message":"successful"
                  }' ;
              } else {

                $notificationID = 6;
                $title= '';
                $message = 'New branch creation faied';
                $image = '';
                $slug = '';
                $ids = '';
                $response = $this->NotificationController->notification($notificationID, $title, $message, $image, $slug, $ids);

                    return '{
                      "success":false,
                      "message":"Failed"
                  }';
              }
          }

    // Get Details to update branch Centers

    public function onEditBranch(Request $request){
    $id=$request->id;
        return
        [
        'branch'=>Branches::orderBy('id', 'desc')
            ->join('departments','branches.dept_id','=','departments.id')
            ->where('branches.id',$id)->select('branches.*','departments.name as dept_name')->get(),

        'department'=> DB::table('departments')->select('departments.*')->where('departments.status', '=', 'active')->get()
        ];
    }

    // Update Branch Centers

    public function updateBranch(Request $request){

        $dt = Carbon::now();
        $cDate = $dt->toFormattedDateString();
        $cTime = $dt->format('h:i:s A');

        $table_name = 'branch_'.strtolower(trim(str_replace(' ', '', $request->branch_name)));
        $name = $request->branch_name;
        $description = $request->branch_adress;
        $dept_id = $request->department_id;
        $status = $request->branch_status;
        $id = $request->branch_id;

        $update = DB::table('branches')->where('branches.id','=',$id)
        ->update([
            'name'=>$name,
            'dept_id'=>$dept_id,
            'status'=>$status,
            'description'=> $description,
            'updated_at'=> $cDate.' '.$cTime,
            'br_name'=>$table_name
            ]);

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

    // Suspent Selected branch Centers

    public function suspendBranch(Request $request)
    {
        $id=$request[0];
        $suspend=DB::table('branches')->where('id', $id)
        ->update([
            'status' => 'suspend'
        ]);
        if($suspend){
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

    // Activate selected branch centers

    public function activateBranch(Request $request)
    {
        $id=$request[0];

        $getData= Branches::orderBy('branches.id')->join('departments', 'branches.dept_id', '=', 'departments.id')->where('branches.id', $id)->select('branches.name as branch_name','departments.name', 'departments.image')->first();
        $suspend=DB::table('branches')->where('id', $id)
        ->update([
            'status' => 'active'
        ]);

        if($suspend){

            $notificationID = 10;
            $title= '';
            $message = $getData->branch_name.' center have been activated at '.$getData->name.' department Successfully';
            $image = $getData->image;
            $slug = '';
            $ids = '';
            $response = $this->NotificationController->notification($notificationID, $title, $message, $image, $slug, $ids);

            return '{
                "success":true,
                "message":"successful"
            }' ;
        } else {

            $notificationID = 10;
            $title= '';
            $message = $getData->branch_name.' failed to activate at '.$getData->name.' department';
            $image = $getData->image;
            $slug = '';
            $ids = '';
            $response = $this->NotificationController->notification($notificationID, $title, $message, $image, $slug, $ids);

            return '{
                "success":false,
                "message":"Failed"
            }';
        }
    }

    // Trash Selected branch center

    public function trashBranch(Request $request)
    {
        $id=$request[0];
        $suspend=DB::table('branches')->where('id', $id)
        ->update([
            'status' => 'trash'
        ]);
        if($suspend){
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
