import Cards from "../components/Cards";
import ScrollContainer from "react-indiana-drag-scroll";
import {useState} from "react";

export default function Projects() {

    return (
        <section>
            <h2 className='text-4xl font-bold mt-16 gradient-text from-primary-light to-secondary-light pb-1'>
                Projects
            </h2>
            <div className='mt-4 max-w-full relative'>
                {/*{show && <div className='absolute z-10 h-full right-0 top-0 w-16 bg-gradient-to-l from-gray-50 to-transparent opacity-40'/>}*/}
                <ScrollContainer vertical={false} horizontal={true} className={'flex w-full space-x-3 relative'}>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                </ScrollContainer>


            </div>
        </section>
    )
}