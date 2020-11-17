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

class CenterController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */

     public function __construct()
     {
         $this->middleware('auth:api', ['except' => ['']]);
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



    //CENTERS
    public function getDepertment(){
        return DB::table("departments")->orderBy('id')->where('departments.status', '=', 'active')->get();
    }

    public function displaysetBranch()
    {
        return response()->json([
        'pharm'=>DB::table('branches')->join('departments', 'branches.dept_id', '=', 'departments.id')->join('module', 'departments.module_id', '=', 'module.id')->where('branches.status', '!=', 'trash')->where('module.id',4)->select('branches.*', 'departments.name as dept_name')->get(),
        'revenue'=>DB::table('branches')->join('departments', 'branches.dept_id', '=', 'departments.id')->join('module', 'departments.module_id', '=', 'module.id')->where('branches.status', '!=', 'trash')->where('module.id', 6)->select('branches.*', 'departments.name as dept_name')->get(),
        'clinic'=>DB::table('branches')->join('departments', 'branches.dept_id', '=', 'departments.id')->where('branches.status', '!=', 'trash')->where('branches.dept_id',2)->select('branches.*', 'departments.name as dept_name')->get(),
        'admin'=>DB::table('branches')->join('departments', 'branches.dept_id', '=', 'departments.id')->where('branches.status', '!=', 'trash')->where('branches.dept_id',10)->select('branches.*', 'departments.name as dept_name')->get(),
        'radio'=>DB::table('branches')->join('departments', 'branches.dept_id', '=', 'departments.id')->where('branches.status', '!=', 'trash')->where('branches.dept_id',12)->select('branches.*', 'departments.name as dept_name')->get(),
        'lab'=>DB::table('branches')->join('departments', 'branches.dept_id', '=', 'departments.id')->where('branches.status', '!=', 'trash')->where('branches.dept_id',15)->select('branches.*', 'departments.name as dept_name')->get(),
        'record'=>DB::table('branches')->join('departments', 'branches.dept_id', '=', 'departments.id')->where('branches.status', '!=', 'trash')->where('branches.dept_id',16)->select('branches.*', 'departments.name as dept_name')->get(),
        'theater'=>DB::table('branches')->join('departments', 'branches.dept_id', '=', 'departments.id')->where('branches.status', '!=', 'trash')->where('branches.dept_id',17)->select('branches.*', 'departments.name as dept_name')->get(),
        'nurse'=>DB::table('branches')->join('departments', 'branches.dept_id', '=', 'departments.id')->where('branches.status', '!=', 'trash')->where('branches.dept_id',18)->select('branches.*', 'departments.name as dept_name')->get(),
        'ward'=>DB::table('branches')->join('departments', 'branches.dept_id', '=', 'departments.id')->where('branches.status', '!=', 'trash')->where('branches.dept_id',19)->select('branches.*', 'departments.name as dept_name')->get(),
        'patient'=>DB::table('branches')->join('departments', 'branches.dept_id', '=', 'departments.id')->where('branches.status', '!=', 'trash')->where('branches.dept_id',20)->select('branches.*', 'departments.name as dept_name')->get()
    ]);

        // return Branches::all();

    }

    public function getAllUnits(){
           return response()->json([
            'modules' =>  DB::table('center_type')->where('center_type.status', '=', 'active')->get(),
           ]);
          }
         
    public function createCenters(Request $request)
          {
              // return $request->all();
              $creator = Auth()->user()->id;
              $req_name=$request->bran_name;        
              $depts=DB::table("departments")->where('departments.id',$request->dept_id)->first();
              $branch;
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
