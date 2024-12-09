import React from 'react'
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/components/gocloud/Dialog";
import {ArrowRight} from "lucide-react";
import {Button} from "@/components/gocloud/Button";

interface Props {
	isStartButton?: boolean;
}

const DownloadDialog = ({isStartButton}: Props) => {
	return (
		<Dialog>
			<DialogTrigger className={'w-full'}>

				{isStartButton ? (
					<Button size="lg" className="group">
						Start Your Experience
						<ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform"/>
					</Button>
				) : (
					<a href={'#'}

					   className={'bg-gogo-dark-100 dark:bg-gogo-white dark:text-gogo-dark-100 p-2 rounded-md text-gogo-white px-4 font-bold cursor-pointer'}>
						Download
					</a>
				)}
			</DialogTrigger>
			<DialogContent className="p-6 rounded-lg shadow-lg bg-white">
				<DialogHeader>
					<DialogTitle className="text-lg font-bold text-gray-800 dark:text-white">
						Download the GoGoCloud
					</DialogTitle>
				</DialogHeader>
				The GoGoCloud is currently in development. Please check back later.
			</DialogContent>
		</Dialog>
	)
}
export default DownloadDialog
