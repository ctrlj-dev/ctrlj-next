import { API_URL, ApiNotDefinedError, FailedToFetchError } from '@/lib/constants';
import { DocumentNode } from 'graphql/language/ast';

async function fetchAPI(query: DocumentNode | string, { variables }: Record<string, any> = {}) {
  let headers = { 'Content-Type': 'application/json' };

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers = {
      ...{ Authorization: `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`, ...headers },
    };
  }


  // WPGraphQL Plugin must be enabled in the WORDPRESS CMS
  if (API_URL) {
    const res: Response = await fetch(API_URL, {
      headers,
      method: 'POST',
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    const json = await res.json();
    if (json.errors) {
      console.error(json.errors);
      throw new Error(FailedToFetchError);
    }
    return json.data;
  }
  return ApiNotDefinedError;
}

export default fetchAPI;
