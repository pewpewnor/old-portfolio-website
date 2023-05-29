"use client";
import SwitchChannelContext from "@/contexts/SwitchChannelContext";
import { ChannelData } from "@/types/props";
import { FC, useContext } from "react";
import { HiHashtag } from "react-icons/hi";
import { twMerge } from "tailwind-merge";

interface ChannelProps extends ChannelData {}

const Channel: FC<ChannelProps> = (props: ChannelProps) => {
	const [currentChannel, setCurrentChannel, _] =
		useContext(SwitchChannelContext);

	return (
		<div
			className={twMerge(
				"mx-2 mb-1 flex justify-between rounded-md py-1 pl-6 pr-2",
				currentChannel && currentChannel.id === props.id
					? "bg-slate-500"
					: "hover:bg-light-shade-blue"
			)}
			onClick={() => {
				setCurrentChannel(props);
			}}
		>
			{/* Left section */}
			<div className="flex items-center gap-x-2 pr-2">
				<HiHashtag />
				{props.name}
			</div>

			{/* Right section */}
			<div className="flex items-center gap-x-2"></div>
		</div>
	);
};

export default Channel;
