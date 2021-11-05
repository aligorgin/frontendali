import {useEffect, useState} from "react";

function useDelayedMessage(message: string | any[], timeoutMs: number | undefined, initialDelay: number | undefined) {
    const [length, setLength] = useState(0);
    useEffect(() => {
        if (length >= message.length) {
            return;
        }
        const timeout = setTimeout(
            () => {
                setLength((length) => length + 1)
            },
            length === 0 ? initialDelay : timeoutMs
        );
        return () => clearTimeout(timeout)
    }, [length]);

    return message.slice(0,length);
}

export default useDelayedMessage;