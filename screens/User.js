import React from "react";
import { View, Text } from "react-native";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const CONVERSATION_QUERY = gql`
  query conversationQuery($id: String!) {
    conversation: conversationById(id: $id) {
      name
      participants {
        id
        fullName
      }
    }
  }
`;
export const User = () => {
  const loadUsers = () => {
    const { loading, error, data } = useQuery(CONVERSATION_QUERY, {
      variables: { id: "5e3ec92741c4bb2a50d10772" }
    });
    console.log("data", data);
    const { conversation } = data;
    if (loading)
      return (
        <View>
          <Text>Loading ...</Text>
        </View>
      );
    return (
      <View>
        <Text>Conversation: {conversation.name}</Text>
        {conversation.participants.map(rec => (
          <View key={rec.id}>
            <Text>{rec.fullName}</Text>
          </View>
        ))}
      </View>
    );
  };
  return <View>{loadUsers()}</View>;
};
