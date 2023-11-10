import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ReviewPage from "./pages/ReviewPage";
import Quiz from "./pages/Quiz";

function App() {
	return (
		<>
			<div>
				<header>Quick Greek</header>
				<Link to="/"></Link>
				<Link to="/review"></Link>
				<Link to="/quiz"></Link>

				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/review" element={<ReviewPage />} />
					<Route path="/quiz" element={<Quiz />} />
				</Routes>
			</div>
		</>
	);
}
export default App;
