interface User {
  id: number
  name: string
  email: string
  age: number
}

export function extractEmails(users: (User | null | undefined)[]): string[] {
  const uniqueEmails = new Set<string>()

  if (users && Array.isArray(users)) {
    for (const user of users) {
      if (user && user.email) {
        uniqueEmails.add(user.email)
      }
    }
  }

  return Array.from(uniqueEmails)
}
