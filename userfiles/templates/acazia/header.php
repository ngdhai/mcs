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
<div id="fb-root"></div>
<div class="fb-customerchat" id="fb-customer-chat"></div>
<div class="custom-modal modal-wrapper" id="free-quote-modal">
    <div class="modal-overlay"></div>
    <div class="modal-content">
        <div class="modal-close"><img class="lazy" data-src="{TEMPLATE_URL}assets/icons/icon-close-modal.svg" alt=""></div>
        <div class="free-quote-wrapper flex flex-wrap" id="contact-form-get-free-quote">
            <div class="wrapper-item">
                <h4 class="trn">What do you want to achieve?</h4>
                <form class="form-wrapper" action="#">
                    <div class="form-group">
                        <div class="form-item">
                            <input type="text" placeholder="Your name" name="name">
                            <p class="form-error"></p>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-item">
                            <input type="text" placeholder="Your email address" name="email">
                            <p class="form-error"></p>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-item">
                            <input type="text" placeholder="Phone number (optional)" name="phone">
                            <p class="form-error"></p>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-item">
                            <input type="text" placeholder="Tell us about your project" name="project">
                            <p class="form-error"></p>
                        </div>
                    </div>
                </form>
                <div class="message-submit" style="margin-bottom: 25px;"></div>
                <div class="flex items-center send-us-message">
                    <button class="primary free-quote-submit button-component" id=""><span class="button-title trn">Send us a message</span>
                    </button>
                    <p><span class="trn">Or contacts us directly at</span><a href="tel: 02435268111"><strong
                                class="primary-color" style="padding: 0 3px;">0243 5268 111</strong></a></p>
                </div>
                <p class="term"><span class="trn">This site is protected by reCAPTCHA and the Google</span><a
                        class="trn" href="privacy-policy.html" target="_blank" style="padding: 0 3px;">Privacy
                        Policy</a><span class="trn">and</span><a class="trn" href="term-of-services.html" target="_blank"
                                                                 style="padding: 0 3px;">Terms of Service</a></p>
            </div>
            <div class="wrapper-item flex flex-col">
                <div class="free-quote-point">
                    <div class="point-item flex">
                        <div class="item-icon"><img class="lazy"
                                                    data-src="https://acaziasoftcom.s3.amazonaws.com/assets/images/image-popup-free-quote-1.png"
                                                    alt=""></div>
                        <div class="item-content">
                            <h6 class="trn">We’ll get back to you in 24 hours</h6>
                            <p class="trn">To get to know each other and address your needs as quick as possible.</p>
                        </div>
                    </div>
                    <div class="point-item flex">
                        <div class="item-icon"><img class="lazy"
                                                    data-src="https://acaziasoftcom.s3.amazonaws.com/assets/images/image-popup-free-quote-2.png"
                                                    alt=""></div>
                        <div class="item-content">
                            <h6 class="trn">We'll work together on possible scenarios</h6>
                            <p class="trn">For the software development strategy in sync with your goals.</p>
                        </div>
                    </div>
                    <div class="point-item flex">
                        <div class="item-icon"><img class="lazy"
                                                    data-src="https://acaziasoftcom.s3.amazonaws.com/assets/images/image-popup-free-quote-3.png"
                                                    alt=""></div>
                        <div class="item-content">
                            <h6 class="trn">We’ll turn the strategy into an actionable plan</h6>
                            <p class="trn">And provide you with experienced development teams to execute it.</p>
                        </div>
                    </div>
                </div>
                <div class="address-wrapper">
                    <h6 class="trn">Acazia Software Company</h6>
                    <div class="flex justify-between flex-wrap">
                        <div class="address-item">
                            <p><strong class="trn">Headquarters</strong></p>
                            <p class="trn">#57/66 Ngoc Lam St., Long Bien Dist, Hanoi, Vietnam</p>
                        </div>
                        <div class="address-item">
                            <p><strong class="trn">Development Center</strong></p>
                            <p class="trn">2nd floor, No.34 Giang Van Minh stress, Ba Dinh district, Hanoi</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="custom-modal modal-wrapper" id="contact-modal">
    <div class="modal-overlay"></div>
    <div class="modal-content">
        <div class="modal-close"><img class="lazy" data-src="{TEMPLATE_URL}assets/icons/icon-close-modal.svg" alt=""></div>
        <div class="free-quote-wrapper flex flex-wrap">
            <div class="wrapper-item">
                <section class="section section-contact-page">
                    <div class="section-wrapper">
                        <form class="form-contact" action="#">
                            <div class="form-contact-header">
                                <h5 class="form-title big trn">Request an Estimation</h5>
                                <p class="trn">Tell us about your project</p>
                            </div>
                            <div class="form-contact-body" id="contact-form">
                                <h6 class="form-title trn">1. About your company</h6>
                                <div class="form-group half">
                                    <div class="form-item">
                                        <label class="trn">Your Name</label>
                                        <input type="text" name="name">
                                        <p class="form-error"></p>
                                    </div>
                                    <div class="form-item">
                                        <label class="trn">Your Email</label>
                                        <input type="text" name="email">
                                        <p class="form-error"></p>
                                    </div>
                                </div>
                                <div class="form-group full">
                                    <div class="form-item">
                                        <label class="trn">Your Company's biggest challenge today?</label>
                                        <textarea name="challenge"></textarea>
                                        <p class="form-error"></p>
                                    </div>
                                </div>
                                <h6 class="form-title trn">2. What do you have in mind?</h6>
                                <div class="form-group full">
                                    <div class="form-item">
                                        <label class="trn">Project Description (briefly)</label>
                                        <textarea name="description"></textarea>
                                        <p class="form-error"></p>
                                    </div>
                                </div>
                                <h6 class="form-title trn">3. Your budget is...</h6>
                                <div class="form-group half">
                                    <div class="form-item">
                                        <label class="trn">From</label>
                                        <input type="number" name="budgetFrom">
                                        <p class="form-error"></p>
                                    </div>
                                    <div class="form-item">
                                        <label class="trn">To</label>
                                        <input type="number" name="budgetTo">
                                        <p class="form-error"></p>
                                    </div>
                                </div>
                                <h6 class="form-title trn">4. Expertise</h6>
                                <div class="form-group auto">
                                    <div class="form-item flex items-center">
                                        <input type="checkbox" id="Design" name="design" data-label="Design">
                                        <label for="Design" style="margin-bottom: 0;">Design</label>
                                    </div>
                                    <div class="form-item flex items-center">
                                        <input type="checkbox" id="Mobile" name="mobile" data-label="Mobile">
                                        <label for="Mobile" style="margin-bottom: 0;">Mobile</label>
                                    </div>
                                    <div class="form-item flex items-center">
                                        <input type="checkbox" id="Front-end" name="front-end" data-label="Front-end">
                                        <label for="Front-end" style="margin-bottom: 0;">Front-end</label>
                                    </div>
                                    <div class="form-item flex items-center">
                                        <input type="checkbox" id="Back-end" name="back-end" data-label="Back-end">
                                        <label for="Back-end" style="margin-bottom: 0;">Back-end</label>
                                    </div>
                                    <div class="form-item flex items-center">
                                        <input type="checkbox" id="QC" name="qc" data-label="QC">
                                        <label for="QC" style="margin-bottom: 0;">QC</label>
                                    </div>
                                    <div class="form-item flex items-center">
                                        <input type="checkbox" id="Server / DevOps" name="server / devops"
                                               data-label="Server / DevOps">
                                        <label for="Server / DevOps" style="margin-bottom: 0;">Server / DevOps</label>
                                    </div>
                                    <div class="form-item flex items-center">
                                        <input type="checkbox" id="Maintainace" name="maintainace"
                                               data-label="Maintainace">
                                        <label for="Maintainace" style="margin-bottom: 0;">Maintainace</label>
                                    </div>
                                    <p class="form-error expertise-messgage"></p>
                                </div>
                                <div class="message-submit"></div>
                                <div class="form-group auto" style="margin-top: 60px;">
                                    <div class="form-item">
                                        <button class="primary button-component" id=""><span class="button-title trn">Send us a message</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
            <div class="wrapper-item flex flex-col">
                <div class="free-quote-point">
                    <div class="point-item flex">
                        <div class="item-icon"><img class="lazy"
                                                    data-src="https://acaziasoftcom.s3.amazonaws.com/assets/images/image-popup-free-quote-1.png"
                                                    alt=""></div>
                        <div class="item-content">
                            <h6 class="trn">We’ll get back to you in 24 hours</h6>
                            <p class="trn">To get to know each other and address your needs as quick as possible.</p>
                        </div>
                    </div>
                    <div class="point-item flex">
                        <div class="item-icon"><img class="lazy"
                                                    data-src="https://acaziasoftcom.s3.amazonaws.com/assets/images/image-popup-free-quote-2.png"
                                                    alt=""></div>
                        <div class="item-content">
                            <h6 class="trn">We'll work together on possible scenarios</h6>
                            <p class="trn">For the software development strategy in sync with your goals.</p>
                        </div>
                    </div>
                    <div class="point-item flex">
                        <div class="item-icon"><img class="lazy"
                                                    data-src="https://acaziasoftcom.s3.amazonaws.com/assets/images/image-popup-free-quote-3.png"
                                                    alt=""></div>
                        <div class="item-content">
                            <h6 class="trn">We’ll turn the strategy into an actionable plan</h6>
                            <p class="trn">And provide you with experienced development teams to execute it.</p>
                        </div>
                    </div>
                </div>
                <div class="address-wrapper">
                    <h6 class="trn">Acazia Software Company</h6>
                    <div class="flex justify-between flex-wrap">
                        <div class="address-item">
                            <p><strong class="trn">Headquarters</strong></p>
                            <p class="trn">#57/66 Ngoc Lam St., Long Bien Dist, Hanoi, Vietnam</p>
                        </div>
                        <div class="address-item">
                            <p><strong class="trn">Development Center</strong></p>
                            <p class="trn">2nd floor, No.34 Giang Van Minh stress, Ba Dinh district, Hanoi</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<header class="header-layout">
    <div class="container">
        <div class="header-wrapper flex items-center justify-between">
            <div class="nav-module logo-module left">
                <module type="logo" id="logo" template="default"/>
            </div>
            <div class="header-logo-des trn edit">the software development company</div>
            <ul class="header-nav flex">
                <li class="nav-item flex items-center" data-unique="about-us.html"><a class="nav-link trn"
                                                                                      href="about-us">About Us</a>
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
