import { Routes, Route } from "react-router-dom";
import {lazy} from "react";
 
const Home = lazy(() => import("../Web")) 
const Test = lazy(() => import("../Test")) 
const GameCal = lazy(() => import("../GameCal")) 
 
function RootRoute() :JSX.Element{
  return (
    <>
      <Routes>
        <Route path="/" element={<GameCal />} />
        <Route path="/test" element={<Test />} />
        <Route path="/api" element={<Home />} />
      </Routes>
    </>
  );
}
export default RootRoute