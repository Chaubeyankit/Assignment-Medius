import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "./page/Container";
import { LoadingSpinner } from "./page/LoadingSpinner";

// Lazy loading components

const Home = lazy(() =>
  import(/* webpackChunkName: "Home" */ "@/page/Home").then((module) => ({
    default: module.Home,
  }))
);

const Aboutus = lazy(() =>
  import("@/page/Aboutus").then((module) => ({ default: module.Aboutus }))
);

const MortgageCalculator = lazy(() =>
  import("@/page/MortgageCalculator").then((module) => ({
    default: module.MortgageCalculator,
  }))
);

const Start = lazy(() =>
  import("@/page/Start").then((module) => ({ default: module.Start }))
);

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route element={<Container />}>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<Aboutus />} />
          <Route path="/mortgage-calculator" element={<MortgageCalculator />} />
          <Route path="/start" element={<Start />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
