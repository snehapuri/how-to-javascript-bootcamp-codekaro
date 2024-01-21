const names = [ "Aarav", "Sanya", "Vikram", "Neha", "Rohan", "Priya", "Amit", "Meera", "Rajiv", "Ananya" ];
let current = names[0];
function display () {
    document.getElementById('show-name').innerText=names[current];
}
function NextName () {
    current = (current+1)%names.length;
    display();
}
function PrevName () {
    current = (current-1 +names.length) %names.length;
    display();
}
display();