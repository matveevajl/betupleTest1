import React from 'react';

import Days from "./Days";

const App = () => (
    <>
        <header></header>
        <section className="dashboard">
            <section className="calendar">
                <Days/>
                <p>My tasks</p>
            </section>
        </section>
    </>
);

export default App;