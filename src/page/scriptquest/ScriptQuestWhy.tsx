import Image from "next/image";
import { FC } from "react";

interface ScriptQuestWhyProps {}

const ScriptQuestWhy: FC<ScriptQuestWhyProps> = (
	props: ScriptQuestWhyProps
) => {
	return (
		<div className="flex h-full flex-col gap-14 text-lg">
			<h1 className="text-center text-4xl font-semibold">
				Why Script Quest?
			</h1>
			<hr />
			<div className="mb-4 flex flex-col gap-8">
				<h2 className="text-2xl font-bold">
					This is one of my significant projects
				</h2>
				<p>
					This is one of my significant project so far, due to it
					being close to my heart. I started this project to pay
					homage to my early days of learning how to program. During
					highschool, I observed one of my friends programming in
					batch script, which ignited my passion for developing
					captivating text-based adventure games. This addiction drove
					me to delve deeper into coding and expand my knowledge. I
					sincerely hope that this website can assist everyone in
					pursuing their programming journey. This project also helps
					me learn new things such as what goes into creating a
					programming language and how to deploy my project correctly.
					This is also my second time using TypeScript, so I learned a
					lot about the type system in this project.
				</p>
				<h2 className="text-2xl font-bold">My Role in This Project</h2>
				<p>
					My role in this project is to be the one that:
					<ol className="list-decimal px-8">
						<li>Setup the next js project repository</li>
						<li>Design the website</li>
						<li>Make the ScriptQuest programming languange</li>
						<li>
							Make the syntax validation and real-time error
							detection
						</li>
						<li>Make the website parse the user&apos;s code</li>
						<li>
							Make the system to display code result and
							interactivity
						</li>
						<li>Make the navbar</li>
						<li>
							Make the hero section + responsive for home page
						</li>
						<li>
							Make the my games page & logic to create and delete
							games
						</li>
						<li>
							Make the code editor including the export, rename,
							and save functionality
						</li>
						<li>Handle the deployment through Github and Vercel</li>
					</ol>
				</p>
				<p>
					Github contributors graph shows that I added 12326 and
					removed 5341 lines to the code. The code in total as 7116
					lines in Github. Meaning I contributed to 98% of the code.
				</p>
				<Image
					src="/scriptquest/contrib.png"
					width={800}
					height={800}
					alt="Contribution"
				/>
			</div>
		</div>
	);
};

export default ScriptQuestWhy;
