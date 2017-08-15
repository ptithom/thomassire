
    <div class="row">
        <?php foreach($col_posts as $col_post): ?>
        <div class="col-md-4">
            <ul>
                <?php foreach($col_post as $post): ?>
                    <?php if($post["type"] == "blog"): ?>

                        <li class="block_<?= $post["type"] ?> block_feed">
                            <div class="picto"><i class="fa fa-rss" aria-hidden="true"></i></div>
                            <div class="back_img_post" style="background-image:url(<?= $post["image"] ?>)">
                                <a href="<?= $post["link"] ?>" title="<?= $post["title"] ?>" target="_blank" >
                                    <h3 class="title_post">
                                        <?= $post["title"] ?>
                                    </h3>
                                </a>
                            </div>
                            <div class="content">
                                <p class="content-desc">
                                    <?= $post["content"] ?>
                                </p>
                                <div class="more">
                                    <a href="<?= $post["link"] ?>" title="<?= $post["title"] ?>" target="_blank" >
                                        Read more
                                    </a>
                                </div>
                                <div class="data-post">
                                    <p><?= $post["date"] ?></p>
                                </div>
                            </div>
                        </li>
                    <?php elseif($post["type"] == "twitter"): ?>
                        <li class="block_twitter block_feed content">
                            <div class="content">
                                <div class="picto">
                                    <a href="<?= $post["link"] ?>" title="<?= $post["title"] ?>" target="_blank" >
                                        <i class="fa fa-twitter" aria-hidden="true"></i>
                                    </a>
                                </div>
                                <div class="title_post"><?= $post["title"] ?></div>
                                <div class="content-desc">
                                    <?= $post["content"] ?>
                                </div>
                                <div class="data-post">
                                    <p><?= $post["date"] ?></p>
                                </div>
                            </div>
                        </li>
                        <?php elseif($post["type"] == "info"): ?>
                        <li class="block_info block_feed content">
                            <div class="content">
                                <div class="content-desc">
                                    <?= $post["content"] ?>
                                </div>
                                <div class="data-post">
                                    <p><?= $post["date"] ?></p>
                                </div>
                            </div>
                        </li>
                    <?php endif; ?>
                <?php endforeach; ?>
            </ul>
        </div>
        <?php endforeach; ?>
    </div>