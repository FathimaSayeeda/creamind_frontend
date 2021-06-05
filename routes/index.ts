export async function getRoutes() {
  const routes: String[] = ['/', '/books']
  const books = await getAllBooks()

  routes.push(...books.map((x) => '/book/' + x))
  return routes
}

async function getAllBooks() {
  return ['Book A']
}
