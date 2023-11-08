import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ReviewPage from "./pages/ReviewPage";
import Quiz from "./pages/Quiz";

function App() {
	return (
		<>
			<h1>heeey</h1>
			<div>
				<Link to="/">Homepage</Link>
				<Link to="/review">Review</Link>
				<Link to="/questions">Quiz</Link>
			</div>

			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/questions" element={<ReviewPage />} />
				<Route path="/review" element={<Quiz />} />
			</Routes>
		</>
	);
}
export default App;
