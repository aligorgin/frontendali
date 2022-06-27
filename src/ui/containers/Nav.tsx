import Svg from "../../svg/Svg";
import {useTheme} from "next-themes";

export default function Nav() {

    const {systemTheme, theme, setTheme} = useTheme();

    const renderThemeToggle = () => {
        const currentTheme = theme === 'system' ? systemTheme : theme;
        if (currentTheme === 'dark') {
            return (
                <button onClick={() => setTheme('light')}>
                    <Svg name={'moon'}/>
                </button>
            )
        }
        return (
            <button onClick={() => setTheme('dark')}>
                <Svg name={'sun'}/>
            </button>
        )
    }

    console.log()

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