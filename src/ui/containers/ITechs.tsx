import TechNameWithIcon from "../components/TechNameWithIcon";

export default function ITechs() {
    const techNames = [
        {id: 0, name: 'html/css'},
        {id: 1, name: 'javascript'},
        {id: 2, name: 'typescript'},
        {id: 3, name: 'framer'},
        {id: 4, name: 'react'},
        {id: 5, name: 'next.js'},
        {id: 6, name: 'tailwindcss'},
        {id: 7, name: 'git'},
        {id: 8, name: 'github'},
    ]

    return (
        <div className='mt-12 leading-8 sm:leading-6 '>
            <p className='leading-7 sm:leading-6' >Here are a few technologies I&apos;ve been working with recently:</p>
            <div className='relative mt-6 sm:mt-4 grid grid-cols-2 sm:grid-cols-3 gap-y-3 sm:gap-y-4 justify-items-center sm:justify-items-start '>
                <div className='absolute top-0 right-1/2 left-1/2 h-full sm:hidden w-[1px] dark:bg-light-blue bg-light-orange -translate-x-1/2'/>
                {techNames.map((name) =>
                    <TechNameWithIcon key={name.id} TechName={name.name}/>
                )}
            </div>
        </div>
    )
}