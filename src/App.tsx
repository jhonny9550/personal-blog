import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/Routes";
import { ApolloProvider } from "@apollo/client";
import GraphQLClient from "./graphql/client";
import UserProvider from "./contexts/user.context";

const App = () => (
  <ApolloProvider client={GraphQLClient}>
    <UserProvider>
      <Router>
        <Routes />
      </Router>
    </UserProvider>
  </ApolloProvider>
);

export default App;
