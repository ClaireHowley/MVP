import { Link, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ReviewPage from "./pages/ReviewPage";
import Quiz from "./pages/Quiz";
import SubmitQuestion from "./pages/SubmitQuestion";
import { useState } from "react";

function App() {
	const [questions, setQuestions] = useState([]);

	async function getQuestions() {
		const response = await fetch("/api");

		const data = await response.json();
		setQuestions(data);
	}

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
						<Route
							path="/quiz"
							element={
								<Quiz questions={questions} getQuestions={getQuestions} />
							}
						/>
						<Route
							path="/submit"
							element={<SubmitQuestion getQuestions={getQuestions} />}
						/>
					</Routes>
				</div>
			</div>
		</>
	);
}
export default App;
