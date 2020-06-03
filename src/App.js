import React from 'react';
import './App.scss';
import Post from "./useEffect/Post";
import Clock from "./useEffect/Clock";
import ClockHooks from "./customHooks/ClockHooks";
import Counter from "./React.memo/Counter";
import {DemoProvider} from "./contexts/DemoContext";
import DemoUseContext from "./contexts/DemoUseContext";
import DemoUseAuth from "./useReducer/DemoUseAuth";
import {AuthProvider} from "./useReducer/AuthContext";
import Demo from "./useMemo-useCallback/Demo";
import DemoUseFormValidation from "./customHooks/DemoUseFormValidation";

function App() {

    return (
        <div className="App">
            {/*<Post />*/}
            {/*<Clock />*/}
            {/*<ClockHooks />*/}
            {/*<Counter/>*/}
            {/*<DemoProvider>*/}
            {/*    <DemoUseContext/>*/}
            {/*</DemoProvider>*/}
            {/*<AuthProvider>*/}
            {/*    <DemoUseAuth />*/}
            {/*</AuthProvider>*/}
            {/*<Demo />*/}
            <DemoUseFormValidation />
        </div>
    );
}

export default App;
