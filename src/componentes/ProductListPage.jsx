import React from 'react';
import { Link } from 'react-router-dom';

const ProductListPage = () => {
    const categories = [
        { name: 'Celulares', path: '/productos/celulares' },
        { name: 'Tablets', path: '/productos/tablets' },
        { name: 'iPads', path: '/productos/ipads' },
        { name: 'Smart TVs', path: '/productos/smart-tvs' },
    ];

    return (
        <div className="product-list-page">
            <h2>Selecciona una categoría para ver los productos</h2>
            <div className="category-list">
                {categories.map((category) => (
                    <Link key={category.name} to={category.path} className="category-card">
                        <h3>{category.name}</h3>
                        <p>Ver productos</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ProductListPage;