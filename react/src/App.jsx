import { useEffect, useState } from "react";

import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("http://localhost:1337/api/products");
        const data = await response.json();

        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  });
}

export default App;
