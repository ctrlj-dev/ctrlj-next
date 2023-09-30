import fetchAPI from '../utils/api';
import { GetAllPages } from '../queries/queries.graphql';
import { print } from 'graphql/language/printer';
import { GetAllPagesQuery, Page } from '@/@types/global.ts/graphql';
import { pagesResponseToPages } from '../mappers/pages';

async function getAllPages(): Promise<Page[]> {
  const parseQuery = print(GetAllPages);
  const response: GetAllPagesQuery = await fetchAPI(parseQuery);
  return pagesResponseToPages(response);
}

export { getAllPages };
