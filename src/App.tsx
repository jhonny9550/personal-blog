import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/Routes";
import { ApolloProvider } from "@apollo/client";
import GraphQLClient from "./graphql/client";
import UserProvider from "./contexts/user.context";
import Onboarding from "./pages/Onboarding";

const App = () => (
  <ApolloProvider client={GraphQLClient}>
    <UserProvider>
      <Onboarding>
        <Router>
          <Routes />
        </Router>
      </Onboarding>
    </UserProvider>
  </ApolloProvider>
);

export default App;
