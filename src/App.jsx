import { Suspense } from "react";
import "./App.css";
import DaisyNav from "./components/DaisyNav/DaisyNav";
import NavBar from "./components/NavBar/NavBar";
import PricingOptions from "./PricingOptions/PricingOptions";
import ResultsChart from "./components/ResultsChart/ResultsChart";
// import axios from "axios";
import MarksChart from "./components/MarksChart/MarksChart";

const pricingPromise = fetch("pricingdata.json").then((res) => res.json());

const result = fetch("ResultsChart.json").then((res) => res.json());

// const marksPromise = axios.get("ResultsChart.json");
const marksPromise = fetch("ResultsChart.json").then((res) => res.json());

function App() {
  return (
    <>
      <header>
        <NavBar></NavBar>

        {/* <DaisyNav></DaisyNav> */}
      </header>

      <main>
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-md"></span>
          }
        >
          <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
          <ResultsChart result={result}></ResultsChart>
        </Suspense>

        <Suspense
          fallback={
            <span className="loading loading-spinner loading-md"></span>
          }
        >
          <MarksChart marksPromise={marksPromise}></MarksChart>
        </Suspense>
      </main>

      {/* <h1>Hello</h1> */}
    </>
  );
}

export default App;
