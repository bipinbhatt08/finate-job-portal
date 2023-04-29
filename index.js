//this is for the dropdowns
        const dropdowns = document.querySelectorAll('.nav-dropdown');
        dropdowns.forEach((dropdown) => {
        dropdown.addEventListener('mouseenter', () => {
            dropdown.style.display = 'block';
        });

        dropdown.addEventListener('mouseleave', () => {
            dropdown.style.display = 'none';
        });
        });

        // This is for side nav bar
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
//   Side nav bar dropdowns

    // Get all the parent li elements
    const parentLiElements = document.querySelectorAll('.side-nav-bar-parent');
    // Loop through each parent li element
    parentLiElements.forEach(li => {
    // Listen for a click event on the parent li element
        li.addEventListener('click', () => {
        // Get the dropdown ul element for this parent li element
        const dropdown = li.querySelector('.side-nav-bar-dropdown');
        const icon=li.querySelector('.dropdown-icon')
        icon.innerHTML=dropdown.style.display === 'none' ?'<i class="fa-solid fa-minus"></i>':'<i class="fa-sharp fa-solid fa-plus"></i>';
        // Toggle the display property of the dropdown ul element
        dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
  });
});




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