import { Repositories } from '@/types'

export const getRepositories = async () => {
  const response = await fetch(
    'https://api.github.com/users/hvtienprotv84/repos',
    { next: { revalidate: 24 * 60 * 60 } },
  )
  if (!response.ok) throw new Error('Error fetching repositories.')

  const data: Repositories[] = await response.json()
  const filter = (repo: Repositories) =>
    !repo.fork && repo.name !== repo.owner.login
  return data?.filter(filter)
}
