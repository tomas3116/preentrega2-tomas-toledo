import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './componentes/NavBar/NavBar';
import HeroBanner from './componentes/HeroBanner';
import ItemListContainer from './componentes/ItemListContainer';
import ProductListPage from './componentes/ProductListPage';
import axios from 'axios';

const App = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:8000/')
            .then(response => {
                setProducts(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching data: ", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Cargando productos...</div>;
    }

    return (
        <Router>
            <div>
                <NavBar />
                <HeroBanner />
                <Routes>
                    <Route path="/" element={<ProductListPage products={products} />} />
                    <Route path="/productos/:id" element={<ItemListContainer />} /> 
                </Routes>
            </div>
        </Router>
    );
};

export default App;