import fetchAPI from '../utils/api';
import { GetAllPages } from '../queries/queries.graphql';
import { print } from 'graphql/language/printer';
import { GetAllPagesQuery, Page } from '@/@types/global.ts/graphql';
import { pagesResponseToPages } from '../mappers/pages';

type PageQuery = {
  __typename?: 'Page' | undefined;
  title?: string | null | undefined;
  slug?: string | null | undefined;
  content?: string | null | undefined;
};

async function getAllPages(): Promise<PageQuery[]> {
  const parseQuery = print(GetAllPages);
  const response: GetAllPagesQuery = await fetchAPI(parseQuery);
  return pagesResponseToPages(response);
}

export { getAllPages };
