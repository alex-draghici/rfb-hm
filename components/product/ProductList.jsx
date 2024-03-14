import Product from './Product';

const ProductList = ({ products }) => (
    <div className="grid grid-cols-2 lg:grid-cols-3 place-items-center gap-6 lg:gap-14 p-4">
        {products.map((product, index) => (
            <Product key={product.id} product={product} index={index}/>
        ))}
    </div>
);

export default ProductList;