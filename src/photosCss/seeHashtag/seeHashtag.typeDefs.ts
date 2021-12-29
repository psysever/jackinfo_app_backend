import { gql } from "apollo-server";

export default gql`
  type Query {
    cssSeeHashtag(hashtag: String!): Hashtag
  }
`;