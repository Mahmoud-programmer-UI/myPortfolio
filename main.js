let btnReferance=document.getElementsByClassName("button-referance")[0];
let btn=document.getElementsByTagName("button")[0];
let switchBtn = document.getElementsByTagName("span")[1];
let codeSymbol = document.getElementsByTagName("span")[0];
let myEmail=document.getElementsByClassName("my-email")[0];
let myPhone=document.getElementsByClassName("my-phone")[0];
let phoneIcon=document.getElementsByClassName("phone-icon")[0];
let phoneIcon2=document.getElementsByClassName("phone-icon")[1];
let emailIcon=document.getElementsByClassName("email-icon")[0];
let emailIcon2=document.getElementsByClassName("email-icon")[1];
let aboutSection=document.getElementsByClassName("about")[0];
let locationIcon=document.getElementsByClassName("location-icon")[0];
let locationIcon2=document.getElementsByClassName("location-icon")[1];
let freelanceIcon=document.getElementsByClassName("Freelance-icon")[0];
let githupLogo=document.getElementsByClassName("githup-logo")[0];
let earthIcon=document.getElementsByClassName("earth-icon")[0];
let formSubmit=document.getElementsByTagName("input")[3];
let allSkills =document.querySelectorAll(".skills")
let projectsSection=document.querySelectorAll(".projects-section")

// change visual mode
btn.onclick=()=>{
    projectsSection.forEach((projects)=>{
        let card=projects.querySelectorAll(".card")
        card.forEach((e)=>{
            e.classList.toggle("dark-mode");
        })
    })
    allSkills.forEach(skills => {
        let skill=skills.querySelectorAll("div")
        skill.forEach((e)=>{
            e.classList.toggle("dark-mode");
        })
    });
    document.body.classList.toggle("dark-mode");
    document.getElementsByTagName("header")[0].classList.toggle("dark-mode");
    document.getElementsByTagName("form")[0].classList.toggle("dark-mode");
    switchBtn.classList.toggle("start-0");
    codeSymbol.classList.toggle("code-symbol-dark");
    myEmail.classList.toggle("border-white");
    myPhone.classList.toggle("border-white");
    aboutSection.classList.toggle("dark-mode")
    formSubmit.classList.toggle("dark-mode-button")
    if(myPhone.className.includes("border-whit")){
        btnReferance.innerText="switch-off"
        phoneIcon.src=("IMAGES/icons8-phone-24 (1).png")
        phoneIcon2.src=("IMAGES/icons8-phone-24 (1).png")
        emailIcon.src=("IMAGES/icons8-gmail-logo-32 (1).png")
        emailIcon2.src=("IMAGES/icons8-gmail-logo-32 (1).png")
        locationIcon.src=("IMAGES/icons8-location-50 (1).png")
        locationIcon2.src=("IMAGES/icons8-location-50 (1).png")
        freelanceIcon.src=("IMAGES/icons8-bag-64 (1).png")
        earthIcon.src=("IMAGES/icons8-green-earth-24 (1).png")
        githupLogo.src=("IMAGES/icons8-github-30 (1).png")
    }else{
        btnReferance.innerText="switch-on"
        phoneIcon.src=("IMAGES/icons8-phone-24.png")
        phoneIcon2.src=("IMAGES/icons8-phone-24.png")
        emailIcon.src=("IMAGES/icons8-gmail-logo-32.png")
        emailIcon2.src=("IMAGES/icons8-gmail-logo-32.png")
        locationIcon.src=("IMAGES/icons8-location-50.png")
        locationIcon2.src=("IMAGES/icons8-location-50.png")
        freelanceIcon.src=("IMAGES/icons8-bag-64.png")
        earthIcon.src=("IMAGES/icons8-green-earth-24.png")
        githupLogo.src=("IMAGES/icons8-github-30.png")
    }
}

let skills=[
    {
        class:"skill1",
        imgSrc:"IMAGES/icons8-html-5-48.png",
        pText:"HTML5",
    },
    {
        class:"skill2",
        imgSrc:"IMAGES/icons8-css3-48.png",
        pText:"CSS3",
    },
    {
        class:"skill3",
        imgSrc:"IMAGES/icons8-bootstrap-48.png",
        pText:"BOOTSTRAP",
    },
    {
        class:"skill4",
        imgSrc:"IMAGES/icons8-javascript-48.png",
        pText:"JavaScript",
    },
    {
        class:"skill5",
        imgSrc:"IMAGES/icons8-react-40.png",
        pText:"REACT",
    },
]

let newSkills=skills.map((item)=>{
    let div=document.createElement("div")
    let img=document.createElement("img")
    let p=document.createElement("p")
    div.classList.add(item.class)
    img.src=item.imgSrc
    p.innerText=item.pText
    div.appendChild(img)    
    div.appendChild(p)
    allSkills.forEach((skills)=>{
        skills.appendChild(div)
    }) 
})


/* 
activitain
1-call the three sections
 -projects
 -resume
 -contact
2- make any button reset other sections when be clicked
 explain 
    means with the display block for any section the other sections will be none
*/ 

let mainHeaders = document.querySelector(".more-headers");
let parentSections=document.querySelector(".all-information")
//  Check if mainHeaders found before trying to get its children && display sections
if (mainHeaders ) {
    //sections to desplay
    let projectsSection=parentSections.querySelector(".projects-section")
    let resumeSection=parentSections.querySelector(".resume-section")
    let contactSection=parentSections.querySelector(".contact-information")
    // access its childern
    let pFirst = mainHeaders.getElementsByTagName("p")[0];
    let pSecond = mainHeaders.getElementsByTagName("p")[1];
    let pThird = mainHeaders.getElementsByTagName("p")[2];

    pFirst.onclick= ()=>{
        pFirst.classList.add("active")
        pSecond.classList.remove("active")
        pThird.classList.remove("active")
        projectsSection.classList.remove("hide")
        projectsSection.classList.add("appearance")
        resumeSection.classList.remove("appearance")
        contactSection.classList.remove("appearance")
    }
    pSecond.onclick= ()=>{
        pSecond.classList.add("active")
        pFirst.classList.remove("active")
        pThird.classList.remove("active")
        resumeSection.classList.add("appearance")
        projectsSection.classList.remove("appearance")
        contactSection.classList.remove("appearance")
        projectsSection.classList.add("hide")
    }
    pThird.onclick= ()=>{
        pThird.classList.add("active")
        pSecond.classList.remove("active")
        pFirst.classList.remove("active")
        contactSection.classList.add("appearance")
        projectsSection.classList.remove("appearance")
        resumeSection.classList.remove("appearance")
        projectsSection.classList.add("hide")
    }
}
function checkInputs(){
    let form=document.querySelectorAll("form")
    
    form.forEach((form)=>{
        let inputs=form.querySelectorAll("input:not(:last-child)")
        let submit=form.getElementsByTagName("input")[3];
        let nameInput=form.getElementsByTagName("input")[0];
        let emailInput=form.getElementsByTagName("input")[1];
        let messageInput=form.getElementsByTagName("input")[2];
        inputs.forEach((input)=>{
            // check if every input not empty
            input.oninput=()=>{
                if(nameInput.value !== "" && emailInput.value !== "" && messageInput.value !== "" ){
                    submit.style.color="white"
                    submit.value="send"
                    submit.disabled = false;
                }else{
                    submit.style.color="#ddd"
                    submit.value="Waiting Message..."
                    submit.disabled = true;
                }
            }
        })
    })
}
checkInputs()