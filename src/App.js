import { Route, Routes } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import AnemometerDetailPage from './pages/AnemometerDetailPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:anemometerId" element={<AnemometerDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
