import { client } from "./sanity";

export async function getPortfolios() {
  const query: string = `*[_type == "portfolio"] {
            _id,
            title,
            slug,
            tags,
            titleImage,
            content,
            order,
            images,
            public
          }`;

  // @ts-ignore
  const data = await client.fetch(query);

  return data;
}

export async function getPortfolio(slug: string) {
  const query = `*[_type == 'portfolio' && slug.current == '${slug}'] {
    _id,
    title,
    slug,
    tags,
    titleImage,
    content,
    images,
    public
  }`;

  // @ts-ignore
  const data = await client.fetch(query);

  return data;
}
