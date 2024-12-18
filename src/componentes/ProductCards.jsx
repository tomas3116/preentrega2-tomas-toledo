import React from 'react';
import { Link } from 'react-router-dom'; // Importar Link

const ProductCards = () => {
    const categories = [
        { id: 'celulares', title: 'Celulares', image: 'componentes/imagenes/celulares.webp' },
        { id: 'tablets', title: 'Tablets', image: 'componentes/imagenes/tablets.webp' },
        { id: 'ipad', title: 'iPad', image: 'componentes/imagenes/ipads.jpg' },
        { id: 'smart-tv', title: 'Smart TV', image: 'componentes/imagenes/smarttv.webp' },
    ];

    return (
        <div className="product-cards-container">
            {categories.map(category => (
                <div className="product-card" key={category.id}>
                    <img src={category.image} alt={category.title} />
                    <h2>{category.title}</h2>
                    <Link to={`/category/${category.id}`} className="btn">Ver Más</Link> 
                </div>
            ))}
        </div>
    );
};

export default ProductCards;