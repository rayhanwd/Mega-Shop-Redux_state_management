import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import ProductComponent from './ProductComponent';
import { setProducts } from './../redux/actions/productsActions';

const ProductListing = () => {

    document.title="Mega shop | online store";
    const products = useSelector((state) => state);

    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const res = await axios.get('https://fakestoreapi.com/products')
            .catch((err) => {
                console.log(err, 'Error');
            });
            dispatch(setProducts(res.data));
    }

    useEffect(() => {
        fetchProducts();
    }, [])
   
    return (
        <div className="ui grid container">
            <ProductComponent />
        </div>
    );
};

export default ProductListing;