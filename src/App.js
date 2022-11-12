import Topbar from "./Components/Topbar";
import Home from "./Pages/Home";
import Single from "./Pages/Single";
import Write from "./Pages/Write";
import Setting from "./Pages/Setting";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"
import { Context } from "./Context/Context";
import {useContext} from "react";

function App() {
  const {user} = useContext(Context);

  return (
    <Router>
      <Topbar/>

      <Routes>
        <Route path ="/" element ={<Home/>}></Route>
      </Routes>

      <Routes>
        <Route path ="/register" element ={user ? <Login/>:<Register/>}></Route>
      </Routes>

      <Routes>
        <Route path ="/login" element ={ user ? <Home/>:<Login/>}></Route>
      </Routes>

      <Routes>
        <Route path ="/write" element ={ user ? <Write/>: <Register/>}></Route>
      </Routes>

      <Routes>
        <Route path ="/setting" element ={ user ? <Setting/>: <Register/>}></Route>
      </Routes>

      <Routes>
        <Route path ="/single" element ={<Single/>}></Route>
      </Routes>

    </Router>
  );
}

export default App;
