import { FC } from "react";
import Technology, { TechnologyProps } from "./Technology";

interface TechStackSectionProps {
	title: string;
	description: string;
	technologies: TechnologyProps[];
}

const TechStackSection: FC<TechStackSectionProps> = (
	props: TechStackSectionProps
) => {
	return (
		<>
			<div className="w-3/4 text-center">
				<p className="inline border-b-4 border-gray-500 p-2 text-4xl font-bold sm:text-7xl">
					{props.title}
				</p>
				<p className="py-6 text-lg">{props.description}</p>
			</div>

			<div className="grid w-3/4 grid-cols-2 gap-8 px-12 py-8 text-center sm:grid-cols-3 sm:px-0">
				{props.technologies.map((technology) => (
					<Technology key={technology.title} {...technology} />
				))}
			</div>
		</>
	);
};

export default TechStackSection;
