import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductComponent = () => {
    
    const products = useSelector((state) => state.allProducts.products);

    const productItem = products.map(product => {
       
        const { id, category, title, image, price } = product;
        return (

            <div className="four colum wide" key={id}>
                <Link to={`/products/${id}`}>
                    <div className="ui link cards">
                        <div className="card">
                            <div className="image">
                                <img src={image} alt="title" srcset="" />
                            </div>
                            <div className="content">
                                <div className="header">
                                    {title}
                                </div>
                                <div className="meta price">
                                    ${price}
                                </div>
                                <div className="meta">
                                    {category}
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        );
    });
    return <>{productItem}</>;
};

export default ProductComponent;