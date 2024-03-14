export const products = {
    "iphone": [
        {
            id: 1,
            name: 'Mobile phone Apple iPhone 12, 128GB, 5G',
            url: 'iphone-12',
            images: [
                {
                    color: 'purple',
                    hex: '#B8AFE6',
                    productImage: '/assets/products/iphone-12-purple-front.jpg',
                },
                {
                    color: 'blue',
                    hex: '#043458',
                    productImage: '/assets/products/iphone-12-blue-front.jpg',
                },
                {
                    color: 'green',
                    hex: '#E1F8DC',
                    productImage: '/assets/products/iphone-12-green-front.jpg',
                },
                {
                    color: 'black',
                    hex: '#201D24',
                    productImage: '/assets/products/iphone-12-black-front.jpg',
                },
                {
                    color: 'white',
                    hex: '#FBF7F4',
                    productImage: '/assets/products/iphone-12-white-front.jpg',
                },
                {
                    color: 'red',
                    hex: '#E23636',
                    productImage: '/assets/products/iphone-12-red-front.jpg',
                },
            ],
            price: 99.99,
            currency: 'EUR',
            currencySymbol: '€',
            bestseller: true,
            discount: 25,
        },
        {
            id: 2,
            name: 'Mobile phone Apple iPhone 13 Pro Max, 256GB, 5G, battery health 80%',
            url: 'iphone-13',
            images: [
                {
                    color: 'pink',
                    hex: '#FFC0CB',
                    productImage: '/assets/products/iphone-13-pink-front.jpg',
                },
                {
                    color: 'blue',
                    hex: '#0000FF',
                    productImage: '/assets/products/iphone-13-blue-front.jpg',
                },
            ],
            price: 109.99,
            currency: 'EUR',
            currencySymbol: '€',
            bestseller: false,
            discount: 15,
        },
        {
            id: 3,
            name: 'iPhone 13 Pro',
            url: 'iphone-13-pro',
            images: [
                {
                    color: 'sierra blue',
                    hex: '#BFDBFE',
                    productImage: '/assets/products/iphone-13-pro-sierra-blue-front.jpg',
                },
                {
                    color: 'gold',
                    hex: '#FFD700',
                    productImage: '/assets/products/iphone-13-pro-gold-front.jpg',
                },
            ],
            price: 129.99,
            currency: 'EUR',
            currencySymbol: '€',
            bestseller: true,
            discount: 10,
        },
        {
            id: 4,
            name: 'iPhone 11',
            url: 'iphone-11',
            images: [
                {
                    color: 'purple',
                    hex: '#800080',
                    productImage: '/assets/products/iphone-11-purple-front.jpg',
                }
            ],
            price: 89.99,
            currency: 'EUR',
            currencySymbol: '€',
            bestseller: false,
            discount: false,
        },
    ]
};
