//todo list
//  1. create canvas contacts
//  2. create and draw ball
//  3. create paddle
//  4. create bricks
//  5. score window
//  6. add update function 
//  7. rules functions
//  8. rules for aminaton
//  9. move paddle
// 10. keyboard event woth the paddle
// 11. moving ball
// 12. setup wall bounderies
// 13. score upadates
// 14. When ball breaks ghe brick (remove)
// 15. lose - reduce the bricks and rest the score.
// 16. 3D but only for sam.....

// anchor DOM selectors
const rulesBTN = document.getElementById('rules-btn')
const closeBtn = document.getElementById('close-btn')
const rules = document.getElementById('rules')

// anchor Canvas DOM selector
const canvas = document.getElementById('canvas')

let score = 0 // setting up score

const brickRowCount = 9 
const brickColumnCount = 5

// create ball
const ball = {
    x: canvas.width / 2, // start displaying score board to zero
    y: canvas.height / 2, // start displaying in middle of screen
    size: 30,
    speed 4, // animation speed props
    dx: 4, // animation direction 
    dy: -4 // animation direction woth (-) so it does not move down the buttom line of our screens 
}
// create paddle
const paddle = {
    const paddle = {
        x: canvas.width / 2 -40, // we are taking half wodth of the paddle 
        y: canvas/height -20 // counter this paddle in the middle
        w: 80,
        h:10,
        speed: 8,
        dx: 0 // Only moving on the x axis 
    }
}
// create brick
const brickInfo = {
    w: 70,  // bricks will share the same props
    h: 20,
    padding: 10,
    offsetX: 45,
    offsetY: 60,
    visible: true
}
// create brick array
const bricks = [] // init brick array
for(let i = 0, i < brickRowCount; i ++) {
    brick[i]= []    // set the row bricks iteration to an empty array 
    for(let j = 0; j < brickColumnCount; j++) { // loop through the array column
    coust x = i * {brickInfo.w + brickInfo.padding} + brickInfo.offsetx // i is the row iteration for each brick
    const y = j * {brickIfo.h + brickInfo.padding} + brickInfo.offsety // looping and setting/getting position
    bricks[i][j] = {x,y, ---brickInfo} // copy and take the array 2D and give it the object value of x,y,
    }
}

console.log(bricks) 
 
// Create and draw the ball on the canvas
function drawball() {
    ctx.beginPath() // creating a path  
    ctx.arc(ball.x, ball.y, ball.size 0, math.PI * 2) // draw an arc to build a ball 
    ctx.fillStyle = 'color' // style the ball arc prop
    ctx.fill()
    ctx.closePath()
}

// create anf drew paddle on canvas
function drawPaddle() {
    ctx.beginPath()
    ctx.rect(paddle.x, paddle.y, paddle.w, paddle.h)
    ctx.fillstyle = '' // ??
    ctx.fill()
    ctx.closePath()
}
// draw and design the score board
function drawScore() {
    ctx.font = '20px Ariel'
    ctx.fillText('score: ${score}', canvas.width - 100, 30)
}
// bricks design on rhe canvas
function drawBricks() {
    bricks.forEach(column => {
        column.forEach(brick => {
            ctx.beginPath()
            ctx.rect(brick.w, brick.y, brick.w, brick.h)
            ctx.fillStyle = brick.visible ? '// ??' : transparent'  // conditonal 
            ctx.fill()
            ctx.closePath()
        })
    })
}
// move the paddle to canvas
function movePaddle(){ // every time you start p;aying on the canvas
    paddle.x += paddle.dx // paddle will move untill we use the kwyboard
    // wall setection
    if(paddle.x + paddle.w > canvas.width) {
        paddle.x = canvas.width - paddle.w
    }
    if(paddle.x < 0) {  // 0 from the x axis and this is for the game boarders detection
        paddle.x = 0
    }
}

// moving the ball in the canvas
function moveBall() {
    ball.x += ball.dx // append the ball ON X AXIS
    ball.y += ball.dy // append the ball on y axis
}
// wall collision (right/left)
if(ball.x = ball.size > canvas.height || ball.y - ball.size < 0) {// right and left walls
    ball.dx *= -1 // the reason we are doing this statement is to revearse the ball to go the other way
}
// wall collision (top/bottom)
if(ball.y + ball.size > canvas.height || ball.y - ball.size < 0) { // top and bottom walls
    ball.dx *= -1
}
// paddle collision
if (
    ball.x - ball.size > paddle.x && // checking tthe left side of my canvas
    ball.x - ball.size < paddle.x + paddle.x && //  checking the right side of canvas
    ball.y + ball.size > paddle.y 
) {
    ball.dy = -ball.speed // reverse the ball object and bounce off the paddle with same speed
}

// brick collision
brick.forEach(column => { //loop brick array
    column.forEach(brick => {
        if(brick.visible){ //make sure the brick are visible
        if(
            ball.x - ball.size > brick.x && // change the left side bricks
            ball.x - ball.size < brick.x + brick.x && // right brick check
            ball.y - ball.size > brick.y && // top brick is checked
            ball.y - ball.size < brick.y + brick.h // bottom brick side is checked
        )
        }
    })
})


