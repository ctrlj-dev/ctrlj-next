import fetchAPI from '../../utils/api';
import { GET_PAGE_BY_SLUG, GET_ALL_PAGES_QUERY } from './queries';

async function getPageBySlug(uri: string) {
  const data = await fetchAPI(GET_PAGE_BY_SLUG, { uri });
  return data.pageBy;
}

async function getAllPages() {
  const data = await fetchAPI(GET_ALL_PAGES_QUERY);
  return data.pages.edges;
}

export { getAllPages, getPageBySlug };
