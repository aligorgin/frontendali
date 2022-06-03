import Svg from "../../svg/Svg";

interface Props {
    TechName: string
}

export default function TechNameWithIcon({TechName}: Props) {
    return (
        <div className='flex items-center inline-block flex-wrap ml-6'>
            {/*<Svg name='chevron-right' padding={true}/>*/}
            <span className='border-l-2 border-l-dark-red pl-2 h-5 flex items-center justify-center'>{TechName}</span>
        </div>
    )
}