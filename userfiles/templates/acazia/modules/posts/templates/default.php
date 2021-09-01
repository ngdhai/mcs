<?php

/*

type: layout

name: Default

description: Default

*/
?>

<div class="row">
    <?php if (!empty($data)): ?>
        <?php foreach ($data as $item): ?>
            <div class="insight-post grid-filter-item active  insights " itemscope itemtype="<?php print $schema_org_item_type_tag ?>">
                <a class="post-image" href="<?php print $item['link'] ?>" itemprop="url">
                    <img alt="<?php print $item['title'] ?>" src="<?php print thumbnail($item['image'], 378, 210, true); ?>">
                </a>
                <h4 class="post-tag">INSIGHTS</h4>
                <a class="post-title" href="<?php print $item['link'] ?>"><?php print $item['title'] ?></a>
                <p>Published on <?php print date('M d, Y', strtotime($item['updated_at'])) ?></p>
            </div>
        <?php endforeach; ?>
    <?php endif; ?>
</div>
<?php if (isset($pages_count) and $pages_count > 1 and isset($paging_param)): ?>
    <?php print paging("num={$pages_count}&paging_param={$paging_param}&current_page={$current_page}") ?>
<?php endif; ?>
