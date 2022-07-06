const key = 'A1dZAleBXJgimyf5D3t0kGJsHGTNQhCh';

//get weather information
const getWeather = async (info) =>{

	const base = `http://dataservice.accuweather.com/currentconditions/v1/ `;
	const query = `${info}?apikey=${key}`;

	const response = await fetch(base + query);
	const data = await response.json();

	return data[0]

};

//get city information
const getCity = async (city) =>{

	const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
	const query = `?apikey=${key}&q=${city}`;

	const response = await fetch(base + query);
	const data = await response.json();

	return data[0]
};


