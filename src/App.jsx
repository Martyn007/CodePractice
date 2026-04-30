import { useState } from "react";
function App() {
  const [internalmark , setInternalmark] = useState("");
  const [externalmark , setExternalmark] = useState("");
  const [internalweight,setInternalweight] = useState(30);
  const [externalweight,setExternalweight] = useState(70);
  const [result , setResult] = useState(""); 

  const add = () => {
    const i = internalweight + 1;
    setExternalweight(100 - i);
    setInternalweight(i);
  };
  const sub = () => {
  const i = internalweight - 1;
    setExternalweight(100 - i);
    setInternalweight(i);
  };

  const present = (i,e) => {
    setInternalweight(i);
    setExternalweight(e);
    
  };
  const res = () => {
    const a = (internalmark * internalweight);
    const b = (externalmark * externalweight);
    const c = ((a + b) / 100);
    setResult(c.toFixed(2));

  }
 return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>CALCULATION</h2>

      <p>Internal weight: {internalweight}%</p>
      <p>External weight: {externalweight}%</p>

      <button onClick={add}>+1</button>
      <button onClick={sub}>-1</button>

      <br /><br />

      <button onClictk={() => present(40, 60)}>40/60</button>
      <button onClick={() => present(30, 70)}>30/70</button>
      <button onClick={() => present(20, 80)}>20/80</button>

      <br /><br />

      <input
        type="number"
        placeholder="Internal mark"
        value={internalmark}
        onChange={(e) => setInternalmark(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="External mark"
        value={externalmark}
        onChange={(e) => setExternalmark(e.target.value)}
      />

      <br /><br />
      <h3>Result: {result}</h3>

      <button onClick={res}>Calculate</button>


    </div>
  );
}

export default App;