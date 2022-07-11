class Forecast {

	constructor() {
		this.key = 'A1dZAleBXJgimyf5D3t0kGJsHGTNQhCh';
		this.weatherURI = `http://dataservice.accuweather.com/currentconditions/v1/ `;
		this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search';
	}

	async updateCity (city){
		const cityDetails = await this.getCity(city)
		const weatherDetails = await this.getWeather(cityDetails.Key)
		return { cityDetails, weatherDetails }
	}

	async getCity(city){
		const query = `?apikey=${this.key}&q=${city}`;
		const response = await fetch(this.cityURI + query);
		const data = await response.json();
		return data[0]
	}

	async getWeather(info){
		const query = `${info}?apikey=${this.key}`;
		const response = await fetch(this.weatherURI + query);
		const data = await response.json();
		return data[0]
	}
}
