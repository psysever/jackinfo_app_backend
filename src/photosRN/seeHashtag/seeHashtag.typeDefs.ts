import { gql } from "apollo-server";

export default gql`
  type Query {
    SeeHashtagRN(hashtag: String!): Hashtag
  }
`;