<?php

/*

type: layout
content_type: static
name: Services
position: 4
description: Services

*/

?>
<?php include template_dir() . "header.php"; ?>

<div class="edit main-content" rel="content" field="acazia_content">
    <module type="layouts" template="service/banner-service"/>
    <module type="layouts" template="project-carousel"/>
    <module type="layouts" template="service/section-our-services"/>
    <module type="layouts" template="section-client"/>
    <module type="layouts" template="section-contact"/>
</div>

<?php include template_dir() . "footer.php"; ?>
