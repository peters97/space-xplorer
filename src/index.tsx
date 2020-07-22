import React from "react";
import {render} from "react-dom";
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
} from "@apollo/client";

import * as serviceWorker from './serviceWorker';


const client = new ApolloClient({
    uri: "https://48p1r2roz4.sse.codesandbox.io",
    cache: new InMemoryCache()
});

function ExchangeRates() {
    const {loading, error, data} = useQuery(gql`
    {
      rates(currency: "USD") {
        currency
        rate
      }
    }
  `);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    // @ts-ignore
    return data.rates.map(({currency, rate}) => (
        <div key={currency}>
            <p>
                {currency}: {rate}
            </p>
        </div>
    ));
}

render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <div>
                <h2>My first Apollo app 🚀</h2>
            </div>
            <ExchangeRates/>
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
