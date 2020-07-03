import React from 'react';
import { Link } from 'react-router-dom';
import datas from './data';


function ProductsScreen(props) {
    return (
        <div>
            <h1>Shop</h1>
            <ul className="products">
                {datas.products.map((product) => (
                    <li key={product._id}>
                        <div className="product">
                            <Link to={'/products/' + product._id}>
                            <img
                                className="product-image"
                                src={product.image}
                                alt="product"
                            />
                            </Link>
                            <div className="product-name">
                            <Link to={'/products/' + product._id}>{product.name}</Link>
                            </div>
                            <div>{product.description}</div>
                            <div className="product-price">
                                <div>${product.price}</div>
                                <a href='/products' title="ADD TO CART" ><div>+</div></a>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductsScreen;