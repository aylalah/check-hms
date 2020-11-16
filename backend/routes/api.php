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

    //POSSITIONS
    Route::get('GETAllPosition', 'App\Http\Controllers\SettingsController@GETAllPosition');
    Route::get('onEditPos/{id}','App\Http\Controllers\SettingsController@onEditPos');
    Route::post('permtes', 'App\Http\Controllers\SettingsController@permtes');

    //DEPERTMENTS-CENTERS
    Route::get('centerType','App\Http\Controllers\CenterController@centerType');
    Route::post('CenterTypes','App\Http\Controllers\CenterController@CenterTypes');
    Route::post('editCenterType','App\Http\Controllers\CenterController@editCenterType');
    Route::post('editCentertype','App\Http\Controllers\CenterController@editCentertypes');
    Route::post('deleteCenterType','App\Http\Controllers\CenterController@deleteCenterType');
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
