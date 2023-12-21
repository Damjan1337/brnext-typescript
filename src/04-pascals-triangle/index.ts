export function getPascalsTriangleRow(rowIndex: number): number[] {
  if (rowIndex < 0) {
    throw new Error('Row index must be non-negative')
  }

  const row: number[] = []

  for (let i = 0; i <= rowIndex; i++) {
    row.push(binomialCoefficient(rowIndex, i))
  }

  return row
}

// Helper function to calculate binomial coefficient C(n, k)
function binomialCoefficient(n: number, k: number): number {
  if (k === 0 || k === n) {
    return 1
  }

  let result = 1
  for (let i = 1; i <= k; i++) {
    result *= (n - i + 1) / i
  }

  return Math.round(result)
}
