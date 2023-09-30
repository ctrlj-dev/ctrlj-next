import fetchAPI from '../utils/api';
import { GetAllPages } from '../queries/queries.graphql';
import { print } from 'graphql/language/printer';

async function getAllPages() {
  const parseQuery = print(GetAllPages);
  const data = await fetchAPI(parseQuery);
  return data.pages.edges;
}

export { getAllPages };
