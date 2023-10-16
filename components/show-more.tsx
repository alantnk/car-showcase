'use client';
import { IShowMoreProps } from '@/types';
import { useRouter } from 'next/navigation';
import { CustomButton } from '.';
import { updateSearchParams } from '@/utils';

function ShowMore({ pageNumber, isNext }: IShowMoreProps) {
	const router = useRouter();

	const handleNavigation = () => {
		const newLimit = (pageNumber + 1) * 10;
		const newPahtname = updateSearchParams('limit', `${newLimit}`);

		router.push(newPahtname);
	};

	return (
		<div className="w-full flex-center gap-5 mt-10">
			{!isNext && (
				<CustomButton
					title="Exibir mais"
					type="button"
					containerStyles="bg-primary-blue rounded-full text-white"
					handleClick={handleNavigation}
				/>
			)}
		</div>
	);
}

export default ShowMore;
