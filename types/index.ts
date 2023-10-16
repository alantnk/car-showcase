import { Dispatch, MouseEventHandler, SetStateAction } from 'react';

export interface ICustomButtonProps {
	title: string;
	containerStyles?: string;
	handleClick?: MouseEventHandler<HTMLButtonElement>;
	type?: 'button' | 'submit';
	textStyles?: string;
	rightIcon?: string;
	isDisabled?: boolean;
}

export interface ISearchManufacturerProps {
	selected: string;
	setSelected(param: string): void;
}

export interface ICarProps {
	city_mpg: number;
	class: string;
	combination_mpg: number;
	cylinders: number;
	displacement: number;
	drive: string;
	fuel_type: string;
	highway_mpg: number;
	make: string;
	model: string;
	transmission: string;
	year: number;
}

export interface ICarDetailsProps {
	isOpen: boolean;
	closeModal(): void;
	car: ICarProps;
}

export interface IFilterProps {
	manufacturer: string;
	model: string;
	year: number;
	fuel: string;
	limit: number;
}

export interface IOptionProps {
	title: string;
	value: string;
}
export type NumberOrString = number | string;

export interface ICustomFilterProps {
	title: string;
	options: IOptionProps[];
	setFilter: Dispatch<SetStateAction<NumberOrString>>;
}

export interface IShowMoreProps {
	pageNumber: number;
	isNext: boolean;
	setLimit: (param: number) => void;
}

export interface ISearchBarProps {
	setManufacturer: (param: string) => void;
	setModel: (param: string) => void;
}
