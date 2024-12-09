import React from 'react'
import {faqs} from "@/constants/assets";

const Faq = () => {

	return (
		<section id="faq" className="py-20 px-4 md:px-8 bg-gogo-grey-90 dark:bg-gogo-dark-70/10">
			<div className="max-w-3xl mx-auto">
				<h2 className="text-3xl font-bold text-center mb-12 text-gogo-dark-100 dark:text-gogo-white">Frequently
					Asked Questions</h2>
				<div className="space-y-6">
					{faqs.map((faq, index) => (
						<div
							key={index}
							className="p-6 rounded-2xl bg-gogo-white dark:bg-gogo-dark-100 border border-gogo-grey-90 dark:border-gogo-black-70"
						>
							<h3 className="text-lg font-semibold mb-2 text-gogo-dark-100 dark:text-gogo-white">{faq.question}</h3>
							<p className="text-gogo-bluedeep dark:text-gogo-grey-90">{faq.answer}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
export default Faq
