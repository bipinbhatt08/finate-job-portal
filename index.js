
        var isNavActive=false
          var sideNavBar =document.querySelector(".side-nav-bar")
          var navBtn=document.getElementById('menu-btn')
        function openNav(){
            if(!isNavActive){
                // var sideNavBar =document.querySelector(".side-nav-bar")
            sideNavBar.style.display="block"
            sideNavBar.style.marginLeft="0px"
            
             setTimeout(()=>{
            navBtn.innerHTML='<i class="fa-solid fa-xmark"></i>'},200)
            isNavActive=true;
            }
            else if(isNavActive) {
                closeNav()
            }
        }
    function closeNav(){
        sideNavBar.style.marginLeft="-2800px"
        isNavActive=false
        setTimeout(()=>{
            navBtn.innerHTML='<i class="fa-sharp fa-solid fa-bars"></i>';           },200)
    }

    //for typing effecto on the job count fo herosection 

    var job=document.getElementById('job-counter')
    let jobCount=""
    setTimeout(()=>{
        job.innerHTML='2'
    },100)
    setTimeout(()=>{
        job.innerHTML+=','
    },200)
    setTimeout(()=>{
        job.innerHTML+='4'
    },300)
    setTimeout(()=>{
        job.innerHTML+='6'
    },400)
    setTimeout(()=>{
        job.innerHTML+='2'
    },500)