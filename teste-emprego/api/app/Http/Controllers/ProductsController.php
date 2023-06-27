<?php

namespace App\Http\Controllers;

use App\Models\Products;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProductsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Products::all();
    }

    public function store(Request $request)
    {
        // Verificar se o usuário é um gerente
        if (Auth::user()->gerente) {
            return response()->json(['message' => 'Somente o comprador pode cadastrar novos produtos'], 403);
        }

        $productsData = $request->all();

        $createdProducts = Products::createMultiple($productsData);

        return response()->json($createdProducts, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {

        $product = Products::findOrFail($id);
        $product->approved = true;
        $product->save();
        return $product;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Products::destroy($id);
    }
}
