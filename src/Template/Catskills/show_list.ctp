
<ul>
    <?php $tmp_up = false; ?>
    <?php foreach($cat_skills as $key => $cat_skill ): ?>

        <?php if($tmp_up){$tmp_up = false;continue;} ?>

        <?php if($cat_skill["col"] == "12"): ?>
                <li class="row wrapper_skill lg-size" data-id_skill="<?= $cat_skill["id"] ?>">
                        <div class="col-md-3 container_gif"
                             style="background-image:url(<?= $cat_skill["path_media"] ?>)"></div>
                    <div class="col-md-9 container_content">
                        <h3 class="title"><?= $cat_skill["name"] ?></h3>
                        <p class="desc">
                            <?= $cat_skill["description"] ?>
                        </p>
                        <?php if(!empty($cat_skill["skills"] )): ?>
                            <ul class="list_picto">
                                <?php foreach($cat_skill["skills"] as  $skill ): ?>
                                <li><?= $skill["name"] ?></li>
                                <?php endforeach; ?>
                            </ul>
                        <?php endif; ?>

                        <div class="view_project"> Les projets <i class="fa fa-chevron-down" aria-hidden="true"></i></div>
                    </div>
                </li>

                <li class="content_more">

                </li>

            <?php else: ?>

            <li class="row wrapper_skill md-size">
                <div class="col-md-6">
                    <div class="container_content">
                        <h3 class="title"><?= $cat_skill["name"] ?></h3>
                        <p class="desc">
                            <?= $cat_skill["description"] ?>
                        </p>
                        <?php if(!empty($cat_skill["skills"] )): ?>
                            <ul class="list_picto">
                                <?php foreach($cat_skill["skills"] as  $skill ): ?>
                                    <li><?= $skill["name"] ?></li>
                                <?php endforeach; ?>
                            </ul>
                        <?php endif; ?>
                    </div>
                </div>

                <?php $cat_skill = $cat_skills[$key+1]; $tmp_up = true; ?>

                <div class="col-md-6">
                    <div class="container_content ">
                        <h3 class="title"><?= $cat_skill["name"] ?></h3>
                        <p class="desc">
                            <?= $cat_skill["description"] ?>
                        </p>
                        <?php if(!empty($cat_skill["skills"] )): ?>
                            <ul class="list_picto">
                                <?php foreach($cat_skill["skills"] as  $skill ): ?>
                                    <li><?= $skill["name"] ?></li>
                                <?php endforeach; ?>
                            </ul>
                        <?php endif; ?>
                    </div>
                </div>
            </li>

        <?php endif; ?>
    <?php endforeach; ?>


</ul>
