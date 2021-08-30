import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Weathercard from './components/Weathercard';
import Form from './components/Form';
import { useSelector } from 'react-redux';
import Themetog from './components/Themetog';


function App() {
  const theme = useSelector( (state) => state.theme);
  console.log(theme);
  return (
    <div className={theme ? "App dark" :"App"}>
      <Themetog />
           <Form />
           <Weathercard />
    </div>
  );
}

export default App;