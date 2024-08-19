export interface RepositoryOwner {
  login: string
  id: string
  url: string
  avatar_url: string
}

export interface Repositories {
  id: string
  name: string
  description: string
  language: string
  html_url: string
  homepage?: string
  topics: string[]
  fork: boolean
  owner: RepositoryOwner
}
