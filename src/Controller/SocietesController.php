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


class SocietesController extends AppController
{


    public function showList(){

        //get ilste société

        $data_societes = $this->Societes->find()
            ->select(['id', 'path_logo','name'])
            ->order(['d_start' => 'DESC'])
            ->all()
            ->toArray();
        $this->set(["societes" => $data_societes]);


    }

    public function infoSociete(){

        // popup info
        /*
         * name
         * date debut date fin
         * poste
         * skill developper
         */


        $id_societe = $this->request->data['id'];


        $data_societe = $this->Societes->find()
            ->where(['id' => $id_societe])
            ->first()
            ->toArray();
        $this->set(["societe" => $data_societe]);

    }


}
