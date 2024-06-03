import "./App.css";
import Background from "./components/Layouts/Background/Background";
import { Route, Routes } from "react-router-dom";
import Signin from "./page/Signin/Signin";

function App() {
    return (
        <Background>
            <Routes>
                <Route path="/" element={<Signin />} />
            </Routes>
        </Background>
    );
}

export default App;
