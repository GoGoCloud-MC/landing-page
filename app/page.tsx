import React from 'react'
import Header from "@/components/gocloud/landing/Header";
import HeroSection from "@/components/gocloud/landing/HeroSection";
import Features from "@/components/gocloud/landing/Features";
import Technology from "@/components/gocloud/landing/Technology";
import Reviews from "@/components/gocloud/landing/Reviews";
import Faq from "@/components/gocloud/landing/Faq";
import Footer from "@/components/gocloud/landing/Footer";

const LandingPage = () => {
	return (
		<div className="flex flex-col min-h-screen bg-gogo-white dark:bg-gogo-dark-100">
			<Header/>
			<main>
				<HeroSection/>
				<Features/>
				<Technology/>
				<Reviews/>
				<Faq/>
			</main>
			<Footer/>
		</div>
	)
}

export default LandingPage

