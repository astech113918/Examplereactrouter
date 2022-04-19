import logo from "./logo.svg";
// import "./App.css";
import NavBar from "./component/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Tutorial from "./component/Tutorial";
import Blog from "./component/Blog";
import About from "./component/About";
import Contact from "./component/Contact";
import Sign from "./component/Sign";
import Log from "./component/Log";
import Front from "./component/Front";
import Back from "./component/Back";
import Html from "./component/language/Html";
import Css from "./component/language/Css";
import JavaScript from "./component/language/JavaScript";
import AReact from "./component/language/AReact";
import Node from "./component/language/Node";
import Php from "./component/language/Php";
import Mysql from "./component/language/Mysql";
import Mongodb from "./component/language/Mongodb";
import Users from "./component/Users";
import Userdetails from "./component/Userdetails";
import AdminUser from "./component/AdminUser";
import Profile from "./component/Profile";
import { AuthProvider } from "./component/Auth";
// import FragememtExp from "./component/FragememtExp";
// import Table from "./component/Table";
// import RefExm from "./component/RefExm";
// import FRParent from "./component/FRParent";
// import ClickCounter from "./component/rendeprops/ClickCounter";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <NavBar />
        {/* <Table />
      <RefExm />
      {/* <FRParent /> */}
        {/* <ClickCounter /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="tutorials" element={<Tutorial />}>
            <Route path="front-end" element={<Front />}>
              <Route path="html" element={<Html />} />
              <Route path="css" element={<Css />} />
              <Route path="javascript" element={<JavaScript />} />
              <Route path="react" element={<AReact />} />
            </Route>

            <Route path="back-end" element={<Back />}>
              <Route path="node" element={<Node />} />
              <Route path="php" element={<Php />} />
              <Route path="mysql" element={<Mysql />} />
              <Route path="mongodb" element={<Mongodb />} />
            </Route>
          </Route>
          <Route path="users" element={<Users />}>
            <Route path=":userId" element={<Userdetails />} />
            <Route path="admin" element={<AdminUser />} />
          </Route>

          <Route path="blog" element={<Blog />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="profile" element={<Profile />} />
          <Route path="sign" element={<Sign />} />
          <Route path="log" element={<Log />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
