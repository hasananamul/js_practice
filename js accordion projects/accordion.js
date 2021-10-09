let accordion_content = document.getElementsByClassName('accordion_content');
//let accord_text = document.querySelectorAll('.accordion_text');

for(let i = 0; i < accordion_content.length; i ++){
    accordion_content[i].addEventListener('click',function(){
        this.classList.toggle('active');
    })
}




console.log(accordion_content.length);
