import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation';
import Posts from './Posts';
import Container from 'react-bootstrap/Container';
import SignIn from './routes/SignIn';


function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Posts/>} />
        <Route path="sign-in" element={<SignIn/>} />
      </Routes>
    </div>
  );
}

export default App;
