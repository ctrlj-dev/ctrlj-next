import { gql } from 'graphql-tag';

const GET_ALL_PAGES_QUERY = gql`
  query pages {
    edges {
      node {
        title
        content
      }
    }
  }
`;

const GET_PAGE_BY_SLUG = gql`
  query PageBySlug($uri: String!) {
    pageBy(uri: $uri) {
      title
      content
      databaseId
    }, {variables : { uri }}
  }
`;

export { GET_ALL_PAGES_QUERY, GET_PAGE_BY_SLUG };
