import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import datas from './data';

function ProductScreen(props) {

    const [qty, setQty] = useState(1)
    const [price, setPrice] = useState(0)

    const product = datas.products.find(x => x._id == props.match.params.id)
    console.log(product)

    const handleAddToCart = () => {
        props.history.push('/cart/' + props.match.params.id + '?qty=' + qty);
      };
    
    const changePrice = (e) =>{
        setPrice(e * product.price)
    }

    return (
        <div>
            <div className="back-to-result">
                <Link to="/products">Back to result</Link>
            </div>
            <div className="details">
                <div className="details-info">
                    <ul>
                        <li>
                            <h4>{product.name}</h4>
                        </li>
                        <li>
                            Price: <b>${product.price}</b>
                        </li>
                        <li>
                            Description:
                            <div>{product.description}</div>
                        </li>
                    </ul>
                </div>
                <div className="details-image">
                    <img src={product.image} alt="product"></img>
                </div>
                <div className="details-action">
                    <ul>
                        <li>Price: {price === 0 ? product.price : price}</li>
                        <li>
                            Status:{' '}
                            {product.countInStock > 0 ? 'In Stock' : 'Unavailable.'}
                        </li>
                        <li>
                        Qty:{' '}
                            <select
                                value={qty}
                                onChange={(e) => {
                                setQty(e.target.value);
                                changePrice(e.target.value)
                                }}
                            >
                                {[...Array(product.countInStock).keys()].map((x) => (
                                <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                </option>
                                ))}
                            </select>
                        </li>
                        <li>
                            {product.countInStock > 0 && (
                                <button
                                onClick={handleAddToCart}
                                className="button primary"
                                >
                                Add to Cart
                                </button>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ProductScreen;