import React from 'react';
import './Memes.css';
import { Route, Routes } from 'react-router-dom';
import ListaMemes from './ListaMemes';
import DetalleMeme from './DetalleMeme';
import Header from "../inicio/Header";
import Footer from "../inicio/Footer";

const Memes = () => {
    return (
        <div className='memes'>
            <Header />
            <Routes>
                <Route path="/" element={<ListaMemes />} />
                <Route path=":id" element={<DetalleMeme />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default Memes;