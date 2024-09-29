<?php namespace Tms\Tms\Models;

use Model;
use RainLab\Translate\Behaviors\TranslatableModel;
use System\Models\File;

/**
 * Model
 */
class News extends Model
{
    use \October\Rain\Database\Traits\Validation;

    public $implement = [
        TranslatableModel::class
    ];

    public $translatable = ['title', 'short_description', 'description'];

    protected $dates = ['published_at'];

    /**
     * @var bool timestamps are disabled.
     * Remove this line if timestamps are defined in the database table.
     */
    public $timestamps = false;

    /**
     * @var string table in the database used by the model.
     */
    public $table = 'tms_tms_news';

    /**
     * @var array rules for validation.
     */
    public $rules = [
    ];


    public $attachOne = [
        'image' => File::class,
    ];
}
