import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const ProductImages = ({ productName, selectedImage, productImages }) => {
    // Track if the mouse is hovering over the image
    const [isHovering, setIsHovering] = useState(false);

    // Hold the next image to be displayed on hover
    const [nextImage, setNextImage] = useState(null);

    // calculate the next image to display when the selectedImage or productImages change
    useEffect(() => {
        const currentIndex = productImages.findIndex(image => image.hex === selectedImage.hex);
        const nextIndex = (currentIndex + 1) % productImages.length;
        setNextImage(productImages[nextIndex]);
    }, [selectedImage, productImages]);

    let description = `${productName} - ${isHovering && nextImage ? nextImage.color : selectedImage.color}`

    return (
        <div
            className="product-image p-4 flex justify-center bg-[#F9F9F7]"
            role="img"
            aria-label={description}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <Image
                src={isHovering && nextImage ? nextImage.productImage : selectedImage.productImage}
                alt={description}
                priority={true}
                width={224}
                height={200}
                quality={65}
                className={`max-w-[224px] max-h-[200px] mix-blend-multiply object-contain aspect-auto transition duration-700 ease-in-out hover:scale-[1.15]`}
            />
        </div>
    );
};

export default ProductImages;
