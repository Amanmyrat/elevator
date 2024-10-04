<?php namespace Tms\Tms\Models;

use Model;
use RainLab\Translate\Behaviors\TranslatableModel;

/**
 * Model
 */
class Category extends Model
{
    use \October\Rain\Database\Traits\Validation;

    public $implement = [
        TranslatableModel::class
    ];

    public $translatable = ['name'];

    /**
     * @var bool timestamps are disabled.
     * Remove this line if timestamps are defined in the database table.
     */
    public $timestamps = false;

    /**
     * @var string table in the database used by the model.
     */
    public $table = 'tms_tms_category';

    /**
     * @var array rules for validation.
     */
    public $rules = [
    ];

    public $hasMany = [
        'news' => News::class,
    ];

}
