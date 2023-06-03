interface Pagination<T> {
  limit: T
  page: T
}

export const getPaginationOptions = ({ limit, page }: Pagination<any>) => {
  const newLimit = Number(limit)
  const skip = (Number(page) - 1) * Number(limit)

  return {
    limit: newLimit,
    skip,
  }
}
