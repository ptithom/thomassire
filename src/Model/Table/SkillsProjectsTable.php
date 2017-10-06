<?php


namespace App\Model\Table;

use Cake\ORM\Table;

class SkillsProjectsTable extends Table
{

    public function initialize(array $config)
    {
        $this->hasOne(['Projects','Catskills']);
    }

}