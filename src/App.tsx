import "./App.css";
import CardList from "./components/cardList";
import Footer from "./components/footer";
import NavBar from "./components/NavBar";

function App() {
	return (
		<>
			<main>
				<NavBar />
				<CardList />
				<Footer />
			</main>
		</>
	);
}

export default App;
