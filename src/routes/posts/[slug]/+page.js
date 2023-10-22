export const load = async ( {params} ) => {

  const post = await import(`../../../posts/${params.slug}.svx`)

  return {
    post_content: post.default,
    meta: {...post.metadata, slug: params.post}
  }
  

}

