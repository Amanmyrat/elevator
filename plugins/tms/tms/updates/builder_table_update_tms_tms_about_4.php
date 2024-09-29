<?php namespace Tms\Tms\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateTmsTmsAbout4 extends Migration
{
    public function up()
    {
        Schema::table('tms_tms_about', function($table)
        {
            $table->string('type', 10)->nullable(false)->unsigned(false)->default(null)->comment(null)->change();
        });
    }
    
    public function down()
    {
        Schema::table('tms_tms_about', function($table)
        {
            $table->smallInteger('type')->nullable(false)->unsigned(false)->default(null)->comment(null)->change();
        });
    }
}
