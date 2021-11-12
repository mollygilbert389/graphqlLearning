import { gql } from "@apollo/client";

export const mollyBookQuery = gql `
    query mySpecialQuery {
        books {
            _id
            title
            author
            pages
        }
    }
`;