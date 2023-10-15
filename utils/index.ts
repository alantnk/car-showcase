export async function fetchCars() {
	const headers = {
		'X-RapidAPI-Key': '36f766e43bmsh3d4bebf3b9065cdp103cb0jsn0e03d466b8c2',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
	};

	const resp = await fetch(
		'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=carrera',
		{ headers: headers },
	);

	const result = resp.json();

	return result;
}

export function calculateCarRent(city_mpg: number, year: number) {
	const basePricePerDay = 50; // Base rental price per day in dollars
	const mileageFactor = 0.1; // Additional rate per mile driven
	const ageFactor = 0.05; // Additional rate per year of vehicle age

	// Calculate additional rate based on mileage and age
	const mileageRate = city_mpg * mileageFactor;
	const ageRate = (new Date().getFullYear() - year) * ageFactor;

	// Calculate total rental rate per day
	const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

	return rentalRatePerDay.toFixed(0);
}
