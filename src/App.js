import logo from './logo.svg';
import './App.css';
import Tasks from "./Tasks";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://hasura.gettrip.guru/v1/graphql",
  headers:
    { "x-hasura-admin-secret": 12344321 },
  cache: new InMemoryCache(),
});
function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <br />
        <Tasks />
      </div>
    </ApolloProvider>
  );
}

export default App;
