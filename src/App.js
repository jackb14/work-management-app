import { useState, useEffect } from "react";
import MainContent from "./components/MainContent";
import SideBar from "./components/SideBar/SideBar";
import Flex from "./components/Styles/Flex";
import { DataContext } from "./DataContext";
import { GlobalStyles } from "./GlobalStyles";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const items = async () => {
      const res = await fetch("http://localhost:8800/api/items");
      const data = await res.json();
      setData(data);
    };
    items();
  }, []);

  return (
    <>
      <DataContext.Provider value={data}>
        <Flex>
          <SideBar />
          <MainContent />
        </Flex>

        <GlobalStyles />
      </DataContext.Provider>
    </>
  );
}

export default App;
