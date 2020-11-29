//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Multiplier from "./components/Multiplier";
import EvenClicks from "./components/EvenClicks";
import CountBy from "./components/CountBy";
import HideMe from "./components/HideMe";

const App = () => (
	<>
		<Multiplier x={5} y={7} />
		<EvenClicks />
		<CountBy stepVal={5} startVal={0} />
		<HideMe>If you click me i will vanish</HideMe>
	</>
);
export default App;
