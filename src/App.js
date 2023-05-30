import './App.scss';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter,} from "react-router-dom";
import background from './assets/images/background.jpeg'
import AnimatedRoutes from "./components/AnimatedRoutes";
import { Analytics } from '@vercel/analytics/react';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <div className='background'>
                    <img src={background} alt="background"/>
                </div>
                <div className='wrapper'>
                    <Header/>
                    <Navbar/>
                    <div className='container'>
                        <AnimatedRoutes/>
                    </div>
                </div>
            </div>
           <Analytics/>
        </BrowserRouter>
    );
}

export default App;
