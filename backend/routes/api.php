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
