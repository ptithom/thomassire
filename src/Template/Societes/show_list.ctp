
<ul class="list_xp row-eq-height" >

    <?php foreach($societes as $societe ): ?>

        <li class="align-middle" data-id="<?= $societe['id'] ?>">
            <?php if(!empty($societe['path_logo'])): ?>
            <img alt="<?= $societe['name'] ?>" title="<?= $societe['name'] ?>"
                 src="/webroot/img/societe_logo<?= $societe['path_logo'] ?>"
            />
                <?php else : ?>
                <?= $societe['name'] ?>
            <?php endif ?>
        </li>

    <?php endforeach; ?>

</ul>