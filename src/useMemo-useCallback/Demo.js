import React, {useState, useMemo, useCallback} from 'react';

function Demo(props) {
    const [state, changeState] = useState({});
    // memoized value Math.random
    const memoizedValue = useMemo(() => Math.random(), []);
    const memoizedCallback = useCallback(() => console.log(memoizedValue), []);
    const unMemoizedCallback = () => console.log(memoizedValue);
    const {prevMemoizedCallback, prevUnMemoizedCallback} = state;
    return (
        <>
            <p>Memoized value: {memoizedValue}</p>
            <p>New update {Math.random()}</p>
            <p>is prevMemoizedCallback === to memoizedCallback: { String(prevMemoizedCallback === memoizedCallback)}</p>
            <p>is prevUnMemoizedCallback === to unMemoizedCallback: { String(prevUnMemoizedCallback === unMemoizedCallback) }</p>
            <p><button onClick={memoizedCallback}>memoizedCallback</button></p>
            <p><button onClick={unMemoizedCallback}>unMemoizedCallback</button></p>
            <p><button onClick={() => changeState({ prevMemoizedCallback: memoizedCallback, prevUnMemoizedCallback: unMemoizedCallback })}>update State</button></p>
        </>
    );
}

export default Demo;