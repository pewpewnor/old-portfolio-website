import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

interface HomePageProps {}

const HomePage: FC<HomePageProps> = (props: HomePageProps) => {
	return (
		<div className="h-screen w-full bg-gradient-to-b from-slate-800 via-black to-gray-800 pb-8">
			<div className="flex h-full w-full flex-col items-center justify-center gap-14 px-8 md:flex-row">
				<div className="flex h-full flex-col justify-center">
					<h2 className="text-4xl font-bold text-white sm:text-7xl">
						I&apos;m a Full Stack Developer
					</h2>
					<p className="max-w-xl py-4 text-lg text-gray-500">
						Lorem ipsum dolor, sit amet consectetur adipisicing
						elit. Minus possimus aliquam, veritatis blanditiis
						explicabo alias dolores aut labore voluptatum est ea
						laborum accusamus saepe tempore amet sequi iusto porro
					</p>

					<div>
						<Link
							href="/projects"
							className="group my-2 flex w-fit cursor-pointer items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 text-xl text-white hover:font-bold"
						>
							My Projects
							<span className="duration-300 group-hover:rotate-90">
								<MdOutlineKeyboardArrowRight
									size={25}
									className="ml-1"
								/>
							</span>
						</Link>
					</div>
				</div>

				<Image
					src="/ocean.jpg"
					width={420}
					height={420}
					alt="my profile"
					className="rounded-2xl"
				/>
			</div>
		</div>
	);
};

export default HomePage;
