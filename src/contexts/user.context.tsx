import { useApolloClient } from "@apollo/client";
import React, { useState, useContext, createContext, useEffect } from "react";
import { GET_USER } from "../graphql/queries/user";
import User from "../interfaces/user.interface";
import Splash from "../pages/Splash";
import { decodeAuthToken, getAuthHeader } from "../utils/security";

export const UserContext = createContext<User | null>(null);
export const useUserContext = () => useContext(UserContext);

const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const GraphQLClient = useApolloClient();

  useEffect(() => {
    (async () => {
      const localUser = decodeAuthToken();
      if (!localUser) return setLoading(false);
      const Authorization = getAuthHeader();
      const { data } = await GraphQLClient.query({
        query: GET_USER,
        context: { headers: { Authorization } },
        variables: { userID: localUser.id },
      });
      console.log("Data: ", data);
      if (data?.user.success) {
        setUser(data.user.user);
      }
      setLoading(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return loading ? (
    <Splash />
  ) : (
    <UserContext.Provider value={user}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
