import { Suspense } from "react";
import "./App.css";
import DaisyNav from "./components/DaisyNav/DaisyNav";
import NavBar from "./components/NavBar/NavBar";
import PricingOptions from "./PricingOptions/PricingOptions";

function App() {
  return (
    <>
      <header>
        <NavBar></NavBar>

        {/* <DaisyNav></DaisyNav> */}
      </header>

      <main>
        {/* <Suspense>
          <PricingOptions>
            
          </PricingOptions>
        </Suspense> */}
      </main>
    </>
  );
}

export default App;
