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


	/* Add properties to apod objects */
	for(let i = 0; i < apods.length; i++) {
		apods[i].id = apods[i].key = nanoid();
		apods[i].wasLiked = false;
	};


	function checkApods() {
		console.log("------");
		for(let i = 0; i < apods.length; i++) {
			console.log(apods[i]);
		};
		console.log("------");
	}

	function toggleLiked(id) {
		console.log("insideToggledLiked")
		console.log("id:" + id)
		const updatedApods = apods.map(apod => {
			if (id === apod.id) {
				console.log("id:" + id)
				return {...apod, wasLiked: !apod.wasLiked}
			}
			return apod;
		});
		setApods(updatedApods);
		checkApods();
	}

	const apodsList = apods
	.filter(FILTER_MAP[filter])
	.map(apod => (
			<ContentTile
				key={apod.key}
				id={apod.id}
				title={apod.title}
				src={apod.url}
				hdSrc={apod.hdurl}
				description={apod.explanation}
				date={apod.date}
				liked={toggleLiked}
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
			{(apods.length > 1) ?  loadedContent : loadingContent}
			<div className='footer'>
				<p>Created by Ayo Onipe.</p>
			</div>
		</div>
	);
}

export default App;
