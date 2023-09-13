// let current = document.querySelector(`.current`)

// let nextSibling = current.nextElementSibling

// while(nextSibling) {
//     nextSibling = nextSibling.nextElementSibling
// }

// let prevSibling = currentNode.previousElementSibling


let getSibling = function(e) {
    let sibling = []
    if(!e.parentNode) {
        return sibling
    }
    let sibling = e.parentNode.firstChild

    while(sibling) {
        if(sibling.nodeType == 1 && sibling !== e) {
        sibling.push(sibling)
        }
        sibling = sibling // not complete
    }
    return // not complete
}