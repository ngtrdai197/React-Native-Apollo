import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { ApolloProvider } from "@apollo/react-hooks";
import { AppRegistry } from "react-native";
import ApolloClient, { InMemoryCache } from "apollo-boost";
import { User } from "./screens/User";

const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5ndXllbmxvYyIsImZ1bGxOYW1lIjoiTmd1eWVuIER1YyBMb2MiLCJpYXQiOjE1ODE1MjI3ODIsImV4cCI6MTU4MTYwOTE4Mn0.TSYNaAjlDFC0-F3j37ewAkWpc8jqvfl4YTF4Gjl9MMY`;

/**
 * cấu hình uri theo địa chỉ ip
 * => trùng với địa chỉ ip mà expo đang run app
 */

const client = new ApolloClient({
  uri: "http://192.168.1.235:3000/graphql",
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${token}`
  }
});
export default function App() {
  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        <Text>Test 123</Text>
        <User></User>
      </View>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
AppRegistry.registerComponent("MyApp", () => App);
