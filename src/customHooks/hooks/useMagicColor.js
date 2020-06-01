import {useEffect, useRef, useState} from "react";

function randomColor(currentColor) {
    const LIST_COLOR = ['red', 'green', 'blue', 'yellow'];
    let currentIndex = LIST_COLOR.indexOf(currentColor);
    let nextIndex = currentIndex;

    while (currentIndex === nextIndex) {
        nextIndex = Math.trunc(Math.random() * 4);
    }

    return LIST_COLOR[nextIndex];
}
function useMagicColor(props) {
    const [color, setColor] = useState('transparent');
    const colorRef = useRef('transparent');

    useEffect(()=> {
        const colorInterval = setInterval(()=> {
            let currentColor = colorRef.current;
            let nextColor = randomColor(currentColor);
            setColor(nextColor);
            colorRef.current = nextColor;
        }, 1000);

        return () => {
            clearInterval(colorInterval);
        }
    }, []);

    return color;
}

export default useMagicColor;