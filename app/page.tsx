import { CarCard, CustomFilter, Hero, Searchbar } from '@/components';
import { fetchCars } from '@/utils';

export default async function Home() {
	const allCars = await fetchCars().catch((_) => []);
	const isDataEmpty = !Array.isArray(allCars) || !allCars.length || !allCars;
	return (
		<main className="overflow-hidden">
			<Hero />
			<div className="mt-12 padding-x padding-y max-width" id="discover">
				<div className="home__text-container">
					<h1 className="text-4xl font-extrabold">Car Catalogue</h1>
					<p>Explore the cars you might like</p>
				</div>
				<div className="home__filters">
					<Searchbar />
					<div className="home__filter-container">
						<CustomFilter />
						<CustomFilter />
					</div>
				</div>
				{!isDataEmpty ? (
					<section>
						<div className="home__cars-wrapper">
							{allCars.map((car, i) => (
								<CarCard key={i} car={car} />
							))}
						</div>
					</section>
				) : (
					<div className="home__error-container">
						<h2>Oops, no results</h2>
						<p>{allCars?.message}</p>
					</div>
				)}
			</div>
		</main>
	);
}
