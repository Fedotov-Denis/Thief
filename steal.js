const steal = (capacity, balls) => {
    const stolenBalls = []

    if (ballsSum(balls) < capacity) return balls
    if (capacity <= 0 || balls.length <= 0) return []

    const proportion = Math.round(ballsSum(balls) / capacity)
    balls.forEach((ball, index) => {
        stolenBalls.push(Math.floor(ball / proportion))
        balls[index] -= Math.floor(ball / proportion)
    })

    if (ballsSum(stolenBalls) === capacity) return stolenBalls

    let index  = 0
    while (ballsSum(stolenBalls) < capacity) {
        if (balls[index]) {
            stolenBalls[index]++
            balls[index]--
        } 
        if (index < balls.length - 1) index++
        else index = 0
    }

    return stolenBalls
}

const ballsSum = (balls) => {
    if (!balls.length) return 0
    return balls.reduce((accum, current) => accum + current)
}

console.log(steal(12, [20, 10, 30])) //[4, 2, 6]
console.log(steal(32, [10, 50, 100])) //[2, 10, 20]
console.log(steal(20, [10, 50, 100])) //[2, 6, 12]
console.log(steal(5, [6, 3, 7])) //[2, 1, 2]
console.log(steal(15, [10, 20, 30, 40, 50])) //[1, 2, 3, 4, 5]
console.log(steal(100, [1, 1, 1])) //[1, 1, 1]
console.log(steal(0, [1, 1, 1])) //[]
console.log(steal(100, [])) //[]
console.log(steal(40, [65, 43, 87, 33, 12, 23])) //[10, 7, 13, 5, 2, 3]
console.log(steal(40, [65, 43, 87, 33, 12, 1])) //[11, 8, 14, 5, 2, 0]