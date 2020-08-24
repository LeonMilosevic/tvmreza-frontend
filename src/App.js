import React from "react";
import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./components/routes/Routes";
import { AdminProvider } from "./components/context/admin/AdminContext";
import { PublicProvider } from "./components/context/public/PublicContext";

function App() {
  return (
    <AdminProvider>
      <PublicProvider>
        <Router>
          <Routes />
        </Router>
      </PublicProvider>
    </AdminProvider>
  );
}

export default App;
