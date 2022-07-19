import Cards from "../components/Cards";
import ScrollContainer from "react-indiana-drag-scroll";

export default function Projects() {

    return (
        <section>
            <h2 className='text-4xl font-semibold  mt-12'>
                Projects
            </h2>
            <div className='mt-4 max-w-full relative '>
                <ScrollContainer vertical={false} horizontal={true} className={'flex w-full space-x-3 relative'}>
                    <Cards desc={'website template'} iconSrc={'https://github.com/aligorgin/natours'} image={'outdoor'} />
                    <Cards desc={'Weather App'} iconSrc={'https://github.com/aligorgin/weatherS'} image={'weather'} />
                    <Cards desc={'Twitter home page'} iconSrc={'https://github.com/aligorgin/twitteruiP'} image={'twitter'} />
                </ScrollContainer>
            </div>
        </section>
    )
}