import { MouseEventHandler } from 'react';

export interface ICustomButtonProps {
	title: string;
	containerStyles?: string;
	handleClick?: MouseEventHandler<HTMLButtonElement>;
	type?: 'button' | 'submit';
}

export interface ISearchManufacturerProps {
	manufacturer: string;
	setManufacturer(m: string): void;
}
