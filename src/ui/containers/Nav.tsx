import Svg from "../../svg/Svg";
import {useState} from "react";
import clsx from "clsx";

export default function Nav() {

    return (
        <div className='sticky top-0 backdrop-blur z-50 w-full'>
            <div className='flex justify-between items-center'>
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