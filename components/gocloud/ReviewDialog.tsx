'use client';
import React, {useState} from 'react';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/gocloud/Dialog';
import {FaStar} from 'react-icons/fa';
import {sendDiscordWebhookReview} from "@/app/action";
import {useToast} from "@/hooks/use-toast";

const ReviewDialog = () => {
	const [selectedStars, setSelectedStars] = useState(0);
	const [form, setForm] = useState({
		name: '',
		role: '',
		review: '',
		captchaAnswer: '',
	});
	const [captcha, setCaptcha] = useState({question: '', answer: 0});
	const {toast} = useToast()

	const generateCaptcha = () => {
		const num1 = Math.floor(Math.random() * 10);
		const num2 = Math.floor(Math.random() * 10);
		setCaptcha({question: `${num1} + ${num2}`, answer: num1 + num2});
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if (parseInt(form.captchaAnswer) !== captcha.answer) {
			toast({
				title: 'Invalid CAPTCHA',
				description: 'Please try again.',
				variant: 'destructive',
			})
			return;
		}

		sendDiscordWebhookReview({
			name: form.name,
			amountOfStars: selectedStars,
			role: form.role,
			review: form.review,
		})
			.then(() => {
				toast({
					title: 'Review submitted successfully!',
					description: 'Thank you for your feedback.',
					variant: 'default',
				})
				setForm({name: '', role: '', review: '', captchaAnswer: ''});
				setSelectedStars(0);
				generateCaptcha();
			})
			.catch(() => {
				toast({
					title: 'Failed to submit the review',
					description: 'Please try again.',
					variant: 'destructive',
				})
			});
	};

	React.useEffect(() => {
		generateCaptcha();
	}, []);

	return (
		<Dialog>
			<DialogTrigger
				className="px-6 py-3 bg-black dark:bg-white dark:text-black text-white rounded-md w-full font-bold transition duration-200 cursor-pointer">
				Post a Review
			</DialogTrigger>
			<DialogContent className="p-6 rounded-lg shadow-lg bg-white">
				<DialogHeader>
					<DialogTitle className="text-lg font-bold text-gray-800 dark:text-white">
						Submit a review
					</DialogTitle>
					<DialogDescription className="text-sm text-gray-600 dark:text-gray-300">
						We&#39;d love to hear from you! Share your thoughts about our cloud service.
					</DialogDescription>
				</DialogHeader>

				<form className="grid grid-cols-1 gap-6 mt-4">
					{/* Name Field */}
					<label className="block">
            <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
              Name
            </span>
						<input
							type="text"
							placeholder="Enter your name"
							className="w-full p-3 rounded-md border border-gray-300 dark:border-gogo-grey-black dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200"
							value={form.name}
							onChange={(e) => setForm({...form, name: e.target.value})}
						/>
					</label>

					<label className="block">
            <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
              Role
            </span>
						<input
							type="text"
							placeholder="Enter your role (optional)"
							className="w-full p-3 rounded-md border border-gray-300 dark:border-gogo-grey-black dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200"
							value={form.role}
							onChange={(e) => setForm({...form, role: e.target.value})}
						/>
					</label>

					{/* Star Rating */}
					<label className="block">
            <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
              Amount of Stars
            </span>
						<div className="flex items-center gap-2 flex-row pt-2">
							{[...Array(5)].map((_, i) => (
								<button
									type="button"
									key={i}
									onClick={() => setSelectedStars(i + 1)}
									className={`w-10 h-10 flex items-center justify-center rounded-full ${
										i < selectedStars
											? 'bg-yellow-500 text-white'
											: 'bg-gray-200 dark:bg-gogo-dark-70'
									} hover:bg-yellow-400 transition duration-200`}
								>
									<FaStar size={18}/>
								</button>
							))}
						</div>
					</label>


					{/* Review Field */}
					<label className="block">
            <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
              Review
            </span>
						<textarea
							placeholder="Write your review..."
							rows={4}
							className="w-full p-3 rounded-md border border-gray-300 dark:border-gogo-grey-black dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200"
							value={form.review}
							onChange={(e) => setForm({...form, review: e.target.value})}
						></textarea>
					</label>

					<label className="block">
						<span className="text-sm w-full font-semibold text-gray-800 dark:text-gray-200">CAPTCHA</span>
						<div className="flex items-center gap-2 flex-col text-left">
							<span className="text-lg">What is the solution for: {captcha.question}</span>
							<input
								type="text"
								placeholder="Answer"
								className="w-full p-2 rounded-md border border-gray-300 dark:border-gogo-grey-black dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200"
								value={form.captchaAnswer}
								onChange={(e) => setForm({...form, captchaAnswer: e.target.value})}
							/>
						</div>
					</label>

					{/* Submit Button */}
					<button
						onClick={handleSubmit}
						type="submit"
						className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-md font-bold hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-200"
					>
						Submit
					</button>
				</form>
			</DialogContent>
		</Dialog>
	);
};

export default ReviewDialog;
