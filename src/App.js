//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Multiplier from "./components/Multiplier";
import EvenClicks from "./components/EvenClicks";
import CountBy from "./components/CountBy";

const App = () => (
	<>
		<Multiplier x={5} y={7} />
		<EvenClicks />
		<CountBy stepVal={5} startVal={0} />
	</>
);
export default App;
