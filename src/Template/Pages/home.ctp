<?= $this->element('banner_home'); ?>

<section id="skills" class="container clearfix">
    <h2 class="title">Skills</h2>
    <div class="wrapper_skills"></div>
</section>

<section id="xp" >
    <div class="container clearfix" >
        <h2 class="title">Historique</h2>
        <div class="wrapper_xp"></div>
        <div class="content_more"></div>
    </div>
</section>

<section id="hobbies">
    <div class="container clearfix" >
        <h2 class="title">Présentation</h2>
        <?= $this->element('hobbies'); ?>
    </div>
</section>

<section id="feed" class="container clearfix">
    <h2 class="title">Les actues fraiches</h2>
    <div class="wrapper_feed"></div>
</section>

<section id="contact" class="container clearfix">
<h2 class="title">Contacte</h2>
<div class="wrapper_contact">

<div class="row">
    <div class="col-md-9">
        <textarea>
            Votre message
        </textarea>
    </div>
    <div class="col-md-3">
        <select>
            <option>Je vous contact pour :</option>
            <option>Un recrutement</option>
            <option>Un projet</option>
            <option>autre</option>
        </select>
        <button type="submit" class="btn btn-default"> Send </button>
        <hr/>
        <p>t.sire41@gmail.com</p>
    </div>
</div>

</div>
</section>

        <?php $this->Html->script('home', ['block' => true]); ?>