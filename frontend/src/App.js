import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import CreateUser from './Components/CreateUser';
import AllUsers from './Components/AllUsers';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import UpdateUser from './Components/UpdateUser';
import ReadUser from './Components/ReadUser';

function App() {
  return (
   <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/add' element={<CreateUser/>}></Route>
        <Route path='/all' element={<AllUsers/>}></Route>
        {/* to send ID */}
        <Route path='/update/:id' element={<UpdateUser/>}></Route>
        <Route path='/read/:id' element={<ReadUser/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
