import { BrowserRouter, Route, Routes,Link } from "react-router-dom";
import Home from "./Home";
import Archives from "./Archives";
import Habits from "./Habits";

function App() {
	return (
		<div className="App">
			<header className="mt-5 mx-auto">
				<h1>Habit Tracker</h1>
				<div className="flex">
					<h3>Home |</h3>
					<h3>| Habits |</h3>
					<h3>| Archives</h3>
				</div>
			</header>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/habits" element={<Habits />} />
					<Route path="/archives" element={<Archives />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
