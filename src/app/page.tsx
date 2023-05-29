import TechStackSection from "@/components/home/TechStackSection";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const others = [
	{
		src: "/github.png",
		title: "GITHUB",
		shadow: "shadow-gray-400",
		link: "https://www.github.com/pewpewnor",
	},
	{
		src: "/git.png",
		title: "GIT",
		shadow: "shadow-orange-400",
		link: "https://www.github.com/pewpewnor",
	},
	{
		src: "/python.png",
		title: "PYTHON",
		shadow: "shadow-blue-500",
		link: "htttp://python.org",
	},
	{
		src: "/java.png",
		title: "JAVA",
		shadow: "shadow-red-400",
		link: "",
	},
	{
		src: "/golang.png",
		title: "JAVA",
		shadow: "shadow-blue-400",
		link: "",
	},
	{
		src: "/csharp.png",
		title: "C#",
		shadow: "shadow-purple-500",
		link: "",
	},
	{
		src: "/c.png",
		title: "C",
		shadow: "shadow-blue-500",
		link: "",
	},
];

const frontends = [
	{
		src: "/react.png",
		title: "REACT",
		shadow: "shadow-blue-600",
		link: "https://react.dev/",
	},
	{
		src: "/nextjs.png",
		title: "NEXT JS",
		shadow: "shadow-white",
		link: "https://nextjs.org/",
	},
	{
		src: "/typescript.png",
		title: "TYPESCRIPT",
		shadow: "shadow-blue-500",
		link: "https://www.typescriptlang.org",
	},
	{
		src: "/javascript.png",
		title: "JAVASCRIPT",
		shadow: "shadow-yellow-500",
		link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
	},
	{
		src: "/react-query.png",
		title: "REACT QUERY",
		shadow: "shadow-red-500",
		link: "https://www.github.com/pewpewnor",
	},
	{
		src: "/tailwind.png",
		title: "TAILWIND CSS",
		shadow: "shadow-sky-400",
		link: "https://v2.tailwindcss.com/",
	},
	{
		src: "/html.png",
		title: "HTML",
		shadow: "shadow-orange-500",
		link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
	},
	{
		src: "/css.png",
		title: "CSS",
		shadow: "shadow-blue-500",
		link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
	},
	{
		src: "/asp.png",
		title: "ASP.NET",
		shadow: "shadow-blue-500",
		link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
	},
];

const backends = [
	{
		src: "/node.png",
		title: "NODE JS",
		shadow: "shadow-green-500",
		link: "",
	},
	{
		src: "/express.png",
		title: "EXPRESS JS",
		shadow: "shadow-gray-500",
		link: "",
	},
	{
		src: "/mongodb.png",
		title: "MONGO DB",
		shadow: "shadow-green-500",
		link: "",
	},
	{
		src: "/postgresql.png",
		title: "POSTGRESQL",
		shadow: "shadow-blue-500",
		link: "",
	},
	{
		src: "/mysql.png",
		title: "MY SQL",
		shadow: "shadow-orange-500",
		link: "",
	},
	{
		src: "/sqlserver.svg",
		title: "SQL SERVER",
		shadow: "shadow-red-500",
		link: "",
	},
];

interface HomePageProps {}

const HomePage: FC<HomePageProps> = (props: HomePageProps) => {
	return (
		<div className="flex h-max w-full flex-col bg-gradient-to-b from-slate-800 via-black to-gray-800">
			<div className="flex h-full min-h-screen w-full flex-col items-center justify-center gap-14 px-8 md:flex-row">
				<div className="flex h-full flex-col justify-center">
					<h2 className="text-4xl font-bold text-white sm:text-7xl">
						I&apos;m a student and enthusiast programmer
					</h2>
					<p className="max-w-xl py-4 text-lg text-gray-500">
						Hello, my name is Norbert Oliver. I am a student at
						Binus University (computer science major). I love
						programming because it gives me a good feeling everytime
						I contributed to an open source project, or make them
						myself to help others in the world. It is also a place
						for converting my creativity into building innovative
						solutions.
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

			<div className="flex h-full w-full flex-col items-center justify-center gap-32 p-4 text-white">
				<TechStackSection
					title="My Frontend Tech Stack"
					description="These are the frameworks, programming languages, and
					libraries I've learned and use in during frontend web
					development"
					technologies={frontends}
				/>
				<TechStackSection
					title="My Backend Tech Stack"
					description="These are the frameworks, programming languages, and
						libraries I've learned and use in during backend
						web development"
					technologies={backends}
				/>
				<TechStackSection
					title="Other languanges & tools"
					description="These are other programming languages and technologies
						I've used before"
					technologies={others}
				/>
			</div>
		</div>
	);
};

export default HomePage;
