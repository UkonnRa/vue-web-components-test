import { useState } from "react";
import reactLogo from "@/assets/react.svg";
import viteLogo from "/vite.svg";
import "@/App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <dn-button-base label={`${count}`} onClick={() => setCount(count + 1)}>
          <div>New Label: {count}</div>
        </dn-button-base>
        <dn-button-base
          label={`${count * 2}`}
          onClick={() => setCount(count + 2)}
        ></dn-button-base>
      </div>
    </>
  );
}

export default App;
