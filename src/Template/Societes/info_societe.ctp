<div class="close"><i class="fa fa-times" aria-hidden="true"></i></div>
<div class="row">
    <div class="col-md-4">
        <img alt="<?= $societe['name'] ?>" title="<?= $societe['name'] ?>"
             src="/webroot/img/societe_logo<?= $societe['path_logo'] ?>"
        />
    </div>

    <div class="col-md-8">
        <div class="container_content">
            <h3 class="title"><?= $societe['name'] ?></h3>
            <p class="desc">
                <?= $societe['description'] ?>
            </p>
            <a href="<?= $societe['link'] ?>"
                title="<?= $societe['name'] ?>" target="_blank">
                <?= $societe['link'] ?>
            </a>
            <div>
                <div class="date">
                    De <?= $societe['d_start'] ?> à <?= (!empty($societe['d_end']))?$societe['d_end']:"aujourd'hui" ?>
                </div>
                <div class="contrat">
                    poste : <?= $societe['poste'] ?>
                </div>
            </div>

        </div>
    </div>
</div>