import React from 'react'
import {Boxes, Cloud, Cpu, LayoutDashboardIcon, Terminal, Workflow} from "lucide-react";

const Features = () => {
	const features = [
		{
			icon: Cpu,
			title: 'High Performance',
			description: 'Written in Go for maximum efficiency and minimal resource usage'
		},
		{
			icon: Cloud,
			title: 'Auto-Scaling',
			description: 'Dynamically adjust resources based on player count'
		},
		{
			icon: LayoutDashboardIcon,
			title: 'Centralized Dashboard',
			description: 'Integrated dashboard for easy server management'
		},
		{
			icon: Terminal,
			title: 'API Integration',
			description: 'Seamlessly integrate with your existing systems'
		},
		{
			icon: Boxes,
			title: 'Template System',
			description: 'Create and deploy server templates instantly'
		},
		{
			icon: Workflow,
			title: 'Smart Load Balancing',
			description: 'Intelligent player distribution across servers'
		}
	]

	return (
		<section id="features" className="py-20 px-4 md:px-8">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-16">
					<h2 className="text-3xl font-bold mb-4 text-gogo-dark-100 dark:text-gogo-white">Powerful
						Features</h2>
					<p className="text-gogo-bluedeep dark:text-gogo-grey-90 max-w-2xl mx-auto">
						Everything you need to run a successful Minecraft network, powered by cutting-edge Go technology
					</p>
				</div>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{features.map((feature, index) => (
						<div
							key={index}
							className="p-6 rounded-2xl bg-gogo-white dark:bg-gogo-dark-70 border border-gogo-grey-100/30 dark:border-gogo-black-70 hover:border-cyan-500 dark:hover:border-cyan-500 transition-colors group"
						>
							<feature.icon
								className="w-10 h-10 text-cyan-400 mb-4 group-hover:scale-110 transition-transform"/>
							<h3 className="text-xl font-semibold mb-2 text-gogo-dark-100 dark:text-gogo-white">{feature.title}</h3>
							<p className="text-gogo-bluedeep dark:text-gogo-grey-90">{feature.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
export default Features
