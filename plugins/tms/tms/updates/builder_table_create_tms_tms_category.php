<?php namespace Tms\Tms\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateTmsTmsCategory extends Migration
{
    public function up()
    {
        Schema::create('tms_tms_category', function($table)
        {
            $table->increments('id')->unsigned();
            $table->text('name');
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('tms_tms_category');
    }
}
