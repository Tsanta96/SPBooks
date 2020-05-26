import React from "react";
import { Provider } from "react-redux"; //Provides access to the store to all components wrapped inside the Provider

import App from "./App";

const Root = ({ store }) => (
    <Provider store={store}>
        <App />
    </Provider>
);

export default Root;
