import Svg from "../../svg/Svg";
import {useTheme} from "next-themes";
import {useEffect, useState} from "react";

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
                    <Svg name={'moon'}/>
                </button>
            )
        } else {
            return (
                <button onClick={() => setTheme('dark')}>
                    <Svg name={'sun'}/>
                </button>
            )
        }

    }

    console.log('theme is', theme)

    return (
        <div
            className='fixed sm:relative top-0 right-0 left-0 shadow-md sm:shadow-none sm:border-none sm:bg-none z-50 w-full'>
            <div className='flex justify-between items-center my-2 mx-4 sm:mx-0 sm:mt-2'>
                {/*left nav*/}
                <div>
                    <Svg name={'two-chat'}/>
                </div>


                {/*right nav*/}
                {renderThemeToggle()}

            </div>

        </div>

    )
}