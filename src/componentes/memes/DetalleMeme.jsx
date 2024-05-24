import React from 'react';
import { useParams } from 'react-router-dom';
import './Detalle-Meme.css';
import memes from '../../datos/memes.json';

const DetalleMeme = () => {
    const { id } = useParams();
    const meme = memes.find(m => m.id === parseInt(id));

    if (!meme) {
        return <div className="detalle-meme">Meme no encontrado</div>;
    }

    return (
        <div className="detalle-meme">
            <h2>{meme.titulo}</h2>
            <img src={meme.imagen} alt={meme.titulo} className="meme-imagen" />
            <div className="descripcion">
                <p>{meme.descripcion}</p>
            </div>
        </div>
    );
}

export default DetalleMeme;