export const load = async ( {url, fetch} ) => {

  const res = await fetch(`${url.origin}/api/posts.json`);
  let posts = await res.json();

  console.log("Testing...");
  console.log(posts);
  
  console.log(posts.categories);
  
  let unique_categories = {};

  posts.forEach( post => {
    post.categories.forEach( category => {
      if(unique_categories.hasOwnProperty(category)) {
	unique_categories[category].count += 1;

      } else {
	unique_categories[category] = {
	  title: category,
	  count: 1
	}

      }

    })


  })

  const sorted_unique_categories = Object.values(unique_categories).sort( (a, b) => a.title > b.title)

  return {
    unique_categories: sorted_unique_categories
  }
  
}
