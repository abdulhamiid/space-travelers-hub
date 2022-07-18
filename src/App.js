import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './reset.css';
import './App.css';
import Header from './components/views/Header';
import Rockets from './components/routes/Rockets';
import Missions from './components/routes/Missions';
import MyProfile from './components/routes/MyProfile';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/my-profile" element={<MyProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
