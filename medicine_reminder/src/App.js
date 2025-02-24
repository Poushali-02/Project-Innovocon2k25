import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import MedicineInput from './components/medName';
import setTime from './components/setTime';
function App() {
  return (
    <>
    <Navbar/>
    <MedicineInput/>
    <setTime/>
    </>
  );
}

export default App;
