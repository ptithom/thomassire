<?php


namespace App\Model\Table;

use Cake\ORM\Table;

class SkillsTable extends Table
{

    public function initialize(array $config)
    {
        $this->belongsTo('Catskills');
    }

}