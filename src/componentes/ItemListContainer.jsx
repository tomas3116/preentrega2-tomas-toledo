import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductListPage from './ProductListPage';

const ItemListContainer = ({ categoryId }) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/items?category=${categoryId}`);
                setItems(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        if (categoryId) {
            fetchItems();
        } else {
            setLoading(false); 
        }
    }, [categoryId]);

    if (loading) {
        return <div>Cargando productos...</div>;
    }

    if (error) {
        return <div>Error al cargar los productos: {error}</div>;
    }

    return (
        <div className="item-list-container">
            {items.length > 0 ? (
                <ProductListPage products={items} />
            ) : (
                <div>No se encontraron productos en esta categoría.</div>
            )}
        </div>
    );
};

export default ItemListContainer;