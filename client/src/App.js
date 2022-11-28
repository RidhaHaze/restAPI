import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import NavBar from './components/NavBar'
import UsersList from './components/UserList';

function App() {
  return (
    <div className="App">
<NavBar />
<Routes>
<Route path='/' element={<UsersList/>}  />
<Route path='/adduser' element ={<AddUser/>}/>
<Route path='/edituser/:id' element ={<EditUser/>} />
</Routes>
    </div>
  );
}

export default App;
