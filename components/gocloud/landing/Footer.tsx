import React from 'react'
import Image from "next/image";
import {ICONS} from "@/constants/assets";

const Footer = () => {
	return (
		<footer className="bg-gogo-white dark:bg-gogo-dark-100 border-t border-gogo-grey-90 dark:border-gogo-black-70">
			<div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
					<div className="col-span-2 md:col-span-1">
						<div className="flex items-center gap-3 mb-4">
							<Image src={ICONS.LOGO} alt="GoGoCloud Logo" width={32} height={32}
								   className="dark:invert"/>
							<span
								className="text-xl font-semibold text-gogo-dark-100 dark:text-gogo-white">GoGoCloud</span>
						</div>
						<p className="text-sm text-gogo-bluedeep dark:text-gogo-grey-90">
							Next-generation Minecraft server management powered with Go
						</p>
					</div>
					<div>
						<h3 className="text-sm font-semibold mb-4 text-gogo-dark-100 dark:text-gogo-white">GoGoCloud</h3>
						<ul className="space-y-3">
							<li><a href="#features"
								   className="text-sm text-gogo-bluedeep dark:text-gogo-grey-90 hover:text-gogo-blue">Features</a>
							</li>
							<li><a href="#technology"
								   className="text-sm text-gogo-bluedeep dark:text-gogo-grey-90 hover:text-gogo-blue">Technology</a>
							</li>
							<li><a href="#"
								   className="text-sm text-gogo-bluedeep dark:text-gogo-grey-90 hover:text-gogo-blue">Documentation</a>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="text-sm font-semibold mb-4 text-gogo-dark-100 dark:text-gogo-white">Services</h3>
						<ul className="space-y-3">
							<li><a href={process.env.NEXT_PUBLIC_GITHUB_ORGANISATION}
								   className="text-sm text-gogo-bluedeep dark:text-gogo-grey-90 hover:text-gogo-blue">GitHub
								Organisation</a>
							</li>
							<li><a href={process.env.NEXT_PUBLIC_DISCORD}
								   className="text-sm text-gogo-bluedeep dark:text-gogo-grey-90 hover:text-gogo-blue">Discord</a>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="text-sm font-semibold mb-4 text-gogo-dark-100 dark:text-gogo-white">Legal</h3>
						<ul className="space-y-3">
							<li><a href="/privacy"
								   className="text-sm text-gogo-bluedeep dark:text-gogo-grey-90 hover:text-gogo-blue">Privacy</a>
							</li>
							<li><a href="/imprint"
								   className="text-sm text-gogo-bluedeep dark:text-gogo-grey-90 hover:text-gogo-blue">Imprint</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="mt-8 pt-8 border-t border-gogo-grey-100 dark:border-gogo-black-70">
					<p className="text-sm text-center text-gogo-bluedeep dark:text-gogo-grey-90">
						© {new Date().getFullYear()} GoGoCloud. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	)
}
export default Footer
