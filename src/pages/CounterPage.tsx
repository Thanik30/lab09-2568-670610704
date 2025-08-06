import { useState } from "react";

export default function CounterPage() {
  const [counter , CounterSet] = useState(0)
  const Clicked = () => {
    CounterSet(counter + 1);
  }
  return (
    <div className="container text-center">
      <h2>Counter Page</h2>
      {/* Result Text */}
      <p>Counter : {counter}</p>
      <button onClick={() => Clicked()}>Increase</button>
    </div>
  );
}