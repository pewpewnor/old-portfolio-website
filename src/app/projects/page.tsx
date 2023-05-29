"use client";
import SwitchChannelContext from "@/contexts/SwitchChannelContext";
import ScriptQuestIntro from "@/page/scriptquest/ScriptQuestIntro";
import ChannelSection from "@/page/workspace/ChannelSection";
import { ChannelData } from "@/types/props";
import { FC, useState } from "react";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";

const workspaceData = {
	channelSections: [
		{
			name: "SCRIPT QUEST",
			channels: [
				{
					id: "SQ01",
					name: "Introduction",
					content: <ScriptQuestIntro />,
				},
				{
					id: "SQ02",
					name: "How to use",
					content: <div>How to uuse</div>,
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

	return (
		<div className="relative flex h-full">
			{/* Channel Sidebar */}
			<div
				className={`relative h-full min-h-screen border-0 bg-shade-blue bg-opacity-75 pt-1 shadow-lg ${
					isChannelSidebarOpen ? "w-64" : "w-0"
				}`}
			>
				<div className={isChannelSidebarOpen ? "block" : "hidden"}>
					<SwitchChannelContext.Provider
						value={[currentChannel, setCurrentChannel]}
					>
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
					</SwitchChannelContext.Provider>
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
		</div>
	);
};

export default Workspace;
