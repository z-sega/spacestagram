import logo from './logo.svg';
import './App.css';
import MainTitle from './components/MainTitle'
import ContentTile from './components/ContentTile'

function App() {
	return (
		<div className="App">
			{/* <header className="App-header">
				
			</header> */}
			<main>
				<MainTitle />
				<ContentTile />
			</main>
		</div>
	);
}

export default App;
