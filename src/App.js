import './App.css';
import HomePage from "./Pages/HomePage";
import DriftPage from "./Pages/DriftPage";
import TimeAttackPage from "./Pages/TimeAttackPage";
import ForzaPage from "./Pages/ForzaPage";
import {Route, Routes} from "react-router";
import Menu from "./Menu/Menu";

function App() {
    return (
        <div>
            <Menu/>
            <div className="page">
                <Routes>
                    <Route path="/" exact element={<HomePage/>}/>
                    <Route path="/drift" element={<DriftPage/>}/>
                    <Route path="/timeattack" element={<TimeAttackPage/>}/>
                    <Route path="/forza" element={<ForzaPage/>}/>
                </Routes>
            </div>
        </div>

    );
}

export default App;
