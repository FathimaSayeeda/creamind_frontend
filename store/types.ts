export interface Author {
  slug: string
  title: string
}

export interface Publisher {
  title: string
  slug: string
}

export interface AgeGroup {
  title: string
  slug: string
}

export interface BookCategory {
  title: string
  slug: string
}

export interface BookNode {
  title: string
  is_featured: boolean
  sub_title: string
  title_image: string
  author: Author
  publisher: Publisher
  slug: string
}

export interface Book extends BookNode {
  description: string
  categories: BookCategory[]
  age_groups: AgeGroup[]
  author: Author
}
