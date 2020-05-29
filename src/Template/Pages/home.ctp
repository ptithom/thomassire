<?= $this->element('banner_home'); ?>

<section id="skills" class="container clearfix">
    <h2 class="title">Skills</h2>
    <div class="wrapper_skills"></div>
</section>


<section id="hobbies" >
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

    <section id="xp" data-aos="fade-up" >
        <div class="container clearfix" >
            <h2 class="title border_center"><span>Historique</span></h2>
            <div class="wrapper_xp"></div>
            <div class="content_more"></div>
        </div>
    </section>


    <!--<section id="feed" class="container clearfix">
        <h2 class="title border_center"><span>Les actues fraiches</span></h2>

        <div class="wrapper_feed">
            <ul class="list_cat_feed">
                <!--<li data-source="blog"><i class="fa fa-rss" aria-hidden="true"></i></li>-->
            <!--<li data-source="twitter"><i class="fa fa-twitter" aria-hidden="true"></i></li>
            <li data-source="info"><i class="fa fa-star" aria-hidden="true"></i></li>
            <li data-source="all" class="reset  active"><i class="fa fa-reply-all" aria-hidden="true"></i></li>
        </ul>
        <div class="content_feed">

        </div>
</section>-->

<section id="contact" >
    <div class="container clearfix">
        <h2 class="title">Contact</h2>
        <div class="content">
            <p class="up">Pour tout demande et devis</p>
            Je suis a l'écoute de toute proposition, je suis actuelement localisé dans les Pays de la loire plus précisément a Angers.
        </div>
        <div class="wrapper_contact">
            <div class="message hidden"></div>
            <form  id="contactForm" action="/Pages/contact" method="post">
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