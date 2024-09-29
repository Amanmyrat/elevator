<?php namespace Tms\Tms\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateTmsTmsAbout extends Migration
{
    public function up()
    {
        Schema::table('tms_tms_about', function($table)
        {
            $table->primary(['id']);
        });
    }
    
    public function down()
    {
        Schema::table('tms_tms_about', function($table)
        {
            $table->dropPrimary(['id']);
        });
    }
}
