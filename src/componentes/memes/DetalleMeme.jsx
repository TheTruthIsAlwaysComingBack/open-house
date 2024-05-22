import React from 'react';
import { useParams } from 'react-router-dom';
import './Detalle-Meme.css';
import memes from '../../datos/memes.json';

const DetalleMeme = () => {
    const { id } = useParams();
    const meme = memes.find(m => m.id === parseInt(id));

    if (!meme) {
        return <div>Meme no encontrado</div>;
    }

    return (
        <div className="detalle-meme">
            <h1>{meme.titulo}</h1>
            <img src={meme.imagen} alt={meme.titulo} className="meme-imagen" />
            <p>{meme.descripcion}</p>
        </div>
    );
}

export default DetalleMeme;