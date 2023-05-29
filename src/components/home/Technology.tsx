import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface TechnologyProps {
	title: string;
	src: string;
	link: string;
	shadow: string;
}

const Technology: FC<TechnologyProps> = (props: TechnologyProps) => {
	return (
		<Link href={props.link}>
			<div
				key={props.title}
				className={`${props.shadow} flex h-full flex-col items-center justify-center rounded-lg bg-slate-800 p-4 shadow-md duration-500 hover:scale-105`}
			>
				<Image
					src={props.src}
					alt="logo"
					width={80}
					height={80}
					className="block h-20 w-max sm:block"
				/>
				<p className="mt-4 font-bold">{props.title}</p>
			</div>
		</Link>
	);
};

export default Technology;
export type { TechnologyProps };
