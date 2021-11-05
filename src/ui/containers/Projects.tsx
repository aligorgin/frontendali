import Cards from "../components/Cards";

export default function Projects(){
    return(
        <section>
            <h2 className='text-4xl font-bold mt-16'>Projects</h2>
            <div className='mt-4 max-w-full scrollbar-x-hidden flex space-x-3 overflow-x-auto'>

                <Cards/>
                <Cards/>
                <Cards/>

            </div>
        </section>
    )
 }