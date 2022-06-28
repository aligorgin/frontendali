import {useTheme} from "next-themes";
import {useEffect, useState} from "react";
import {ChatAlt2Icon, MoonIcon, SunIcon} from "@heroicons/react/outline";

export default function Nav() {
    const [mounted, setMounted] = useState<boolean>(false);
    const {systemTheme, theme, setTheme} = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    const renderThemeToggle = () => {
        if (!mounted) return null;
        const currentTheme = theme === 'system' ? systemTheme : theme;
        if (currentTheme === 'dark') {
            return (
                <button onClick={() => setTheme('light')}>
                    <MoonIcon className='h-6 w-6 mt-2'/>
                </button>
            )
        }
        return (
            <button onClick={() => setTheme('dark')}>
                <SunIcon className='h-6 w-6 mt-2'/>
            </button>
        )
    }

    return (
        <div
            className='fixed sm:relative top-0 right-0 left-0 transition-all duration-200 dark:bg-zinc-900 bg-zinc-200 shadow-md sm:shadow-none sm:border-none sm:bg-none z-50 w-full'>
            <div className='flex justify-between items-center my-2 mx-4 sm:mx-0 sm:mt-2'>
                {/*left nav*/}
                <div>
                    <ChatAlt2Icon className='w-6 h-6'/>
                </div>


                {/*right nav*/}
                <div>
                    {renderThemeToggle()}
                </div>

            </div>

        </div>

    )
}