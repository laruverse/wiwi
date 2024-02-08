const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('WIIIII, gracis x aceptar mon amour. entra al link para saber el plan.   https://docs.google.com/document/d/1BqKJkKgdhANmaxWokKhJH-C7I4mawjz4nNTSsrwE5lo/edit?usp=sharing')
})

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover',function () {
    const randomX = parseInt(math.random()*100);
    const randomY = parseInt(math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})