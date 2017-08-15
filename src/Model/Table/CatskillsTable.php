<?php


namespace App\Model\Table;

use Cake\ORM\Table;

class CatskillsTable extends Table
{

    public function initialize(array $config)
    {
        $this->hasMany('Skills');
    }

}