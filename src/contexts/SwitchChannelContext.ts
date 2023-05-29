import { ChannelData } from "@/types/props";
import { Dispatch, SetStateAction, createContext } from "react";

const SwitchChannelContext = createContext<
	[
		ChannelData | null,
		Dispatch<SetStateAction<ChannelData | null>>,
		(channelSectionId: string, channelId: string) => void
	]
>([null, () => {}, () => {}]);

export default SwitchChannelContext;
