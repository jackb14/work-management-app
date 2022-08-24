import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import { DataContext } from "./DataContext";
import { GlobalStyles } from "./GlobalStyles";
import Home from "./components/Home/Home";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const items = async () => {
      const res = await fetch(
        "https://work-management-app.herokuapp.com/api/items"
      );
      const data = await res.json();
      setData(data);
    };
    items();
  }, []);

  const value = { data, setData };

  return (
    <>
      <DataContext.Provider value={value}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/board/:name" element={<MainLayout />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <GlobalStyles />
      </DataContext.Provider>
    </>
  );
}

export default App;
