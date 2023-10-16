'use client';

import { FormEvent, useState } from 'react';
import Image from 'next/image';
import { SearchManufacturer } from '.';
import { ISearchBarProps } from '@/types';

type TSearchButton = { styles: string };
function SearchButton({ styles }: TSearchButton) {
	return (
		<button type="submit" className={`-ml-3 z-10 ${styles}`}>
			<Image
				src="/magnifying-glass.svg"
				alt="magnifuing glass"
				width={40}
				height={40}
				className="object-contain"
			/>
		</button>
	);
}

function Searchbar({ setManufacturer, setModel }: ISearchBarProps) {
	const [searchManufacturer, setSearchManufacturer] = useState('');
	const [searchModel, seatSearchModel] = useState('');

	const handleSearch = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (searchManufacturer === '' && searchModel === '') {
			return alert('Please fill in the search bar');
		}

		setModel(searchModel.toLowerCase());
		setManufacturer(searchManufacturer.toLowerCase());
	};

	return (
		<form className="searchbar" onSubmit={handleSearch}>
			<div className="searchbar__item">
				<SearchManufacturer
					selected={searchManufacturer}
					setSelected={setSearchManufacturer}
				/>
				<SearchButton styles="sm:hidden" />
			</div>
			<div className="searchbar__item">
				<Image
					src="/model-icon.png"
					width={25}
					height={25}
					className="absolute w-[20px] h-[20px] ml-4"
					alt="car model"
				/>
				<input
					type="text"
					name="model"
					value={searchModel}
					onChange={(e) => seatSearchModel(e.target.value)}
					placeholder="Tiguan"
					className="searchbar__input"
				/>
				<SearchButton styles="sm:hidden" />
			</div>
			<SearchButton styles="max-sm:hidden" />
		</form>
	);
}

export default Searchbar;
