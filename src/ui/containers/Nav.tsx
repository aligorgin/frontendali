import Svg from "../../svg/Svg";
import {useState} from "react";
import clsx from "clsx";

export default function Nav() {

    return (
        <div className='flex justify-between items-center mt-4'>
            {/*left nav*/}
            <div>
                <Svg name={'two-chat'}/>
            </div>


            {/*right nav*/}
            <div>
                <Svg name={'sun'}/>
            </div>
        </div>
    )
}