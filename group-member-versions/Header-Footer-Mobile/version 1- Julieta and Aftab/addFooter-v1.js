/*  version : 1
    authour: Julieta and Aftab
*/

addFooter();

function addFooter() {
    fetch('components/footer.html')
        .then(response => response.text())
        .then(text => document.getElementById('footer').innerHTML = text);
}
