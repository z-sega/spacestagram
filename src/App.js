import './App.css';
import React, { useState, useEffect } from 'react';
import ContentTile from './components/ContentTile';
import FilterButton from './components/FilterButton';
import { nanoid } from 'nanoid';
import TOKEN from './config.js';

/* Note on FILTER_MAP & FILTER_NAME:
 * Defined outside App() because if not they would be recalculated
 * each the the <App /> component re-renders. 
 * This information will never change regardless of what the application does. 
 */
const FILTER_MAP = {
	All: () => true, 
	Liked: apod => !apod.liked,	/* shows photos whose 'liked' prop is false */
};
const FILTER_NAMES = Object.keys(FILTER_MAP);

function App() {

	const [apods, setApods] = useState([]);
	const [isLoadingApods, setisLoadingApods] = useState(true);
	const [filter, setFilter] = useState('All');
	const [liked, setLiked] = useState(false);

	var NASA_API_KEY = process.env.REACT_APP_NASA_API_KEY;

	if (!NASA_API_KEY) {
		NASA_API_KEY = TOKEN;
	}
	const count = 10;

	useEffect(() => {
		fetch(`https://api.nasa.gov/planetary/apod?count=${count}&api_key=${NASA_API_KEY}`)
		.then((response) => response.json())
		.then((data) => setApods([...data]))
		.then(setisLoadingApods(false))
	}, []);

	const apodsList = apods
	.filter(FILTER_MAP[filter])
	.map(apod => (
			<ContentTile
				key={apod.id + nanoid()}
				id={apod.id + nanoid()}
				title={apod.title}
				src={apod.url}
				hdSrc={apod.hdurl}
				description={apod.explanation}
				date={apod.date}
			/>
		)
	);


	const filterList = FILTER_NAMES.map(name => (
			<FilterButton 
				key={name} 
				name={name} 	
				isPressed={name === filter}
				setFilter={setFilter}
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
				<p>Brought to you by <a href='https://api.nasa.gov'>NASA's image API.</a></p> 
			</div>
			<div className='filters btn-group'>
				{filterList}
			</div>
			{isLoadingApods ? loadingContent : loadedContent}
			<div className='footer'>
				<p>Created by Ayo Onipe.</p>
			</div>
		</div>
	);
}

export default App;
