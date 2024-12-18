// HeroBanner.jsx
import React from 'react';
import './_HeroBanner.scss'; // Asegúrate de crear un archivo de estilos
import heroBannerImage from './imagenes/herobanner.webp'; // Ajusta la ruta según sea necesario

const HeroBanner = () => {
    return (
        <div className="hero-banner">
            <img src={heroBannerImage} alt="Hero Banner" />
            <h1>Bienvenido a Khano Tech</h1>
            <p>Encuentra los mejores dispositivos electrónicos</p>
        </div>
    );
};

export default HeroBanner;