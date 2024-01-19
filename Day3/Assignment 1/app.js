function getRandomColor () {
    return '#'+Math.floor(Math.random()*16777215).toString(16)
}
function changeBackgroundColor () {
    let color = getRandomColor()
    document.body.style.backgroundColor=color;
}
document.onclick = changeBackgroundColor;