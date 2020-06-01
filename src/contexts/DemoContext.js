import React, {useState} from "react";

export const DemoContext = React.createContext();

export function DemoProvider(props) {
    const { children } = props;
    const [user, setUser] = useState({displayName: 'KhoiPN'});

    function doSomething() {
        // do something
        console.log("Do something");
    }

    const store = {
        user,
        doSomething
    }

    return (
        <DemoContext.Provider value={store}>
            {children}
        </DemoContext.Provider>
    );
}