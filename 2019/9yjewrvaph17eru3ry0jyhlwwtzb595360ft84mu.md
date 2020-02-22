Let `x` be an array with length `n`, and `m` be the count of subarrays of `x`.

`C(n, 2) ≈ m ≈ n²`

Intuitively remember that `m > C(n, 2)` because `m` counts subarrays of length `0, 1, ..., n` whereas `C(n, 2)` counts the 2-combinations of `x` only.