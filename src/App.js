import React, { useState, useContext } from 'react';
import './App.css';
import List from './components/List';
import { Store } from './components/Store';

function App() {


    const { data, setData, refreshPage } = useContext(Store)


    return (
        <main className="app">
            <section className="container">
                <h1>{data.length} Bithdays today</h1>
                <img onClick={() => refreshPage()} className="refresh" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Ic_refresh_48px.svg/2048px-Ic_refresh_48px.svg.png" alt="" />
                <List />
                <button onClick={() => setData([])}>Clear all</button>
            </section>
        </main>
    );
}

export default App;
