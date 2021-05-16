import React, { useContext } from 'react';
import { categoryContext } from '../../App';

const Shipment = () => {
    const [cate, setCate] = useContext(categoryContext)//another state and event handler
    return (
        <div>
           <button onClick={()=>setCate(cate+1)}>Update from shipment:{cate}</button>
        </div>
    );
};

export default Shipment;