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
use Abraham\TwitterOAuth\TwitterOAuth;


class FeedController extends AppController
{


    public function index(){


        if(!empty($this->request->data['source']) && $this->request->data['source'] != 'all' ){
            if($this->request->data['source'] == "blog")
                $posts = $this->getblogpost(15);
            else if($this->request->data['source'] == "twitter")
                $posts = $this->gettweeterpost(15);
            else if($this->request->data['source'] == "info")
                $posts = $this->getinternalpost(15);
        }else{
            $posts = $this->getblogpost(5);
            $this->array_insert($posts,2,$this->gettweeterpost(5));
            $this->array_insert($posts,count($posts),$this->getinternalpost(5));
        }


        for($i= 0 ; $i <= count($posts) ; $i=$i+3){

            if(!empty($posts[$i]))
                $col_posts['1'][] = $posts[$i];
            if(!empty($posts[$i+1]))
                $col_posts['2'][] =  $posts[$i+1];
            if(!empty($posts[$i+2]))
                $col_posts['3'][] =  $posts[$i+2];

        }

        $this->set(['col_posts' => $col_posts ]);


    }

    function array_insert (&$array, $position, $insert_array) {
        $first_array = array_splice ($array, 0, $position);
        $array = array_merge ($first_array, $insert_array, $array);
    }


    public function getblogpost($nb_items = 10){

        $date ="";
        $feed_count=0;
        $thumbnail= "https://media.giphy.com/media/BYV7OzfoaFjl6/giphy.gif";

        $feed_url = "http://egouts.tetrapolis.fr/feed/";
        $feed = new \DOMDocument();
        $feed->load($feed_url);

        foreach ($feed->getElementsByTagName('item') as $node) {

            $title = $node->getElementsByTagName('title')->item(0)->nodeValue;
            $desc  = $node->getElementsByTagName('description')->item(0)->nodeValue;
            $link = $node->getElementsByTagName('link')->item(0)->nodeValue;

            if (($node->getElementsByTagName('thumbnail')->length) >0) { // To eliminate non-object error in PHP
                $thumbnail = $node->getElementsByTagName('thumbnail')->nodeValue;
            }

            if (($node->getElementsByTagName('pubDate')->length) >0) { // To eliminate non-object error in PHP
                $date = $node->getElementsByTagName('pubDate')->item(0)->nodeValue;
            }

            $posts[] = array(
                'type'    => 'blog',
                'title'   => $title,
                'date'    => $date,
                'link'    => $link,
                'image'   => $thumbnail,
                'content' => substr(trim(preg_replace('`Lire la suite(.)+$`', '', strip_tags($desc, '<br><br/><p></p>'))), 0, 500),
            );


            $feed_count +=1;
            if ($feed_count >= $nb_items) {break;}

        }

        setlocale(LC_TIME, 'fr_FR.utf8', 'fra');

        return $posts;

    }

    public function gettweeterpost(){

        $consumerkey = "0lfYfh7nRfmjBGZLkqAbaAgDu";
        $consumersecret = "F18620ghdYZHw7RpVwWqgcCZprmY29bEr1G02hrXsB8IV35Wnp";
        $accesstoken = "3544679416-0xudhcUhTdYzopKqlqCQ2dnEgLbdConGa4Gfs4i";
        $accesstokensecret = "Wevt7zjFSF3N5SEF61pF2usyDjQ0kjLv8hH8mJFAAPMKE";

        $connection = new TwitterOAuth($cons_key, $cons_secret, $oauth_token, $oauth_token_secret);

        $array_tweets = $connection->get("https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=EtienneGlemot&count=1");
        echo '<ul class="list_tweets">';
        if(!empty($array_tweets)){

            foreach($array_tweets as $name ){
                $newDate = date("d F", strtotime($name->created_at));
                echo '<li class="block_tweet">';
                echo '<p>'.$name->text.'</p>';
                echo '<p class="date_tw">'.$newDate.'</p>';
                echo '</li>';
            }
        }
        echo '</ul>';
        die();

//        $desc = "On est pas bien la ! :)
//3eme écran installé au bureau.
//Je vais finir par y installer mon lit ^^… https://www.instagram.com/p/BPIf8cAAjm-/ ";
//
//        $posts[] = array(
//            'type'    => 'twitter',
//            'title'   => "Dernier Tweets @PtiThoom",
//            'date'    => "15.June",
//            'link'    => "https://twitter.com/PtiThoom?lang=fr",
//            'content' => substr(trim(preg_replace('`Lire la suite(.)+$`', '', strip_tags($desc, '<br><br/><p></p>'))), 0, 500),
//        );
//
//        return $posts;

    }

    public function getinternalpost(){

        $desc = "                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Donec bibendum interdum leo. Donec fringilla elementum sem ut accumsan. Q
                            uisque erat est, viverra id velit sit amet,";

        $posts[] = array(
            'type'    => 'info',
            'date'    => "15.June",
            'content' => substr(trim(preg_replace('`Lire la suite(.)+$`', '', strip_tags($desc, '<br><br/><p></p>'))), 0, 500),
        );


        return $posts;
    }



}
