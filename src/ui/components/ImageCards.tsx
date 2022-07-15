import Image from "next/image";
import Weather from "../../../public/weather.png";
import outdoor from '../../../public/outdoors.png';
import twitter from '../../../public/twitterUI.png';

interface Props {
    image: 'weather' | 'outdoor' | 'twitter';
}

export default function ImageCards({image}: Props) {
    return (
        <div>
            {
                image === 'weather' &&
                <a className='block' href="https://weather-s3.vercel.app/" target={"_blank"} rel="noreferrer">
                    <Image className='rounded-tr-lg rounded-tl-lg sm:bg-cover bg-contain' src={Weather}
                           alt='outdoor app image' objectFit={'cover'}
                           layout={'responsive'} priority={true}/>
                </a>
            }
            {
                image === 'outdoor' &&
                <a className='block' href="https://natours-henna.vercel.app/" target={"_blank"} rel="noreferrer">
                    <Image className='rounded-tr-lg rounded-tl-lg sm:bg-cover bg-contain' src={outdoor}
                           alt='a mini project about telling you weather' objectFit={'cover'}
                           layout={'responsive'} priority={true}/>
                </a>
            }
            {
                image === 'twitter' &&
                <a className='block' href="https://twitterui-p.vercel.app/" target={"_blank"} rel="noreferrer">
                    <Image className='rounded-tr-lg rounded-tl-lg sm:bg-cover bg-contain' src={twitter}
                           alt='twitter home page' objectFit={'cover'}
                           layout={'responsive'} priority={true}/>
                </a>
            }
        </div>
    )
}