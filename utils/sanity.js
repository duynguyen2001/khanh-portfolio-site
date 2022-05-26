import client from '../client';

export async function fetchSanityClient(query, params = {}) {
  const posts = await client.fetch(query, params);
  return posts;
}
