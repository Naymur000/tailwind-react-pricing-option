import { Suspense } from "react";
import "./App.css";
import DaisyNav from "./components/DaisyNav/DaisyNav";
import NavBar from "./components/NavBar/NavBar";
import PricingOptions from "./PricingOptions/PricingOptions";
import ResultsChart from "./components/ResultsChart/ResultsChart";

const pricingPromise = fetch('/public/pricingdata.json').then(res => res.json())
const result = fetch("/public/ResultsChart.json").then(res => res.json())

function App() {
  return (
    <>
      <header>
        <NavBar></NavBar>

        {/* <DaisyNav></DaisyNav> */}
      </header>

      <main>
        <Suspense fallback={<span className="loading loading-spinner loading-md"></span>}>
          <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
          <ResultsChart result={result}></ResultsChart>
        </Suspense>

        
      </main>
    </>
  );
}

export default App;
