import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ListaMemes from './ListaMemes';
import DetalleMeme from './DetalleMeme';

const Memes = () => {
    return (
        <Routes>
            <Route path="/" element={<ListaMemes />} />
            <Route path=":id" element={<DetalleMeme />} />
        </Routes>
    );
}

export default Memes;