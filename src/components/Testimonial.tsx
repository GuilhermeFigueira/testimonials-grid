interface TestimonialProps {
	color: string;
	name: string;
	lastName: string;
	job: string;
	title: string;
	children: string;
	imageBorderColor?: string;
	bgDark: boolean;
	bgPattern?: boolean;
}

export default function Testimonial({
	color,
	name,
	lastName,
	job,
	title,
	children,
	imageBorderColor,
	bgDark,
	bgPattern,
}: TestimonialProps) {
	return (
		<div className={`${color} rounded-lg w-fit xl:w-full xl:h-full`}>
			<div
				className={`flex flex-col gap-4 py-8 mx-8 ${
					bgPattern ? "pattern" : ""
				}`}
			>
				<div className="flex flex-row gap-4 items-center">
					<div
						className={`rounded-full p-1 ${
							imageBorderColor == undefined
								? ""
								: `${imageBorderColor} saturate-150`
						}`}
					>
						<img
							className="rounded-full saturate-50 w-10"
							src={`/image-${name.toLowerCase()}.jpg`}
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
				</div>
				<article className="w-[20.8rem] xl:w-full">
					<h1
						className={`text-2xl font-bold ${
							bgDark ? "text-white" : "text-blue-dark_black"
						}`}
					>
						{title}
					</h1>
				</article>
				<div className="w-[19rem] xl:w-full">
					<p
						className={`text-sm opacity-70 font-thin ${
							bgDark ? "text-white" : "text-blue-dark_black"
						}`}
					>
						{children}
					</p>
				</div>
			</div>
		</div>
	);
}
