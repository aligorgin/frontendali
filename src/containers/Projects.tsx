import ScrollContainer from 'react-indiana-drag-scroll';
import ImageCard from './components/ImageCards';

export default function Projects() {
	return (
		<section>
			<h2 className="mt-12 text-4xl  font-semibold">Projects</h2>
			<div className="relative mt-4 max-w-full ">
				<ScrollContainer
					vertical={false}
					horizontal={true}
					className={'relative flex w-full space-x-3'}
				>
					<ImageCard
						alt="Math spirit game"
						desc="Math Spirit: Boost math skills with playful gaming."
						iconSrc="https://github.com/aligorgin/MathSprintGame"
						imageSrc="/math-spirit.png"
						websiteSrc="https://aligorgin.github.io/MathSprintGame/"
						name="Math Spirit"
					/>
					<ImageCard
						alt="Ping-Pong game"
						desc="Ping Pong: Timeless table tennis excitement!"
						iconSrc="https://github.com/aligorgin/pong"
						imageSrc="/ping-pong.png"
						websiteSrc="https://aligorgin.github.io/pong/"
						name="Ping-Pong"
					/>
					<ImageCard
						alt="Weather Forecast"
						desc="Weather App: Stay informed about the forecast."
						iconSrc="https://github.com/aligorgin/weatherS"
						imageSrc="/weather.png"
						websiteSrc="https://weather-s3.vercel.app/"
						name="Weather Forecast"
					/>
					<ImageCard
						alt="Rock Paper Scissors game"
						desc="Rock-Paper-Scissors: Playful Hand Gesture Game"
						iconSrc="https://github.com/aligorgin/spockRockGame"
						imageSrc="/rock.png"
						websiteSrc="https://aligorgin.github.io/spockRockGame/"
						name="Rock Paper Scissors"
					/>
					<ImageCard
						alt="outdoors tours"
						desc="Outdoor Tours Template: Book Adventures Today!"
						iconSrc="https://github.com/aligorgin/natours"
						imageSrc="/outdoors.png"
						websiteSrc="https://natours-henna.vercel.app/"
						name="Rock Paper Scissors"
					/>
					<ImageCard
						alt="Paint clone"
						desc="Paint Clone: Unleash Your Creativity!"
						iconSrc="https://github.com/aligorgin/paintClone "
						imageSrc="/paint-clone.png"
						websiteSrc="https://aligorgin.github.io/paintClone/"
						name="Paint Clone"
					/>
				</ScrollContainer>
			</div>
		</section>
	);
}
