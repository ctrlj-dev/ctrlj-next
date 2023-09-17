const API_URL = process.env.WORDPRESS_API_URL;

async function fetchAPI(query = '', { variables }: Record<string, any> = {}) {
  const headers = { 'Content-Type': 'application/json' };

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers['Authorization'] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
  }

  // WPGraphQL Plugin must be enabled
  const res = await fetch(API_URL, {
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
    throw new Error('Failed to fetch API');
  }
  return json.data;
}

export async function getPageData() {
  const data = await fetchAPI(`
    query pages {
  pages {
    edges {
      node {
        title
        content
      }
    }
  }
}`);
  return data.pages.edges;
}

export async function getPageBySlug(uri: string) {
  const data = await fetchAPI(
    `
query PageBySlug($uri: String!) {
  pageBy(uri: $uri) {
    title
    content
    databaseId
  }
}`,
    {
      variables: { uri },
    },
  );
  return data.pageBy;
}
