import { Link, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ReviewPage from "./pages/ReviewPage";
import Quiz from "./pages/Quiz";
import SubmitQuestion from "./pages/SubmitQuestion";

function App() {
	return (
		<>
			<div>
				<div>
					<header id="header">Quick Greek</header>
					<Link to="/"></Link>
					<Link to="/review"></Link>
					<Link to="/quiz"></Link>
					<Link to="/submit"></Link>
				</div>
				<div className="app">
					<Routes>
						<Route path="/" element={<Homepage />} />
						<Route path="/review" element={<ReviewPage />} />
						<Route path="/quiz" element={<Quiz />} />
						<Route path="/submit" element={<SubmitQuestion />} />
					</Routes>
				</div>
			</div>
		</>
	);
}
export default App;
