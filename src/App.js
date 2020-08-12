import React from "react";
import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./components/routes/Routes";
import { AdminProvider } from "./components/context/admin/AdminContext";

function App() {
  return (
    <AdminProvider>
      <Router>
        <Routes />
      </Router>
    </AdminProvider>
  );
}

export default App;
