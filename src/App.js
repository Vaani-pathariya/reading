import { Route,Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import "./app.css"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
