import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ReviewPage from "./pages/ReviewPage";
import Quiz from "./pages/Quiz";

function App() {
	return (
		<>
			<div>
				<Link to="/">Homepage</Link>
				<Link to="/review">Review</Link>
				<Link to="/quiz">Quiz</Link>
			</div>

			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/review" element={<ReviewPage />} />
				<Route path="/quiz" element={<Quiz />} />
			</Routes>
		</>
	);
}
export default App;
