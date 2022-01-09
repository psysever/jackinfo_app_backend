import { gql } from "apollo-server";

export default gql`
  type Query {
    SeeHashtagRJ(hashtag: String!): Hashtag
  }
`;