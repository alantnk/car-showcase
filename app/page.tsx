'use client';

import { useEffect, useState } from 'react';
import { CarCard, CustomFilter, Hero, Searchbar, ShowMore } from '@/components';
import { fetchCars } from '@/utils';
import { fuels, yearsOfProduction } from '@/constants';
import Image from 'next/image';
import { NumberOrString } from '@/types';

export default function Home() {
	const [allCars, setAllCars] = useState([]);
	const [loading, setLoading] = useState(false);

	const [manufacturer, setManufacturer] = useState('');
	const [model, setModel] = useState('');
	const [year, setYear] = useState<NumberOrString>(2022);
	const [limit, setLimit] = useState(10);
	const [fuel, setFuel] = useState<NumberOrString>('');

	const getCars = async () => {
		setLoading(true);
		try {
			const resp = await fetchCars({
				manufacturer: manufacturer || '',
				model: model || '',
				year: (year as number) || 2022,
				fuel: (fuel as string) || '',
				limit: limit || 10,
			});
			setAllCars(resp);
		} catch (err) {
			console.log(err);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		getCars();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [fuel, year, limit, manufacturer, model]);
	return (
		<main className="overflow-hidden">
			<Hero />
			<div className="mt-12 padding-x padding-y max-width" id="discover">
				<div className="home__text-container">
					<h1 className="text-4xl font-extrabold">Car Catalogue</h1>
					<p>Explore the cars you might like</p>
				</div>
				<div className="home__filters">
					<Searchbar setManufacturer={setManufacturer} setModel={setModel} />
					<div className="home__filter-container">
						<CustomFilter title="fuel" setFilter={setFuel} options={fuels} />
						<CustomFilter
							title="year"
							setFilter={setYear}
							options={yearsOfProduction}
						/>
					</div>
				</div>
				{allCars.length > 0 ? (
					<section>
						<div className="home__cars-wrapper">
							{allCars.map((car, i) => (
								<CarCard key={i} car={car} />
							))}
						</div>
						{loading && (
							<div className="mt-16 w-ful flex-center">Loading . . . </div>
						)}
						<ShowMore
							pageNumber={limit / 10}
							isNext={limit > allCars.length}
							setLimit={setLimit}
						/>
					</section>
				) : (
					<div className="home__error-container">
						<h2 className="text-black text-xl font-bold">Oops, no results</h2>
						<p>{allCars?.message}</p>
					</div>
				)}
			</div>
		</main>
	);
}
