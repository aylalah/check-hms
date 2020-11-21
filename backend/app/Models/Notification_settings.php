<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Notification_settings extends Model
{
    use HasFactory;
    protected $table= 'notification_settings';
    protected $fillable = [
        'name','subject','title','message','image','slug','ids','link','path','status','updated_by','updated_day','updated_time'
    ];
}
