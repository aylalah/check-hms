<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Possitions extends Model
{
    use HasFactory;
    protected $table= 'positions';
    protected $fillable = [
        'position_name','dept_id','description','created_by','updated_by'
    ];
}
