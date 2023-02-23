let scrollBefore = 0;

self.addEventListener('scroll',function(){
    const scrolled =  window.pageYOffset;
    if(scrollBefore > scrolled){
        scrollBefore = scrolled;
        document.getElementById('header').style.top = "0px";
        //document.getElementById('header').style.opacity = 1;
    }else{
        scrollBefore = scrolled;
        document.getElementById('header').style.top = "-80px";
        //document.getElementById('header').style.opacity = 0;
    }
})