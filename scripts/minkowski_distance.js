const minkowski = (Z, lambda) => {
    let sum = 0
    for (let i = 0; i < Z.length; ++i) {
        sum += Math.pow(Math.abs((Z[i].x - Z[i].y)), lambda)
    }
    return Math.pow(sum, (1 / lambda))
}

const X = [4, 5, 9]
const Y = [3, 7, 10]
const Z = X.map((x, i) => ({
    x: X[i],
    y: Y[i]
}))
const lambdas = [1, 2, 3]

console.log(lambdas.map(l => minkowski(Z, l)))