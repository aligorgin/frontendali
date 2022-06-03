import TechNameWithIcon from "../components/TechNameWithIcon";

export default function ITechs() {
    const techNames = [
        {id: 0, name: 'html/css'},
        {id: 1, name: 'javascript'},
        {id: 2, name: 'typescript'},
        {id: 3, name: 'figma'},
        {id: 4, name: 'react'},
        {id: 5, name: 'next.js'},
        {id: 6, name: 'tailwindcss'},
        {id: 7, name: 'git'},
        {id: 8, name: 'github'},
    ]

    return (
        <div className='mt-12 leading-8 sm:leading-6'>
            <p>Here are a few technologies I&apos;ve been working with recently:</p>
            <div className='mt-6 sm:mt-4 grid grid-cols-3 gap-y-4 '>
                {techNames.map((name) =>
                    <TechNameWithIcon key={name.id} TechName={name.name}/>
                )}
            </div>
        </div>
    )
}