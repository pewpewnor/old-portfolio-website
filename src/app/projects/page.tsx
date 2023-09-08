"use client";
import SwitchChannelContext from "@/contexts/SwitchChannelContext";
import HyperSpaceIntro from "@/page/hyperspace/HyperSpaceIntro";
import ScriptQuestIntro from "@/page/scriptquest/ScriptQuestIntro";
import ScriptQuestWhy from "@/page/scriptquest/ScriptQuestWhy";
import ChannelSection from "@/page/workspace/ChannelSection";
import { ChannelData } from "@/types/props";
import { FC, useState } from "react";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import { twMerge } from "tailwind-merge";

const workspaceData = {
	channelSections: [
		{
			id: "SQ",
			name: "SCRIPT QUEST",
			channels: [
				{
					id: "SQ01",
					name: "Introduction",
					content: <ScriptQuestIntro />,
				},
				{
					id: "SQ02",
					name: "Why ScriptQuest?",
					content: <ScriptQuestWhy />,
				},
			],
		},
		{
			id: "HY",
			name: "HYPER SPACE",
			channels: [
				{
					id: "HY01",
					name: "Introduction",
					content: <HyperSpaceIntro />,
				},
				{
					id: "HY02",
					name: "Why HyperSpace?",
					content: <ScriptQuestWhy />,
				},
			],
		},
	],
};

interface WorkspaceProps {}

const Workspace: FC<WorkspaceProps> = (props: WorkspaceProps) => {
	const [isChannelSidebarOpen, setIsChannelSidebarOpen] = useState(true);
	const [currentChannel, setCurrentChannel] = useState<ChannelData | null>(
		null
	);

	const toggleChannelSidebarCollapse = () => {
		setIsChannelSidebarOpen((prev) => !prev);
	};

	if (!currentChannel) {
		const firstChannel = workspaceData.channelSections[0].channels[0];
		if (firstChannel) {
			setCurrentChannel(firstChannel);
		}
	}

	function setCurrentChannelById(
		channelSectionId: string,
		channelId: string
	) {
		setCurrentChannel(
			// @ts-expect-error
			workspaceData.channelSections
				.find(
					(channelSection) => channelSection.id === channelSectionId
				)
				?.channels.find((channel) => channel.id === channelId)
		);
	}

	return (
		<div
			className={twMerge(
				"relative flex h-max min-h-screen bg-navy-blue",
				isChannelSidebarOpen ? "pl-64" : ""
			)}
		>
			<SwitchChannelContext.Provider
				value={[
					currentChannel,
					setCurrentChannel,
					setCurrentChannelById,
				]}
			>
				{/* Channel Sidebar */}
				<div
					className={`absolute left-0 top-0 h-full min-h-screen border-0 bg-shade-blue bg-opacity-75 pt-1 shadow-lg ${
						isChannelSidebarOpen ? "w-64" : "w-0"
					}`}
				>
					<div className={isChannelSidebarOpen ? "block" : "hidden"}>
						{workspaceData.channelSections.map(
							(channelSection, index) => {
								return (
									<ChannelSection
										key={index}
										{...channelSection}
									/>
								);
							}
						)}
					</div>

					{isChannelSidebarOpen ? (
						<div
							className="absolute right-[-1.25rem] block rounded-2xl bg-black p-2"
							style={{ top: "calc(50% - 2rem)" }}
							onClick={toggleChannelSidebarCollapse}
						>
							<AiOutlineDoubleLeft />
						</div>
					) : (
						<div
							className="absolute left-2 block rounded-2xl bg-black p-2"
							style={{ top: "calc(50% - 2rem)" }}
							onClick={toggleChannelSidebarCollapse}
						>
							<AiOutlineDoubleRight />
						</div>
					)}
				</div>

				{/* Main content */}
				<div className="h-full w-full">
					{!currentChannel ? (
						<div className="flex h-full items-center justify-center">
							<p className="text-lg">
								Let&apos;s pick a channel to open!
							</p>
						</div>
					) : currentChannel.content ? (
						<div className="p-8">{currentChannel.content}</div>
					) : (
						<div className="flex h-full items-center justify-center">
							<p className="text-lg">
								This channel seems to not work properly
							</p>
						</div>
					)}
				</div>
			</SwitchChannelContext.Provider>
		</div>
	);
};

export default Workspace;
