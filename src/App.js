import "./App.css";
import { Route, Routes } from "react-router-dom";
import AddUser from "./pages/AddUser";
import AddUserHobbies from "./pages/AddHobbies";
import UsersTable from "./pages/UsersTable";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  
  return (
   
    <Routes>
      <Route path="app" element={<UsersTable />}></Route>

      <Route path="/app/add-user" element={<AddUser />}></Route>

      <Route path="/app/add-hobby" element={<AddUserHobbies />}></Route>
    </Routes>
  );
}

export default App;
