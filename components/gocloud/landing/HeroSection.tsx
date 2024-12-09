'use client';
import React from 'react'
import {Button} from "@/components/gocloud/Button";
import {Terminal} from "lucide-react";
import DownloadDialog from "@/components/gocloud/DownloadDialog";

const HeroSection = () => {
	return (
		<section className="pt-32 pb-20 px-4 md:px-8">
			<div className="max-w-7xl mx-auto">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					<div>
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 bg-gradient-to-r from-cyan-500 to-cyan-200 bg-clip-text text-transparent pb-2">
							Next-Gen Minecraft Server Management
						</h1>
						<p className="text-xl mb-8 text-gogo-bluedeep dark:text-gogo-grey-90">
							Built with Go for lightning-fast performance. Scale your Minecraft network effortlessly with
							our modern cloud infrastructure.
						</p>
						<div className="flex flex-col sm:flex-row gap-4">
							<DownloadDialog isStartButton/>
							<Button size="lg" variant="outline"

									onClick={() => {
										window.open(process.env.NEXT_PUBLIC_DOCS, '_blank');
									}}

							>
								View Documentation
							</Button>
						</div>
						<div className="mt-8 pt-8 border-t border-gogo-grey-100 dark:border-gogo-black-70">
							<div className="flex flex-col sm:flex-row gap-6">
								<div>
									<div className="text-2xl font-bold text-cyan-400">Go</div>
									<div className="text-sm text-gogo-bluedeep dark:text-gogo-grey-90">Powered</div>
								</div>
								<div>
									<div className="text-2xl font-bold text-cyan-400">Best</div>
									<div className="text-sm text-gogo-bluedeep dark:text-gogo-grey-90">Performance</div>
								</div>
								<div>
									<div className="text-2xl font-bold text-cyan-400">2ms</div>
									<div className="text-sm text-gogo-bluedeep dark:text-gogo-grey-90">Average Latency
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="relative">
						<div
							className="absolute inset-0 bg-gradient-to-r from-gogo-white dark:from-gogo-dark-100 to-cyan-500 rounded-3xl blur-3xl opacity-20"></div>
						<div
							className="relative p-8 rounded-3xl border border-gogo-grey-100/50 dark:border-gogo-black-70 text-black dark:text-white">
							<Terminal className="w-12 h-12 text-gogo-blue mb-6"/>
							<pre
								className="block whitespace-pre text-sm overflow-x-auto bg-transparent"
								style={{
									fontFamily: "Courier New, monospace",
									lineHeight: 1.5,
								}}
							>
                <code>{`$ cloudctrl init

[INFO] Initializing GoGoCloud v1.0.0
[INFO] Loading configuration...
[INFO] Connecting to network nodes...
[SUCCESS] Connected to 3 nodes
[INFO] Starting proxy manager...
[SUCCESS] Proxy manager ready
[INFO] Starting server templates...
[SUCCESS] Templates loaded
[INFO] GoGoCloud is ready!

> cloudctrl start lobby-1
[SUCCESS] Started server lobby-1
[INFO] Players: 0/100
[INFO] RAM: 2GB
[INFO] Region: EU-Central`}</code>
              </pre>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
export default HeroSection
