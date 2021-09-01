<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="">
<meta name="author" content="">
<title>Some Title</title>

<!-- Bootstrap Core CSS -->
<link href="<?php print template_url(); ?>css/bootstrap.min.css" rel="stylesheet">

<!-- Custom CSS -->
<link href="<?php print template_url(); ?>assets/css/socicon.css" rel="stylesheet">
<link href="<?php print template_url(); ?>assets/css/main.css" rel="stylesheet">
<link href="<?php print template_url(); ?>css/custom.css" rel="stylesheet">
<script type="text/javascript" src="<?php print template_url('assets/css/socicon.css'); ?>"></script>
<script type="text/javascript" src="<?php print template_url('assets/js/lazyload.min.js'); ?>"></script>
<script type="text/javascript" src="<?php print template_url('assets/js/default.js'); ?>"></script>

<!-- <script type="text/javascript" src="<?php print template_url('assets/js/jquery.min.js'); ?>"></script> -->
<!-- <script type="text/javascript" src="<?php print template_url('assets/js/owl.carousel.min.js'); ?>"></script> -->
<script type="text/javascript" src="<?php print template_url('assets/js/typer.js'); ?>"></script>
<!-- <script type="text/javascript" src="<?php print template_url('assets/js/axios.min.js'); ?>"></script> -->
<script type="text/javascript" src="<?php print template_url('assets/js/jquery.translate.js'); ?>"></script>
<script type="text/javascript" src="<?php print template_url('assets/js/main.js'); ?>"></script>

</head>
<body>
<header class="header-layout">
    <div class="container">
        <div class="header-wrapper flex items-center justify-between">
            <div class="nav-module logo-module left">
                <module type="logo" id="logo" template="default"/>
            </div>
            <div class="header-logo-des trn edit">the software development company</div>
            <ul class="header-nav flex">
                <li class="nav-item flex items-center" data-unique="about-us.html"><a class="nav-link trn"
                                                                                      href="abc">About Us</a>
                </li>
                <li class="nav-item flex items-center" data-unique="services.html"><a class="nav-link trn"
                                                                                      href="services">Services</a>
                </li>
                <li class="nav-item flex items-center" data-unique="products.html"><span
                        class="nav-link trn">Showcases</span><img class="lazy nav-arrow"
                                                                  data-src="{TEMPLATE_URL}assets/icons/icon-angle-down.svg" alt="">
                    <ul class="nav-sub-menu header-nav">
                        <li class="nav-item flex items-center" data-unique="portfolio-app.html"
                            data-uniquegroup="products.html"><a class="nav-link trn" href="portfolio-app">Apps</a>
                        </li>
                        <li class="nav-item flex items-center" data-unique="portfolio-game.html"
                            data-uniquegroup="products.html"><a class="nav-link trn"
                                                                href="portfolio-game">Games</a>
                        </li>
                    </ul>
                </li>
                <li class="nav-item flex items-center"><a class="nav-link trn" href="blogs">Blogs</a>
                </li>
                <div class="get-free-quote-mobile">
                    <button class="primary small button-component" id="open-contact-modal"><span
                            class="button-title trn">Get a free quote!</span></button>
                </div>
            </ul>
            <div class="header-get-free-quote flex items-center">
                <button class="primary button-component" id="open-contact-modal"><span class="button-title trn">Get a free quote!</span>
                </button>
                <div class="header-mobile-menu"><span></span><span></span><span></span></div>
            </div>
        </div>
    </div>
</header>
<div class="main-wrapper">
