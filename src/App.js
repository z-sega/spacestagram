import './App.css';
import React, { useState, useEffect } from 'react';
import ContentTile from './components/ContentTile';
import { nanoid } from 'nanoid';

function App() {

	const [apods, setApods] = useState([]);
	const [isLoadingApods, setisLoadingApods] = useState(true);

	// const nasaApiKey = process.env.REACT_APP_NASA_API_KEY;
	const count = 10;

	useEffect(() => {
		fetch(`https://api.nasa.gov/planetary/apod?count=${count}&api_key=${process.env.REACT_APP_NASA_API_KEY}`)
		.then((response) => response.json())
		.then((data) => setApods([...data]))
		.then(setisLoadingApods(false))
	}, []);

	const apodsList = apods
	.map(apod => (
			<ContentTile
				key={apod.id + nanoid()}
				id={apod.id}
				title={apod.title}
				src={apod.url}
				description={apod.explanation}
				date={apod.date}
			/>
		)
	);

	const loadedContent = (
		<div className='main-content'>
			{apodsList}
		</div>
	);

	const loadingContent = (
		<div class='loading-content'>
			<p>Loading...</p>
		</div>
	);


	return (
		<div className="App">
			<div className='header'>
				<h1>Spacestagram!</h1>
				<p>Brought to you by NASA's image API.</p> 
			</div>
			{isLoadingApods ? loadingContent : loadedContent};
		</div>
	);
}

export default App;
