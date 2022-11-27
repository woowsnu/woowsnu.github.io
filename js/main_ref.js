const $backToTop = document.getElementById('backtotop');

function checkScroll() {
    /**
     * 웹 페이지가 얼마나 스크롤되어 있는지
     * pageYOffset
     */
    let pageYOffset = window.pageYOffset;

    if (pageYOffset !== 0) {
        $backToTop.classList.add('show');
    } else {
        $backToTop.classList.remove('show');
    }
}

function moveBackToTop() {
    if(window.pageYOffset > 0) {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }
}

window.addEventListener('scroll', checkScroll);
$backToTop.addEventListener('click', moveBackToTop);