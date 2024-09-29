<?php namespace Tms\Tms\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateTmsTmsAbout2 extends Migration
{
    public function up()
    {
        Schema::table('tms_tms_about', function($table)
        {
            $table->increments('id')->change();
        });
    }
    
    public function down()
    {
        Schema::table('tms_tms_about', function($table)
        {
            $table->integer('id')->change();
        });
    }
}
