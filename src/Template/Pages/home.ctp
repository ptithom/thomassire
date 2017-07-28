<?= $this->element('banner_home'); ?>

<section id="skills">
    <h2 class="title">Mes skills</h2>
    <?= $this->element('skills'); ?>
</section>

<section id="xp">
    <h2 class="title">Historique</h2>
    <?= $this->element('xp'); ?>
</section>

<section id="hobbies">
    <h2 class="title">Je me définis</h2>
    <?= $this->element('hobbies'); ?>
</section>

<section id="feed" >
    <h2 class="title">Les actues fraiches</h2>
    <div class="wrapper_feed"></div>
</section>


        <?php $this->Html->script('home', ['block' => true]); ?>