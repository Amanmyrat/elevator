<?php namespace Tms\Tms\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateTmsTmsNews extends Migration
{
    public function up()
    {
        Schema::create('tms_tms_news', function($table)
        {
            $table->increments('id')->unsigned();
            $table->text('title');
            $table->text('short_description');
            $table->text('description');
            $table->date('published_at');
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('tms_tms_news');
    }
}
