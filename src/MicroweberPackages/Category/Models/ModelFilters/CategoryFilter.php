<?php
/**
 * Created by PhpStorm.
 * User: Bojidar
 * Date: 10/15/2020
 * Time: 3:25 PM
 */

namespace MicroweberPackages\Category\Models\ModelFilters;

use EloquentFilter\ModelFilter;
use MicroweberPackages\Category\Models\ModelFilters\Traits\FilterByAvailableProductsByCategoryTrait;
use MicroweberPackages\Content\Models\ModelFilters\Traits\OrderByTrait;

class CategoryFilter extends ModelFilter
{
    use OrderByTrait;
    use FilterByAvailableProductsByCategoryTrait;

}