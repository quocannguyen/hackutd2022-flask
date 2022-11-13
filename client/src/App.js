import './App.css';
import Page from './pages/Page';
import {useEffect, useState} from "react";
import {Routes, Route} from "react-router-dom"
import { ContextProvider } from './context/Context';
import AnalysisPage from './pages/AnalysisPage';

function App() {
    return (
        <ContextProvider>
            <Routes>
                <Route exact path ="/" element={<Page/>}/>
                <Route exact path ="/Analysis" element={<AnalysisPage/>}/>
            </Routes>
        </ContextProvider>
    )
}

export default App;
