import Svg from "../svg/Svg";
import {useState} from "react";
import clsx from "clsx";
import {is} from "@babel/types";

export default function Nav() {

    const [isClick, setIsClicked] = useState(false);
    const [oneTime ,setOneTime] =useState(true);

    console.log(isClick,oneTime,!oneTime, !oneTime && isClick ? 'comb true' : 'comb false')

    return (
        <div className='flex justify-between items-center'>
            <div onClick={() => {
                setIsClicked(!isClick);
                setOneTime(false)
            }} className='flex inline-block cursor-pointer'>
                {
                    isClick ?
                        <div className={clsx(!isClick && 'opacity-100' , 'transition-all duration-1000')}>
                            <Svg name={'two-chat'}/>
                        </div>
                        :
                        <div className={clsx(oneTime && 'opacity-100',isClick && 'opacity-0', 'transition-all duration-1000 ',)}>
                            <Svg name={'chat'}/>
                        </div>

                }

            </div>

            <div>
                dark mod toggle
            </div>

        </div>
    )
}