import React from 'react'
import Image from "next/image";
import {ICONS} from "@/constants/assets";
import DownloadDialog from "@/components/gocloud/DownloadDialog";

const Header = () => {
	return (
		<header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-gogo-white/20 dark:bg-gogo-dark-100/80">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between py-2">
					<div className="flex items-center gap-3">
						<Image src={ICONS.LOGO} alt="GoGoCloud Logo" width={32} height={32} className="dark:invert"/>
						<span className="text-xl font-semibold text-gogo-dark-100 dark:text-gogo-white">GoGoCloud</span>
					</div>
					<nav className="hidden md:flex items-center gap-8">
						<a href="#features"
						   className="text-sm font-medium text-gogo-bluedeep dark:text-gogo-grey-90 hover:text-gogo-blue transition-colors">Features</a>
						<a href="#technology"
						   className="text-sm font-medium text-gogo-bluedeep dark:text-gogo-grey-90 hover:text-gogo-blue transition-colors">Technology</a>
						<a href="#reviews"
						   className="text-sm font-medium text-gogo-bluedeep dark:text-gogo-grey-90 hover:text-gogo-blue transition-colors">Reviews</a>
						<DownloadDialog/>

					</nav>
				</div>
			</div>
		</header>
	)
}
export default Header
