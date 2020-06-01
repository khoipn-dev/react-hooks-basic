import React, {useState} from 'react';
import Hero from "../Hero";

function Counter(props) {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>{count}</p>
            <button
                onClick={() => { setCount(count + 1) }}
            >Increase</button>
            <Hero name="KhoiPN"/>
        </div>
    );
}

export default Counter;