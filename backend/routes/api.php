 <?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
Route::group([

    'middleware' => 'api',

], function () {

    // AUTHORIZATION
    Route::post('activation', 'App\Http\Controllers\AuthController@activation');
    Route::post('login', 'App\Http\Controllers\AuthController@login');
    Route::post('logout', 'App\Http\Controllers\AuthController@logout');
    Route::post('refresh', 'App\Http\Controllers\AuthController@refresh');
    Route::get('me', 'App\Http\Controllers\AuthController@me');
    Route::get('getPermission', 'App\Http\Controllers\AuthController@getPermission');
    Route::post('signup', 'App\Http\Controllers\AuthController@signup');
    Route::get('check', 'App\Http\Controllers\AuthController@check');
    Route::get('app_info', 'App\Http\Controllers\AuthController@app_info');

    // USERS   
    Route::get('displayAllstaff','App\Http\Controllers\UsersController@displayAllstaff');
    Route::get('getDesignations','App\Http\Controllers\UsersController@getDesignations');
    Route::get('deptModules/{id}','App\Http\Controllers\UsersController@deptModules');

    //GENERAL SETTINGS
    Route::post('updateGeneralset', 'App\Http\Controllers\SettingsController@updateGeneralset');
    Route::post('updateAppImage', 'App\Http\Controllers\SettingsController@updateAppImage');

    // NOTIFICATIONS  
    Route::get('getNotifications', 'App\Http\Controllers\NotificationController@getNotifications');
    Route::get('seeNotification/{id}','App\Http\Controllers\NotificationController@seeNotification');

    //POSSITIONS
    Route::get('GETAllPosition', 'App\Http\Controllers\SettingsController@GETAllPosition');
    Route::get('onEditPos/{id}','App\Http\Controllers\SettingsController@onEditPos');
    Route::post('permtes', 'App\Http\Controllers\SettingsController@permtes');

    //DEPERTMENTS-CENTERS
    Route::get('centerType','App\Http\Controllers\CenterController@centerType');
    Route::post('CenterTypes','App\Http\Controllers\CenterController@CenterTypes');
    Route::post('updateCenterType','App\Http\Controllers\CenterController@updateCenterType');
    Route::post('editCentertype','App\Http\Controllers\CenterController@editCentertypes');
    Route::post('deleteCenterType','App\Http\Controllers\CenterController@deleteCenterType'); 

    //CENTER
    Route::get('getDepertment','App\Http\Controllers\CenterController@getDepertment');
    Route::get('displaysetBranch','App\Http\Controllers\CenterController@displaysetBranch');
    Route::get('getAllUnits','App\Http\Controllers\CenterController@getAllUnits');
    Route::post('createCenters', 'App\Http\Controllers\CenterController@createCenters');
    Route::post('onEditBranch','App\Http\Controllers\CenterController@onEditBranch'); 
    Route::post('updateBranch', 'App\Http\Controllers\CenterController@updateBranch');
    Route::post('suspendBranch', 'App\Http\Controllers\CenterController@suspendBranch');
    Route::post('activateBranch', 'App\Http\Controllers\CenterController@activateBranch');
    Route::post('trashBranch', 'App\Http\Controllers\CenterController@trashBranch');

    //TEAMS
    Route::get('Teams','App\Http\Controllers\TeamController@Teams');
    Route::post('AddTeam','App\Http\Controllers\TeamController@AddTeam');
    Route::post('editingTeam','App\Http\Controllers\TeamController@editingTeam');
    Route::post('editTeam','App\Http\Controllers\TeamController@editTeam');
    Route::post('deleteTeam','App\Http\Controllers\TeamController@deleteTeam');

    // RANKS
    Route::get('Ranks','App\Http\Controllers\RanksController@Ranks');
    Route::post('AddRank','App\Http\Controllers\RanksController@AddRank');
    Route::post('editingRank','App\Http\Controllers\RanksController@editingRank');
    Route::post('editRank','App\Http\Controllers\RanksController@editRank');
    Route::post('deleteRank','App\Http\Controllers\RanksController@deleteRank');
});
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/*Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});*/
