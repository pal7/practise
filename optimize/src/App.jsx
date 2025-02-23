import { useState } from "react";
import ConfigureCounter from "./components/Counter/ConfigureCounter.jsx";
import Counter from "./components/Counter/Counter.jsx";
import Header from "./components/Header.jsx";
import { log } from "./log.js";

function App() {
  const [chosenCount, setChosenCount] = useState(0);
  log("<App /> rendered");

  function handleSetCount(newCount) {
    setChosenCount(newCount);
  }

  return (
    <>
      <Header />
      <ConfigureCounter onSetCount={handleSetCount} />
      <main>
        {/* passing key as count to reset the counter value based on the input */}
        <Counter key={chosenCount} initialCount={chosenCount} />
      </main>
    </>
  );
}

export default App;
