const web = document.querySelector('.our__work__examples__nav__link-web');
const mobile = document.querySelector('.our__work__examples__nav__link-mobile');
const photo = document.querySelector('.our__work__examples__nav__link-photo');
const all = document.querySelector('.our__work__examples__nav__link-all');

const webDesign = document.querySelector('.our__work__examples--item__website');
const mobileDesign = document.querySelector('.our__work__examples--item__mobile');
const photograpy = document.querySelector('.our__work__examples--item__photograpy');

web.addEventListener('click', (e) => {
    e.preventDefault();
    mobileDesign.style.display = 'none';
    photograpy.style.display = 'none';
    if(webDesign.style.display == 'none') {
        webDesign.style.display = 'flex';
    }
});

mobile.addEventListener('click', (e) => {
    e.preventDefault();
    webDesign.style.display = 'none';
    photograpy.style.display = 'none';
    if(mobileDesign.style.display == 'none') {
        mobileDesign.style.display = 'flex';
    }
});

photo.addEventListener('click', (e) => {
    e.preventDefault();
    webDesign.style.display = 'none';
    mobileDesign.style.display = 'none';
    if(photograpy.style.display == 'none') {
        photograpy.style.display = 'flex';
    }
});

all.addEventListener('click', (e) => {
    e.preventDefault();
    if(photograpy.style.display == 'none' || mobileDesign.style.display == 'none' || webDesign.style.display == 'none') {
        photograpy.style.display = 'flex';
        webDesign.style.display = 'flex';
        mobileDesign.style.display = 'flex';
    }
});