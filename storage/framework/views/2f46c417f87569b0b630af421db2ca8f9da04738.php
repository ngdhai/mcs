<?php echo $products->scripts(); ?>

<script>
    $(document).ready(function(){

        $(".shopmag-shop-filter").click(function(){
            $(".shopmag-shop-column").toggleClass("has-filter");
        });
    });
    function productQuickView(product_id, modal_title = false) {
        $.get(mw.settings.api_url + 'product/quick-view', {id:product_id},
            function (data) {
                // $('.js-shopmang2-modal').find('.modal-title').html(modal_title);
                $('.js-shopmang2-modal').find('.modal-body').html(data);
                $('.js-shopmang2-modal').modal('show');
            }
        );
    }
</script>
<div class="row shop-products">

    <?php if($products->hasFilter()): ?>
    <div class="shopmag-shop-column shopmag-shop-left-column col-xl-3">
        <nav class=" navbar-expand-lg navbar-light">
                <button class="navbar-toggler btn-outline-primary w-100" type="button" data-bs-toggle="collapse" data-bs-target="#shopmag-shop-filters-hamburger" aria-controls="shopmag-shop-filters-hamburger" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="mdi mdi-filter-outline"></i>
                </button>

                <div class="collapse navbar-collapse pt-3" id="shopmag-shop-filters-hamburger">
                    <div id="accordion">
                        <div class="card border-0 text-dark bg-white">

                            <?php echo $products->filtersActive(); ?>


                            <?php echo $products->search(); ?>


                            <?php echo $products->categories(); ?>


                            <?php echo $products->tags(); ?>


                            <?php echo $products->filters(); ?>


                        </div>
                    </div>
                </div>
        </nav>
    </div>
    <?php endif; ?>

    <div class="shopmag-shop-column shopmag-shop-right-column <?php if($products->hasFilter()): ?> col-xl <?php else: ?> col-xl-12 <?php endif; ?>">
        <div class="row">
            <div class="col-xxl-6 col-xl-5 col-lg-7 col-lg-2 col-lg-5 py-xl-0 py-4">
                <p> <?php _e("Displaying"); ?> <?php echo e($products->count()); ?> <?php _e("of"); ?> <?php echo e($products->total()); ?>  <?php _e("result(s)"); ?>.</p>
            </div>
            <div class="col-xxl-6 col-xl-7 col-lg-5 d-block d-sm-flex justify-content-end">
                <div class="col-12 col-sm px-1 ms-auto"><?php echo $products->limit(); ?></div>
                <div class="col-12 col-sm px-1 ms-auto"><?php echo $products->sort(); ?></div>
                <?php if($products->hasFilter()): ?>
                <a class="shopmag-shop-filter d-xl-block d-none col-12 col-sm-1 btn btn-outline-primary align-self-center px-2 mb-3 ms-auto text-end"><i class="theme-icon-slider mdi mdi-filter-outline"></i></a>
                <?php endif; ?>
            </div>
        </div>

        <div class="row">
            <?php $__currentLoopData = $products->results(); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $product): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <div class="col-md-6 col-lg-4 col-xl-4 item-<?php echo e($product->id); ?> mb-5">

                    <div class="product">
                        <input type="hidden" name="content_id" value="<?php echo e($product->id); ?>"/>

                        <a href="<?php echo e(site_url($product->url)); ?>">
                            <div class="image">
                                <img src="<?php echo e($product->thumbnail(600,800, true)); ?>" alt="">

                                <div class="hover">
                                    <?php if ($product->inStock == true): ?>
                                    <a href="javascript:;" onclick="mw.cart.add('.shop-products .item-<?php echo e($product->id); ?>', '<?php echo e($product->price); ?>','<?php echo e($product->title); ?>');" class="btn btn-default"><i class="mdi mdi-shopping"></i></a>
                                    <a href="<?php echo e(site_url($product->url)); ?>" class="btn btn-default"><i class="mdi mdi-eye"></i></a>
                                    <?php else: ?>
                                    <a href="javascript:;" onclick="alert('This product is out of stock');" class=" btn btn-default"><i class="mdi mdi-cart-off"></i></a>
                                    <a href="<?php echo e(site_url($product->url)); ?>" class="btn btn-default"><i class="mdi mdi-eye"></i></a>
                                    <?php endif; ?>

                                    <a href="#" onclick="productQuickView('<?php echo e($product->id); ?>', '<?php echo e(_e('Quick view ')); ?> <?php echo e($product->title); ?>')" class="btn btn-default"><i class="mdi mdi-magnify-plus-outline"></i></a>
                                </div>
                            </div>
                        </a>

                        <div class="mt-3">
                            <a href="<?php echo e(site_url($product->url)); ?>">
                                <div class="title pb-2"><?php echo e($product->title); ?></div>
                            </a>


                            <div class="mb-2">
                                <?php $__currentLoopData = $product->tags; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $tag): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                    <span class="badge badge-lg p-0"><a href="?tags[]=<?php echo e($tag->slug); ?>"><?php echo e($tag->name); ?></a></span>
                                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                            </div>

                            <div class="row justify-content-center">
                                <div class="col-md-12 price-holder">
                                    <p>
                                        <?php if($product->hasSpecialPrice()): ?>
                                            <span class="price-old"><?php print currency_format($product->specialPrice); ?></span>
                                        <?php endif; ?>
                                        <span class="money"><?php print currency_format($product->price); ?></span>
                                    </p>
                                </div>

                                
                                   
                                    
                                       
                                    
                                    
                                
                            </div>
                        </div>


                    </div>
                </div>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </div>
    </div>

    <div class="row mb-5">
        <?php echo $products->pagination(); ?>

    </div>
</div>





<?php /**PATH /var/www/html/userfiles/templates/shopmag/modules/shop/src/resources/views//index.blade.php ENDPATH**/ ?>