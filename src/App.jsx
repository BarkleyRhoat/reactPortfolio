import React, {useState} from 'react';
import {createContext} from "react";
import './index.css';
import Navbar from "./comps/NavBar";
import FullPage from "./comps/ReactFullPage"
import Header from "./comps/Header"
import Footer from "./comps/Footer"


export const ThemeContext = createContext(null);

const App = () => {
    const [theme, setTheme] = useState('dark')

    const toggleTheme = () => {
        setTheme((curr) =>(curr === 'light' ? 'dark' : 'light'))
    }

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            <div id={theme}>
                <Header/>
                <Navbar toggleTheme={toggleTheme}/>
                <FullPage />
                {/* <Footer/> */}
            </div>
            </ThemeContext.Provider>
    )
}
export default App;