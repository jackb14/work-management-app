import { useState, useEffect } from "react";
import { DataContext } from "./DataContext";
import { GlobalStyles } from "./GlobalStyles";
import PrimaryLayout from "./layouts/PrimaryLayout";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const items = async () => {
      const res = await fetch("http://localhost:8800/api/items");
      const data = await res.json();
      setData(data);
      // setLoading(false);
    };
    items();
  }, []);

  return (
    <>
      <DataContext.Provider value={data}>
        <PrimaryLayout />
        <GlobalStyles />
      </DataContext.Provider>
    </>
  );
}

export default App;
