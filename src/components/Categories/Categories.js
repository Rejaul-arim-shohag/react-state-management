import React, { useContext, useEffect, useState } from 'react';
import { categoryContext } from '../../App';
import CategoryDetail from '../CategorDetail/CategoryDetail';

const allProducts = [
    {name : "Lenevo", category:"laptop"},{name : "Asus", category:"laptop"},{name : "Dell", category:"laptop"},
    {name : "Samsung", category:"mobile"},{name : "Nokia", category:"Mobile"},{name : "Apple", category:"mobile"},
    {name : "Cannon", category:"camera"},{name : "Nikon", category:"camera"},{name : "Sony", category:"camera"},
]
const Categories = () => {
    const categorys = {
        border : "1px solid #fff",
        padding: "20px 30px",
    }
    const [category] = useContext(categoryContext);
    const[products, setProducts] = useState([]);
    useEffect(()=>{
        console.log([category])
        const matchedProducts = allProducts.filter(pd => pd.category.toLowerCase() ===  category.toLowerCase())
        setProducts(matchedProducts);
    },[category]);
    return (
        <div style={categorys}>
            <h3>your selected category: {category}</h3>
            {
                products.map(pd=><CategoryDetail product={pd}></CategoryDetail>)
            }
        </div>
    );
};

export default Categories;