import { FC } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

interface AddPillarModalProps {
	handleCloseClicked: () => void;
}

const AddPillarModal: FC<AddPillarModalProps> = (
	props: AddPillarModalProps
) => {
	return (
		<>
			<div className="fixed inset-0 z-20 bg-black opacity-40"></div>
			<div className="fixed inset-0 z-30 flex items-center justify-center">
				<div className="relative mx-auto my-6 w-72 sm:w-96">
					{/*content*/}
					<div className="relative flex w-full flex-col rounded-lg border-0 bg-shade-blue shadow-lg outline-none focus:outline-none">
						{/*header*/}
						<div className="flex items-start justify-between rounded-t border-b border-solid border-slate-200 p-5">
							<h3 className="text-xl font-semibold">
								Add A New Pillar
							</h3>
							<AiFillCloseCircle
								className="fill-red h-6 w-6"
								onClick={props.handleCloseClicked}
							/>
						</div>
						{/*body*/}
						<div className="relative flex-auto p-6">
							<p className="my-4 text-lg leading-relaxed text-slate-500">
								I always felt like I could do anything.
							</p>
						</div>
						{/*footer*/}
						<div className="flex items-center justify-end rounded-b border-t border-solid border-slate-200 p-6">
							<button
								className="background-transparent mb-1 mr-1 px-6 py-2 text-sm font-bold uppercase text-red-500 outline-none transition-all duration-150 ease-linear focus:outline-none"
								onClick={props.handleCloseClicked}
							>
								Close
							</button>
							<button
								className="mb-1 mr-1 rounded bg-emerald-500 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-emerald-600"
								onClick={props.handleCloseClicked}
							>
								Save Changes
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AddPillarModal;
