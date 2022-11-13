import './App.css';
import Page from './pages/Page';
import {useEffect, useState} from "react";
import {Routes, Route} from "react-router-dom"

function App() {
    return (
        <Routes>
            <Route exact path ="/" element={<Page/>}/>
        </Routes>
    )
}

export default App;
