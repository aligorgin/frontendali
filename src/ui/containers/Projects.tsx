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
                    <Cards desc={'simple app that shows weather'} iconSrc={'https://github.com/aligorgin/weatherS'} image={'weather'} />
                    <Cards desc={'simple app that shows weather'} iconSrc={'https://github.com/aligorgin/weatherS'} image={'weather'} />
                    <Cards desc={'simple app that shows weather'} iconSrc={'https://github.com/aligorgin/weatherS'} image={'weather'} />
                </ScrollContainer>
            </div>
        </section>
    )
}