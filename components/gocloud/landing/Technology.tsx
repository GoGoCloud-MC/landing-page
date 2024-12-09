'use client';
import React, {useEffect, useState} from 'react';
import {Cloud, Cpu, Server} from "lucide-react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import {atomOneDark, atomOneLight} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {useTheme} from "next-themes";

const Technology = () => {
	const {theme} = useTheme();
	const [mounted, setMounted] = useState(false);

	// Ensure that we only render after the client has mounted (for hydration fix)
	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null; // Avoid rendering the component on the server side
	}

	// Set style based on theme
	const vs = theme === 'dark' ? atomOneDark : atomOneLight;

	return (
		<section
			id="technology"
			className="py-20 px-4 md:px-8 bg-gradient-to-b from-transparent to-gogo-grey-90 dark:to-gogo-dark-70/10"
		>
			<div className="max-w-7xl mx-auto">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					<div>
						<h2 className="text-3xl font-bold mb-6 text-gogo-dark-100 dark:text-gogo-white">
							Built with Go, Optimized for Big Networks
						</h2>
						<p className="text-gogo-bluedeep dark:text-gogo-grey-90 mb-8">
							GoGoCloud leverages the power of Go to deliver exceptional performance. Our architecture
							ensures minimal latency and maximum reliability for your Minecraft servers.
						</p>
						<div className="space-y-4">
							<div className="flex items-start gap-4">
								<div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center">
									<Server className="w-5 h-5 text-cyan-400"/>
								</div>
								<div>
									<h3 className="font-semibold mb-1 text-gogo-dark-100 dark:text-gogo-white">
										Efficient Resource Management
									</h3>
									<p className="text-sm text-gogo-bluedeep dark:text-gogo-grey-90">
										Go&#39;s concurrent design enables optimal resource utilization
									</p>
								</div>
							</div>

							<div className="flex items-start gap-4">
								<div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center">
									<Cpu className="w-5 h-5 text-cyan-400"/>
								</div>
								<div>
									<h3 className="font-semibold mb-1 text-gogo-dark-100 dark:text-gogo-white">
										High Performance
									</h3>
									<p className="text-sm text-gogo-bluedeep dark:text-gogo-grey-90">
										Lightning-fast performance with sub-2ms latency
									</p>
								</div>
							</div>

							<div className="flex items-start gap-4">
								<div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center">
									<Cloud className="w-5 h-5 text-cyan-400"/>
								</div>
								<div>
									<h3 className="font-semibold mb-1 text-gogo-dark-100 dark:text-gogo-white">
										Auto-Scaling
									</h3>
									<p className="text-sm text-gogo-bluedeep dark:text-gogo-grey-90">
										Automatically adjust resources based on player count
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="relative">
						{/* Hintergrund-Blureffekt */}
						<div
							className="absolute inset-0 bg-gradient-to-r from-gogo-white dark:from-gogo-dark-100 to-cyan-500 rounded-3xl blur-3xl opacity-20"
						></div>
						{/* Terminal Container mit fixer Höhe */}
						<div
							className="relative rounded-2xl overflow-hidden border border-gogo-grey-100 dark:border-gogo-black-70"
						>
							<div className="bg-gogo-grey-black dark:bg-gogo-dark-70 p-2 flex items-center gap-2">
								<div className="w-3 h-3 rounded-full bg-red-500"></div>
								<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
								<div className="w-3 h-3 rounded-full bg-green-500"></div>
							</div>
							<div className="p-4">
								{/* Syntax Highlighted Code Block */}
								<SyntaxHighlighter language="go" style={vs}>
									{`type Server struct {
  ID        string
  Name      string
  Template  string
  Status    ServerStatus
  Players   int
  MaxPlayers int
  RAM       int
  CPU       float64
}

func (s *Server) Start() error {
  log.Info("Starting server: %s", s.Name)
  // Initialize server resources
  if err := s.allocateResources(); err != nil {
    return err
  }
  // Start server process
  if err := s.startProcess(); err != nil {
    return err
  }
  s.Status = StatusRunning
  return nil
}`}
								</SyntaxHighlighter>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Technology;
