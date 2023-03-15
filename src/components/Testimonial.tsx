interface TestimonialProps {
	color: string;
	name: string;
	lastName: string;
	job: string;
	title: string;
	testimonial: string;
	imageBorderColor?: string;
	bgDark: boolean;
}

export default function Testimonial({
	color,
	name,
	lastName,
	job,
	title,
	testimonial,
	imageBorderColor,
	bgDark,
}: TestimonialProps) {
	return (
		<div className={`flex flex-col bg-${color} rounded-lg `}>
			<div>
				<header className="flex flex-row gap-4">
					<div
						className={`rounded-full p-2 ${
							imageBorderColor == undefined
								? ""
								: `bg-${imageBorderColor} `
						}`}
					>
						<img
							className="rounded-full"
							src={`/image-${name}`}
							alt={`${name} profile picture`}
						/>
					</div>
					<div className="">
						<h2
							className={`text-base ${
								bgDark ? "text-white" : "text-blue-dark_black"
							}`}
						>
							{name} {lastName}
						</h2>
						<span
							className={`text-sm opacity-50 ${
								bgDark ? "text-white" : "text-blue-dark_black"
							}`}
						>
							{job}
						</span>
					</div>
				</header>
				<main className="w-[21.3rem]">
					<h1
						className={`text-2xl font-bold ${
							bgDark ? "text-white" : "text-blue-dark_black"
						}`}
					>
						{title}
					</h1>
				</main>
				<footer className="w-[21.3rem]">
					<p
						className={`text-sm opacity-70 ${
							bgDark ? "text-white" : "text-blue-dark_black"
						}`}
					>
						{testimonial}
					</p>
				</footer>
			</div>
		</div>
	);
}
