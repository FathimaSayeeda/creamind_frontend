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
    Books(first: 999999) {
      edges {
        node {
          name
        }
      }
    }
  }
  `
  const json_gql = {
    query,
  }
  const r = await axios.post(`${process.env.THECREAMIND_API}/api/method/graphql`, json_gql)
  console.log(r.data)
  return r.data.data.Books.edges.map((x: {node: {name: string }}) => x.node.name)
}

// async function test() {
//   console.log(await getAllBooks())
// }

// test()
