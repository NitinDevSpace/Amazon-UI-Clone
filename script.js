const imgs = document.querySelectorAll('.header-slider ul img');
const prev_btn = document.querySelector('.control_prev');
const next_btn = document.querySelector('.control_next');

let n = 0;

function changeSlide(){ // This changes the slide dispay to none i.e hides the image
    for (let i =0;  i < imgs.length; i++){
        imgs[i].style.display = 'none';      
    }
    imgs[n].style.display = 'block';
}

changeSlide();

prev_btn.addEventListener('click', (e)=>{ //this chnages the images to previos image when the btn is clicked
    if(n>0)
        n--;
    else
        n=imgs.length-1;

    changeSlide();
})
next_btn.addEventListener('click', (e)=>{ //this is same as above for next image for next btn
    if(n < imgs.length-1)
        n++;
    else
        n=0;

    changeSlide();
})

const scrollContainer = document.querySelectorAll('.products'); // This makes the items scroll with mouse wheel and prevnts th epage from scrolling when the pointer is in the section
 for(const item of scrollContainer){
    item.addEventListener('wheel', (evt)=>{
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
    })
 } //Todo Add btns as well
