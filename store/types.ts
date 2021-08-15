export interface BaseNode {
  name: string
  slug: string
  title: string
}

export interface Author extends BaseNode {}

export interface Publisher extends BaseNode {}

export interface AgeGroup extends BaseNode {}

export interface BookCategory extends BaseNode {}

export interface BookSeries extends BaseNode {}

export interface BookNode extends BaseNode {
  // title: string
  // slug: string
  is_featured: boolean
  sub_title: string
  title_image: string
  author: Author
  publisher: Publisher
}

export interface Book extends BookNode {
  description: string
  categories: BookCategory[]
  age_groups: AgeGroup[]
  author: Author
}
