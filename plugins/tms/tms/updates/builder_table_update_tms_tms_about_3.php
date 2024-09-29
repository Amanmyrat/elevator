<?php namespace Tms\Tms\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateTmsTmsAbout3 extends Migration
{
    public function up()
    {
        Schema::table('tms_tms_about', function($table)
        {
            $table->smallInteger('type');
        });
    }
    
    public function down()
    {
        Schema::table('tms_tms_about', function($table)
        {
            $table->dropColumn('type');
        });
    }
}
