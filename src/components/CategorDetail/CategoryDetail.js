import React, { useContext } from 'react';
import { categoryContext } from '../../App';

const CategoryDetail = (props) => {
    console.log("DETAILS",props)
    const {name} =props.product;
    return (
        <div>
            <h4>This is category Detail</h4>
            <h6>{name}</h6>
        </div>
    );
};

export default CategoryDetail;