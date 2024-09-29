<?php namespace Tms\Tms\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateTmsTmsAbout extends Migration
{
    public function up()
    {
        Schema::create('tms_tms_about', function($table)
        {
            $table->integer('id');
            $table->text('description');
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('tms_tms_about');
    }
}
