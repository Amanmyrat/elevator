<?php namespace Tms\Tms\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateTmsTmsNews extends Migration
{
    public function up()
    {
        Schema::table('tms_tms_news', function($table)
        {
            $table->smallInteger('category_id');
        });
    }
    
    public function down()
    {
        Schema::table('tms_tms_news', function($table)
        {
            $table->dropColumn('category_id');
        });
    }
}
