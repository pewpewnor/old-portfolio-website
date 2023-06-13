"use client";
import SwitchChannelContext from "@/contexts/SwitchChannelContext";
import Link from "next/link";
import { FC, useContext } from "react";

interface ScriptQuestIntroProps {}

const ScriptQuestIntro: FC<ScriptQuestIntroProps> = (
	props: ScriptQuestIntroProps
) => {
	const [_, _2, setCurrentChannelById] = useContext(SwitchChannelContext);

	return (
		<div className="flex h-full flex-col gap-14 text-lg">
			<h1 className="text-center text-4xl font-semibold">Script Quest</h1>
			<hr />
			<div className="mb-4 flex flex-col gap-8">
				<h2 className="text-2xl font-bold">Website Link</h2>
				<div className="flex gap-2">
					<p className="">You can visit the live website here:</p>
					<Link
						href="https://script-quest.vercel.app/"
						className="text-orange-600 underline"
					>
						https://script-quest.vercel.app/
					</Link>
				</div>
			</div>
			<div className="flex flex-col gap-8">
				<h2 className="text-2xl font-bold">What is ScriptQuest?</h2>
				<div className="flex flex-col items-center justify-center gap-4 md:flex-row">
					<iframe
						width="660"
						height="355"
						src="https://www.youtube.com/embed/990x61Lxqa8?autoplay=true"
						title="YouTube video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowFullScreen
						className="w-full rounded-xl md:w-full"
					></iframe>
					<div className="flex w-full flex-col gap-4 md:w-1/2">
						<p className="">
							ScriptQuest is a website that anyone (regardless of
							their programming background) can use to easily make
							a text-based adventure game.
						</p>
						<Link
							href="https://youtu.be/990x61Lxqa8"
							className="text-orange-600 underline"
						>
							[ScriptQuest Showcase and Demo Video]
						</Link>
					</div>
				</div>
			</div>
			<button
				className="w-full self-center rounded-xl bg-orange-800 p-2 px-4 hover:bg-orange-700"
				onClick={() => {
					setCurrentChannelById("SQ", "SQ02");
				}}
			>
				Why ScriptQuest?
			</button>
		</div>
	);
};

export default ScriptQuestIntro;
