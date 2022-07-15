//Show or hide the selected/unselected tabs (equipment.html)
const tabs = document.querySelectorAll('.filters li');
const tabContentBoxes = document.querySelectorAll('#items > div');

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        tabs.forEach(item => item.classList.remove('is-active', 'has-text-weight-semibold'));
        tab.classList.add('is-active', 'has-text-weight-semibold');

        const target = tab.dataset.target;



        tabContentBoxes.forEach(box => {

            if(box.classList.contains(target)) {
                box.classList.remove('is-hidden');
            } else {
                box.classList.add('is-hidden');
            }


        })




    })
});