import React from "react";
import {render} from "react-dom";


import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
} from "@apollo/client";

import * as serviceWorker from './serviceWorker';
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import './assets/main.css'


const client = new ApolloClient({
    uri: "https://api.spacex.land/graphql/",
    cache: new InMemoryCache()
});
//
// function ExchangeRates() {
//     const {loading, error, data} = useQuery(gql`
//     {
//       rates(currency: "USD") {
//         currency
//         rate
//       }
//     }
//   `);
//
//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>Error :(</p>;
//
//     // @ts-ignore
//     return data.rates.map(({currency, rate}) => (
//         <div key={currency}>
//             <p>
//                 {currency}: {rate}
//             </p>
//         </div>
//     ));
// }

console.log(process.env.PUBLIC_URL);

render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <App/>
            </BrowserRouter>
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
