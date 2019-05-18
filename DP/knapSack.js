function knapSack(capacity, weights, values, n) {
    let i, w, a, b, kS = []

    // 初始化矩阵
    for (i = 0; i <= n; i++) {
        kS[i] = []
    }

    for (let i = 0; i <= n; i++) {
        for (w = 0; w <= capacity; w++) {
            if (i === 0 || w === 0) {
                kS[i][w] = 0
            } else if (weights[i - 1] <= w) {
                a = values[i - 1] + kS[i - 1][w - weights[i - 1]]
                b = kS[i - 1][w]
                kS[i][w] = (a > b) ? a : b
            } else {
                kS[i][w] = kS[i - 1][w]
            }
        }
    }
    return kS[n][capacity]
}

let values = [3, 4, 5]
let weights = [2, 3, 4]
let capacity = 5
let n = values.length
let result = knapSack(capacity, weights, values, n)
console.log(result)
