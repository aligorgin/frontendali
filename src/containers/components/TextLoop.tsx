'use client';


import {AnimatePresence, motion} from "framer-motion";

interface Props {
    index: number;
}

const texts = ["Frontend", "Committed", "Passionated"];

export default function TextLoop({index}: Props) {

    // this absolute class is so imp for animate !
    return (
        <div>
            <AnimatePresence>
                <motion.div
                    className={'absolute'}
                    key={index}
                    initial={{y: 20, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    exit={{y: -20, opacity: 0}}
                    transition={{
                        y: {type: "spring", stiffness: 350, damping: 40},
                        opacity: {duration: .4}
                    }}
                >
                    {texts[index]}
                </motion.div>
            </AnimatePresence>
        </div>

    );
};
