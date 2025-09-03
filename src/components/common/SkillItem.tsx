import clsx from 'clsx';
import Link from 'next/link';
import * as React from 'react';

export const SkillItem: React.FC<any> = ({ className, name }) => {
	return (
		<div
			className={clsx(
				className,
				'rounded-xl flex items-center justify-center relative border border-primary overflow-hidden px-8 py-2'
			)}
		>
			<div className="flex flex-col gap-2 items-center justify-center relative bottom-0 bg-[#000000bb] ">
				<h2 className="text-center md:text-xl text-md text-white font-bold whitespace-nowrap">
					{name}
				</h2>
			</div>
		</div>
	);
};
