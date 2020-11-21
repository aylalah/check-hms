<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Notification extends Model
{
    use HasFactory;
    protected $table= 'notification';
    protected $fillable = [
        'setnotify_id','subject','title','message','image','created_by','position','receiver','link','status','c_time','c_date'
    ];
}
