export type ButtonLinkOptions = {
  href: string
  name: string
  description: string
}

export type NavLink = {
  route: string
  name: string
  newPage?: boolean
}

export type NavigationLinkOptions = {
  links: NavLink[]
}
