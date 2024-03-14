import React from "react";
import ProductList from "../components/product/ProductList";
import { products } from "../data/products";

function Page() {
    const iPhoneProducts = products["iphone"] || [];

    return (
        <>
            <main className="bg-[#E5E6E3]">
                <section id="iphone" className="product-list max-w-[960px] mx-auto" aria-label="iPhone Product List">
                    <h2 className="text-2xl font-bold text-center py-8">iPhone</h2>
                    <ProductList products={iPhoneProducts}/>
                </section>
            </main>
        </>
    );
}

export default Page;
