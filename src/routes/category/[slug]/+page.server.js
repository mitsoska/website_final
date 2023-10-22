import get_posts from '$lib/get_posts.js'

export const load = async ( {params} ) => {

  const category = params.slug;

  const options = {category, limit: -1};

  const { posts } = await get_posts(options);

  return {
    posts,
    category,
    total: posts.length

  }
  

} 
