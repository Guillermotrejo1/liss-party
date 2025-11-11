import React, { useEffect, useState } from "react";

// Simple infinite-scrolling word carousel (no edge fades)
// - Pass an array of strings via `words`
// - Duplicates content to create a seamless loop
// - Respects prefers-reduced-motion
function WordCarousel({
	words = [
		"Piñatas",
		"Garlands",
		"Banners",
		"Shirts",
		"Center Pieces",
		"Stickers",
		"Stencils",
	],
	label = "Explore more",
	speedSeconds = 25,
}) {
	const sequence = [...words, ...words];

	// Inline CSS variable for speed control
	const style = { "--wc-speed": `${speedSeconds}s` };

	// Avoid flash on page load: render hidden until mount, then fade in
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		const id = requestAnimationFrame(() => setMounted(true));
		return () => cancelAnimationFrame(id);
	}, []);

	return (
		<div
			className={`word-carousel ${mounted ? 'word-carousel--visible' : 'word-carousel--hidden'}`}
			aria-label={label}
			role="list"
			style={style}
		>
			<div className="word-carousel__track">
				{sequence.map((w, i) => (
					<span className="word-carousel__item" role="listitem" key={`${w}-${i}`}>
						{w}
					</span>
				))}
			</div>
		</div>
	);
}

export default WordCarousel;

