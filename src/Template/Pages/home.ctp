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
        <h2 class="title">
            <span>Présentation</span>
            <!--<a href="https://drive.google.com/open?id=0ByEW5T63CJzPWHp2eXNScWo0cWc" class="btn_cv" target="_blank">-->
                <!--<i class="fa fa-address-card-o" aria-hidden="true"></i>-->
            <!--</a>-->
        </h2>
        <?= $this->element('hobbies'); ?>
    </div>
</section>

<section id="feed" class="container clearfix">
    <h2 class="title">Les actues fraiches</h2>
    <div class="wrapper_feed"></div>
</section>

<section id="contact" >
    <div class="container clearfix">
        <h2 class="title">Contacte</h2>
        <div class="wrapper_contact">
            <form>
            <div class="form-group">
                <div class="row">
                    <div class="col-md-9">
                        <textarea name="msg" placeholder="Votre message"></textarea>
                    </div>
                    <div class="col-md-3">
                        <input type="text" name="name" placeholder="Votre Nom.Prénom" />
                        <button type="submit" class="btn btn-default"> Envoyer </button>
                        <hr/>
                        <p>t.sire41@gmail.com</p>
                    </div>
                </div>
            </div>
            </form>
        </div>
    </div>
</section>

        <?php $this->Html->script('home', ['block' => true]); ?>