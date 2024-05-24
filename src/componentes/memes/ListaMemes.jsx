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
                    <Link to={`/memes/${meme.id}`} key={meme.id}>
                        <li className="meme-item">
                            <h2>{meme.titulo}</h2>
                            <img src={meme.imagen} alt={meme.titulo} className="meme-imagen" />
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    );
}

export default ListaMemes;