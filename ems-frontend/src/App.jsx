import "./App.css";

import EmployeeComponent from "./components/EmployeeComponent";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<ListEmployeeComponent />}></Route>

          <Route path="/employees" element={<ListEmployeeComponent />}></Route>
          <Route path="/add-employee" element={<EmployeeComponent heading = "Add a New Employee"/>}></Route>

          <Route
            path="/update-employee/:id"
            element={<EmployeeComponent  heading = "Update Employee" />}
          ></Route>
        </Routes>

        <FooterComponent />
      </BrowserRouter>
      {/* <HeaderComponent />
    <ListEmployeeComponent/>
    <FooterComponent /> */}
    </>
  );
}

export default App;
