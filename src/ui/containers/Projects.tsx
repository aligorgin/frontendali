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
                    <Cards desc={'coded a template website'} iconSrc={'https://github.com/aligorgin/natours'} image={'outdoor'} />
                    <Cards desc={'simple app that shows weather'} iconSrc={'https://github.com/aligorgin/weatherS'} image={'weather'} />
                    <Cards desc={'twitter home page'} iconSrc={'https://github.com/aligorgin/twitteruiP'} image={'twitter'} />
                </ScrollContainer>
            </div>
        </section>
    )
}