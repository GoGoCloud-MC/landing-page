import React from 'react'
import ReviewDialog from "@/components/gocloud/ReviewDialog";

interface Review {
	name?: string
	role?: string
	comment?: string
	amountOfStars?: number
}

const Reviews = () => {

	const reviews: Review[] = []

	return (
		<section id="reviews" className="py-20 px-4 md:px-8">
			<div className="max-w-7xl mx-auto">
				<h2 className="text-3xl font-bold text-center mb-16 text-gogo-dark-100 dark:text-gogo-white">
					User Reviews
				</h2>

				{reviews.length < 1 && (
					<div className="max-w-2xl mx-auto flex flex-col items-center text-center gap-6">
						<h3 className="text-2xl font-semibold text-gogo-dark-100 dark:text-gogo-white">
							No Reviews Yet!
						</h3>
						<p className="text-lg text-gogo-bluedeep dark:text-gogo-grey-90">
							Be the first to share your thoughts about our cloud. We&#39;d love to hear from you!
						</p>
						<ReviewDialog/>
					</div>
				)}

				<div className="grid md:grid-cols-3 gap-8">

					{reviews.length > 0 && reviews.map((review, index) => (
						<div
							key={index}
							className="p-6 rounded-2xl bg-gogo-white dark:bg-gogo-dark-70/10 border border-gogo-grey-100 dark:border-gogo-black-70"
						>
							<div className="flex items-center gap-2 mb-4">
								{[...Array(review.amountOfStars)].map((_, i) => (
									<svg
										key={i}
										className="w-5 h-5 text-yellow-400"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"/>
									</svg>
								))}
							</div>
							<p className="mb-4 text-gogo-bluedeep dark:text-gogo-grey-90">{review.comment}</p>
							<div>
								<div
									className="font-semibold text-gogo-dark-100 dark:text-gogo-white">{review.name}</div>
								<div className="text-sm text-gogo-bluedeep dark:text-gogo-grey-90">{review.role}</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
export default Reviews
