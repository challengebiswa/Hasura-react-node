import { gql } from "@apollo/client";

export const GET_AIRPORT = gql`
  query GetAirport {
    airport {
      id
      code
      name
    }
  }
`;