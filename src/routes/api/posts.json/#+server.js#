import fetch_posts from '$lib/get_posts.js'
import { json } from '@sveltejs/kit'

export const GET = async () => {
  const options = {
    limit: 10
  }

  // Fetching the posts and parsing them into json
  const { posts } = await fetch_posts(options);

  return json(posts);
}
