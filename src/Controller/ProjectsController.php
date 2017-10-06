<?php
/**
 * CakePHP(tm) : Rapid Development Framework (http://cakephp.org)
 * Copyright (c) Cake Software Foundation, Inc. (http://cakefoundation.org)
 *
 * Licensed under The MIT License
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright Copyright (c) Cake Software Foundation, Inc. (http://cakefoundation.org)
 * @link      http://cakephp.org CakePHP(tm) Project
 * @since     0.2.9
 * @license   http://www.opensource.org/licenses/mit-license.php MIT License
 */
namespace App\Controller;

use Cake\Core\Configure;
use Cake\Network\Exception\ForbiddenException;
use Cake\Network\Exception\NotFoundException;
use Cake\View\Exception\MissingTemplateException;


class ProjectsController extends AppController
{


    public function listProject(){

        // popup info
        /*
         * projet use skills
         *  -> name project
         *  -> link project
         */

        $SkillCats_id = $this->request->data['id_skill'];

        $projects = null;
        if(!empty($SkillCats_id)){
            $projects = $this->Projects->SkillsProjects->find()
                ->where(['skill_id' => $SkillCats_id])
                ->contain('Projects')
                ->toArray();
        }


        debug($projects);

        die('ok');

    }


}
