import React, { useContext } from 'react';
import { categoryContext } from '../../App';
import Categories from '../Categories/Categories';

const Home = () => {
    const category = useContext(categoryContext);
    return (
        <div style={{border:"1px solid red", padding: "10px"}}>
            <h1>This is home count </h1>
            <Categories></Categories>
        </div>
    );
};

export default Home;