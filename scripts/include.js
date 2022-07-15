(() => {
    const includes = document.getElementsByTagName('include');
    [].forEach.call(includes, i => {
        let filePath = i.getAttribute('src');
        // let curFile =  '.'.concat(i.dataset.curFile);
        fetch(filePath).then(file => {
            file.text().then(content => {
                i.insertAdjacentHTML('afterend', content);
                i.remove();
            });
        });
    });
})();