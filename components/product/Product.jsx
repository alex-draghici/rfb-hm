'use client';

import React, {useState} from 'react';
import { useRouter } from 'next/navigation'
import BestsellerTag from "./BestsellerTag";
import DiscountTag from "./DiscountTag";
import ProductImages from "./ProductImages";
import ColorSwatches from "./ColorSwatches";

const Product = ({product}) => {
    const router = useRouter()

    // manage the state of the selected image. Initialized with the first image of the product
    const [selectedImage, setSelectedImage] = useState(product.images[0]);

    // manage the state of the selected color. Initialized with the hex value of the first product image
    const [selectedColor, setSelectedColor] = useState(product.images[0].hex);

    // track if a color swatch was clicked. This helps differentiate between initial load and user interaction
    const [isSwatchClicked, setIsSwatchClicked] = useState(false);

    // Handle color swatch clicks. It prevents the event from propagating, updates the selected image, color and sets
    // the swatch clicked flag to true
    const handleSwatchClick = (e, image) => {
        e.stopPropagation();

        // Change the selected image and color on click.
        setSelectedImage(image);
        setSelectedColor(image.hex);

        // Set the flag to true when a swatch is clicked
        setIsSwatchClicked(true);
    };

    // Navigate to the product URL
    const handleCardClick = () => {
        router.push(`#${product.url}`);
    };

    return (
        <article
            aria-label={product.name}
            className="product w-full md:w-[256px] relative bg-white p-2 pb-4 rounded cursor-pointer"
            onClick={handleCardClick}
            title={product.name}
        >

            <BestsellerTag Bac isBestseller={product.bestseller}/>
            <DiscountTag discount={product.discount}/>

            <ProductImages productName={product.name} selectedImage={selectedImage} productImages={product.images} />

            <h3 id={`product-name-${product.id}`} className="product-name mt-4 h-10 text-sm text-black line-clamp-2">
                {product.name}
            </h3>

            <ColorSwatches
                colors={product.images}
                onSwatchClick={(e, image) => handleSwatchClick(e, image)}
                selectedColor={selectedColor}
                isSwatchClicked={isSwatchClicked}
            />

            <div className="product-price mt-4 text-lg text-[#036256]">
                {product.price} {product.currencySymbol}
            </div>
        </article>
    );
};

export default Product;
