import { Route, Routes } from 'react-router';
import Layout from './assets/Components/Layout/Layout';
import HomePage from './assets/Pages/HomePage';
import './App.css';

function App() {

    return (
        <Routes>
            <Route path="/" element={<Layout />} >
                <Route index element={<HomePage />} />
                <Route path="/about" element={<div>About Page</div>} />
                <Route path="/contact" element={<div>Contact Page</div>} />
                <Route path="/gallery" element={<div>Gallery Page</div>} />
            </Route>
        </Routes>
    );
}

export default App
