<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'company',
        'value',
        'description',
    ];

    public static $rules = [
        'name' => 'required|string|max:255',
        'company' => 'required|string|max:255',
        'value' => 'required|numeric',
        'description' => 'nullable|string',
        'approved' => 'boolean'
    ];

    public static function createMultiple(array $productsData)
    {
        $createdProducts = [];

        foreach ($productsData as $productData) {
            $createdProducts[] = static::create($productData);
        }

        return $createdProducts;
    }
}
