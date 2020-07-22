import React from 'react';
import Main from "./components/Main";
import Nav from "./components/Nav";

function App() {
    return (
        <div className="h-screen w-full flex overflow-hidden select-none">
            <Nav/>
            <main
                className="my-1 pt-2 pb-2 px-10 flex-1 bg-gray-200 dark:bg-black rounded-l-lg
    transition duration-500 ease-in-out overflow-y-auto">
                <Main/>
            </main>
        </div>
    );
}

export default App;
