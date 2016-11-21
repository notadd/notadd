<?php
/**
 * This file is part of Notadd.
 *
 * @author TwilRoad <269044570@qq.com>
 * @copyright (c) 2016, iBenchu.org
 * @datetime 2016-09-08 19:21
 */
use Illuminate\Database\Schema\Blueprint;
use Notadd\Foundation\Database\Migrations\Migration;

/**
 * Class CreateSettingsTable.
 */
class CreateSettingsTable extends Migration
{
    /**
     * @return void
     */
    public function up()
    {
        $this->schema->create('settings', function (Blueprint $table) {
            $table->string('key', 100)->primary();
            $table->binary('value')->nullable();
        });
    }

    /**
     * @return void
     */
    public function down()
    {
        $this->schema->drop('settings');
    }
}
