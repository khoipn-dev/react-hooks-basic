import React, {useContext} from 'react';
import { DemoContext, DemoProvider} from "./DemoContext";

function DemoUseContext(props) {
    const { user, doSomething } = useContext(DemoContext);

    return (
        <div onClick={doSomething}>Username: {user.displayName}</div>
    );
}

export default DemoUseContext;