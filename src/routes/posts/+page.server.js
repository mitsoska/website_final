export const load = async ({url, fetch}) => {
  const pre_posts = await fetch(`${url.origin}/api/posts.json`);
  const posts = await pre_posts.json();

  // Sending the posts to the other file in this directory
  return {posts};
}
