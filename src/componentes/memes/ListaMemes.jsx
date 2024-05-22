import React from 'react';
import { Link } from 'react-router-dom';
import './Lista-Memes.css';
import memes from '../../datos/memes.json';

const ListaMemes = () => {
    return (
        <div className="lista-memes">
            <h1>Memes</h1>
            <ul>
                {memes.map(meme => (
                    <li key={meme.id} className="meme-item">
                        <Link to={`/memes/${meme.id}`}>
                            <img src={meme.imagen} alt={meme.titulo} className="meme-imagen" />
                            <p>{meme.titulo}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListaMemes;