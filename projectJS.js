const sideBar = document.querySelector('.sideBar');

const box = document.querySelector('.box');

const innerbox1 = document.querySelector('.innerbox1');

const innerbox2 = document.querySelector('.innerbox2');

const innerbox3 = document.querySelector('.innerbox3');

const remainCOntainer = document.querySelector('.remaining-container');

const para = document.querySelectorAll('p');

const rightsideScroll = document.querySelector('.rightsideScroll');

sideBar.addEventListener('click', () =>{

    box.classList.toggle('Box');
    // para.classList.toggle('Para');
    innerbox1.classList.toggle('InnerBox1');
    innerbox2.classList.toggle('InnerBox2');
    innerbox3.classList.toggle('InnerBox3');
    remainCOntainer.classList.toggle('bigBox');
    sideBar.classList.toggle('btn');
    rightsideScroll.classList.toggle('rightBar')
});

const video1 = document.querySelectorAll('.videos');
