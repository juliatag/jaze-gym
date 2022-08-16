/*  version : 2
    authour: Julieta and Aftab
*/

    fetch('components/footer.html')
        .then(response => response.text())
        .then(text => document.getElementById('footer').innerHTML = text);
