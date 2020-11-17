<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class Branches extends Model
{
    protected $table= 'branches';
    protected $fillable = [
        'name', 'br_name', 'description', 'status', 'dept_id','center_type', 'branch_id', 'staff_id'
    ];
}
