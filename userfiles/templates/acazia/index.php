<?php

/*
  type: layout
  content_type: static
  name: Home
  position: 1
  description: Home layout
*/

?>

<?php include template_dir() . "header.php"; ?>

    <div class="edit main-content" rel="content" field="acazia_content">
        <module type="layouts" template="banner-home"/>
        <module type="layouts" template="project-carousel"/>
        <module type="layouts" template="section-welcome"/>
        <module type="layouts" template="section-services"/>
        <module type="layouts" template="section-package"/>
        <module type="layouts" template="section-client"/>
        <module type="layouts" template="section-insight"/>
        <module type="layouts" template="section-contact"/>
    </div>

<?php include template_dir() . "footer.php"; ?>
