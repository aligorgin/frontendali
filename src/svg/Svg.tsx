import clsx from "clsx";

interface Props {
    name: string;
    padding?: boolean;
}

export default function Svg({name, padding}: Props) {
    return (
        <div>
            {
                name === 'github' &&
                <div className='text-zinc-900 dark:text-zinc-200'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                        <path
                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                </div>
            }
            {/*{*/}
            {/*    name === 'chat' &&*/}
            {/*    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"*/}
            {/*         stroke="currentColor">*/}
            {/*        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"*/}
            {/*              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>*/}
            {/*    </svg>*/}
            {/*}*/}
            {/*{*/}
            {/*    name === 'two-chat' &&*/}
            {/*    <svg xmlns="http://www.w3.org/2000/svg" className="h-[30px] w-[30px]" fill="none" viewBox="0 0 24 24"*/}
            {/*         stroke="currentColor">*/}
            {/*        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"*/}
            {/*              d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"/>*/}
            {/*    </svg>*/}
            {/*}*/}
            {/*{*/}
            {/*    name === 'sun' &&*/}
            {/*    <svg xmlns="http://www.w3.org/2000/svg" className="h-[30px] w-[30px]" fill="none" viewBox="0 0 24 24"*/}
            {/*         stroke="currentColor" strokeWidth="1.5">*/}
            {/*        <path strokeLinecap="round" strokeLinejoin="round"*/}
            {/*              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>*/}
            {/*    </svg>*/}
            {/*}*/}
            {/*{*/}
            {/*    name === 'download' &&*/}
            {/*    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"*/}
            {/*         stroke="currentColor" strokeWidth="1.5">*/}
            {/*        <path strokeLinecap="round" strokeLinejoin="round"*/}
            {/*              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>*/}
            {/*    </svg>*/}
            {/*}*/}
            {/*{*/}
            {/*    name === 'chevron-right' &&*/}
            {/*    <svg xmlns="http://www.w3.org/2000/svg" className={clsx('h-5 w-5', padding && 'mt-1')}*/}
            {/*         viewBox="0 0 20 20" fill="currentColor">*/}
            {/*        <path fillRule="evenodd"*/}
            {/*              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"*/}
            {/*              clipRule="evenodd"/>*/}
            {/*    </svg>*/}
            {/*}*/}
            {/*{*/}
            {/*    name === 'moon' &&*/}
            {/*    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"*/}
            {/*         stroke="currentColor" strokeWidth="2">*/}
            {/*        <path strokeLinecap="round" strokeLinejoin="round"*/}
            {/*              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>*/}
            {/*    </svg>*/}
            {/*}*/}
        </div>
    )
}