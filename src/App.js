import './App.css';
import Menu from './Menu/Menu';
import './Menu/Menu.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <>
      
      <Router>
        <Routes>
          <Route path="/" element={<Menu />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
