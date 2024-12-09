'use server';

export async function sendDiscordWebhookReview({
												   name,
												   amountOfStars,
												   role,
												   review,
											   }: {
	name: string;
	amountOfStars: number;
	role: string;
	review: string;
}) {
	const webhookURL = process.env.DISCORD_REVIEW_WEBHOOK_URL;
	const starEmojis = '⭐'.repeat(amountOfStars);
	const webhookData = {
		content: `🎉 **New Review Submitted!** 🎉\n💬 From: **${name}** (*${role}*)`,
		embeds: [
			{
				title: `✨ ${amountOfStars} ${amountOfStars > 1 ? 'Stars' : 'Star'} Given! ✨`,
				description: `**Review:**\n> "${review}"`,
				color: 0x5865F2,
				fields: [
					{
						name: `⭐ Rating:`,
						value: `${starEmojis}`,
						inline: true,
					},
					{
						name: `🎭 Role:`,
						value: `${role}`,
						inline: true,
					},
				],
				footer: {
					text: `Submitted via GoGoCloud Reviews`
				},
				timestamp: new Date().toISOString(),
			},
		],
	};

	if (!webhookURL) {
		console.error('DISCORD_REVIEW_WEBHOOK_URL is not defined');
		return;
	}

	await fetch(webhookURL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(webhookData),
	});
}
