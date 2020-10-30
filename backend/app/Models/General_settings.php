<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class General_settings extends Model
{
    use HasFactory;
    protected $table= 'general_settings';
    protected $fillable = [
        'company_name','short_name','address','logo','icon','contact_number','email','web_url','app_url','for_email','module','status','license_key','expiring_date','app','create_date','create_time','created_at','updated_at'
    ];
}
