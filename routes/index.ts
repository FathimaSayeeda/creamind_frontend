import axios from "axios";

export async function getRoutes(...args: any[]) {
  const routes: String[] = ['/', '/books']
  const books = await getAllBooks()

  routes.push(...books.map((x) => '/book/' + x))
  return routes
}

async function getAllBooks(): Promise<string[]> {
  const query = `
  {
    Books(first: 9999999) {
      edges {
        node {
          name
          slug
        }
      }
    }
  }
  `
  const json_gql = {
    query,
  }
  console.info("Invoking ", `${process.env.THECREAMIND_API}/api/method/graphql`)
  const r = await axios.post(`${process.env.THECREAMIND_API}/api/method/graphql`, json_gql)
  const cursor_edges = r.data.data.Books.edges;
  console.info("Got", cursor_edges.length, "Books")
  return cursor_edges.map((x: {node: {slug: string }}) => x.node.slug)
}
