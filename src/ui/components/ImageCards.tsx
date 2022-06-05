import Image from "next/image";
import Weather from "../../../public/weather.png";

interface Props{
    image:string;
}

export default function ImageCards({image}:Props){
    return(
        <div>
            {
                image === 'weather' &&
                <a className='block' href="https://weather-s3.vercel.app/" target={"_blank"} rel="noreferrer">
                    <Image className='rounded-tr-lg rounded-tl-lg sm:bg-cover bg-contain' src={Weather}
                           alt='a mini project about telling you weather' objectFit={'cover'}
                           layout={'responsive'}/>
                </a>
            }
        </div>
    )
}