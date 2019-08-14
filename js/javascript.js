let btn = document.querySelectorAll('.button');

btn.addEventListener ('click', function(){
    btn.forEach(element => {
        btn.style.backgroundColor = 'Green';
    });

});