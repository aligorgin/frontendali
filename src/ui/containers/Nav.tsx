export default function Nav(){
    return(
        <div className='flex justify-between items-center'>
            <div className='flex space-x-2 text-lg'>
                <a href='#' className='hover:bg-gray-200 rounded cursor-pointer py-1 px-3 transition duration-300'>about</a>
                <a href='#' className='hover:bg-gray-200 rounded cursor-pointer py-1 px-3 transition duration-300'>projects</a>
                <a href='#' className='hover:bg-gray-200 rounded cursor-pointer py-1 px-3 transition duration-300'>contact</a>
            </div>

            <div>
                dark mod toggle
            </div>

        </div>
    )
}