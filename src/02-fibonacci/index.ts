export function fibonacci(n: number): number[] {
  if (n <= 0) {
    return []
  } else if (n === 1) {
    return [0]
  }

  const sequence: number[] = [0, 1]

  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2])
  }

  return sequence
}
