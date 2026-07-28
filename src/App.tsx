import { Route, Routes } from 'react-router';
import Layout from './assets/Components/Layout/Layout';
import HomePage from './assets/Pages/HomePage';
import './App.css';

function App() {

    return (
        <Routes>
            <Route path="/" element={<Layout />} >
                <Route index element={<HomePage />} />
            </Route>
        </Routes>
    );
}

export default App
