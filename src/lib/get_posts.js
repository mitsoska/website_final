// Offset limit and category are the parameters of the function, and they also have default values
const fetch_posts = async ({ offset = 0, limit = 10, category = ''} = {}) => {

  // Object.entries returns the key-value pairs of the import.meta.glob. Import.meta.glob -> key represents the path of the module, and its value corresponds to a function that returns a promise for the module.
  const posts = await Promise.all(Object.entries(import.meta.glob('/src/posts/*.svx')).map( async ([path, resolver]) => {

    // Extracting the metadata property that the object which resolver returned has.
    const { metadata } = await resolver();

    // The path is broken down into many segments. We only keep the last on and cut its .md extention
    const slug = path.split('/').pop().slice(0, -4);

    // Returning a newly created object. So we just formatted the posts in a better manner.
    return {...metadata, slug};
  })
				 )

  // Sorting the posts data-wise
  let sorted_posts = posts.sort( (a, b) => new Date(b.date) - new Date(a.date));


  // If you provided the parameter for category, then you just want to see these posts
  if (category) {
    // Check if each posts has that category
    sorted_posts = sorted_posts.filter(post => post.categories.includes(category));
  }

  if (offset) {
    sorted_posts = sorted_posts.slice(offset);
  }

  if (limit && limit < sorted_posts.length && limit > 0) {
    sorted_posts = sorted_posts.slice(0, limit);
  }

  sorted_posts = sorted_posts.map( post => ({

    title: post.title,
    description: post.description,
    slug: post.slug,
    categories: post.categories,
    date: post.date,
  }))

  return {
    posts: sorted_posts
  }

}

export default fetch_posts
