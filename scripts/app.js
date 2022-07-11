const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time')
const icon = document.querySelector('.icon img')
const forecast = new Forecast()

const updateUI = (data) => {
	const { cityDetails, weatherDetails } = data

	details.innerHTML = `
				<h5 class="my-3">${cityDetails.EnglishName}</h5>
				<div class="my-3">${weatherDetails.WeatherText}</div>
				<div class="display-4 my-4">
					<span>${weatherDetails.Temperature.Metric.Value}</span>
					<span>&deg;C</span>
				</div>`;

	//update the night/day image
	const iconSrc = `img/icons/${weatherDetails.WeatherIcon}.svg`
	icon.setAttribute('src', iconSrc)

	let timeSrc = weatherDetails.IsDayTime ? 'img/day.svg' : 'img/night.svg'

	time.setAttribute('src', timeSrc)

		// remove the d-none class if present
		if(card.classList.contains('d-none')){
			card.classList.remove('d-none')
		}
};

cityForm.addEventListener('submit', (e) =>{
	//prevent from default action (refresh)
	e.preventDefault();

	//get city value
	const cityValue = cityForm.city.value.trim();
	cityForm.reset()

	//update the ui with hte city information
	forecast.updateCity(cityValue)
		.then(data => updateUI(data))
		.catch(err => console.log(err))

	//set local storage
	localStorage.setItem('city', cityValue)

});

if (localStorage.getItem('city')){
	forecast.updateCity(localStorage.getItem('city'))
		.then((city)=> updateUI(city))
		.catch(err => console.log(err))
}
