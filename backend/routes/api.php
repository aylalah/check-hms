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
    Route::post('me', 'App\Http\Controllers\AuthController@me');
    Route::post('signup', 'App\Http\Controllers\AuthController@signup');
    Route::get('check', 'App\Http\Controllers\AuthController@check');
    Route::get('app_info', 'App\Http\Controllers\AuthController@app_info');

    //POSSITIONS 
    Route::get('GETAllPosition', 'App\Http\Controllers\SettingsController@GETAllPosition');

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
