import React,{ useContext, useState } from 'react';
import { categoryContext } from '../../App';
const Header = () => {
    const [category, setCategory] = useContext(categoryContext);
    return (
        <div>
            <h1>This is headers {category }</h1>
            <button onClick={()=>setCategory('laptop')}>laptop</button>
            <button onClick={()=>setCategory('mobile')}>mobile</button>
            <button onClick={()=>setCategory('camera')}>camera</button>
        </div>
    );
};

export default Header;