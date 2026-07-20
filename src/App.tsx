import { Route, Routes } from 'react-router';
import { PhotoViewer } from './assets/Components/General/PhotoViewer/PhotoViewer';
import './App.css';

function App() {

    return (
        <Routes>
            <Route path="/" element={<PhotoViewer />} >
            </Route>
        </Routes>
    );
}

export default App
