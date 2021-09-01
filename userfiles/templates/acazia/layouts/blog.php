<?php

/*

type: layout
content_type: dynamic
name: Blog
position: 3
description: Blog

*/


?>
<?php include template_dir() . "header.php"; ?>

<div class="edit main-content" rel="content" field="acazia_content">
    <module data-type="posts" template="banner-blog" id="banner-blog-<?php print PAGE_ID; ?>"/>
    <section class="section section-insight-posts">
        <div class="container">
            <module data-type="posts" id="blog-posts-<?php print PAGE_ID; ?>"/>
        </div>
    </section>
    <module data-type="posts" template="section-contact" id="section-contact-<?php print PAGE_ID; ?>"/>
</div>

<?php include template_dir() . "footer.php"; ?>
