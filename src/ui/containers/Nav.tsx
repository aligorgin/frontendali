import Svg from "../../svg/Svg";
import {useState} from "react";
import clsx from "clsx";

export default function Nav() {

    return (
        <div className='fixed sm:relative top-0 right-0 left-0 bg-slate-200 shadow-md sm:shadow-none sm:border-none sm:bg-none z-50 w-full'>
            <div className='flex justify-between items-center my-2 mx-4 sm:mx-0 sm:mt-2'>
                {/*left nav*/}
                <div>
                    <Svg name={'two-chat'}/>
                </div>


                {/*right nav*/}
                <div>
                    <Svg name={'sun'}/>
                </div>

            </div>

        </div>

    )
}