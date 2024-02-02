//course selection array

//declaring all variables for HTML items
 
//boxes 
const addCourseBox = document.getElementById("add-course-box");
    
//lists & displayed info
const courses = document.getElementById("courses");
const weightGPA = document.getElementById("weighted");
const unweightGPA = document.getElementById("unweighted");
const courseSelection = document.getElementById("course-selection");
let typePhrase = document.getElementById("type-phrase");


//inputs
let inputCourse = document.getElementById("input-course");
let courseDropdown = document.getElementById("course-selection");
let grade = document.getElementById("grade");
const courseType = document.getElementById("course-type");
const outputCourse = document.getElementById("output-course");

//clickable buttons & their divs
const addCourseX = document.getElementById("add-course-x");
const addCourseCheck = 
document.getElementById("check-add");
const addNewButton = document.getElementById("add-course");
const searchCourse = document.getElementById("search-course");

//class list variables
const classList = [ 
"English 9", "English 9 H", "English 10", "English 10 H", "English 11", "English 11 H", "AP Language and Composition", "English 12", "English 12 H", "AP Literature", "Algebra I", "Geometry", "Algebra II", "Algebra II/Trigonmetry H", "Functions, Algebra, & Data Analysis (FADA)", "Biology", "Biology H", "Chemistry", "Chemistry H", "Earth Science", "Earth Science H", "World History/Geography I", "Intro to AP World History H", "World History/Geography II", "AP World History", "AP Human Geography", "US & VA History", "AP US History", "US History DE", "US & VA Government", "AP US & Comparative Government", "US Government DE", "Accounting", "Computer Info Systems", "Advanced Computer Info Systems", "Intro to Cybersecurity", "Cybersecurity Operations H", "App Development I H", "App Development II H", "Intro to Business & Marketing", "Business Law & Business Management (each one semester)", "Real Estate Marketing", "Sports & Entertainment Marketing", "Travel & Tourism Marketing & Sales", "Marketing Co-op/Non-Co-op", "Advanced Marketing Co-op DE/Non-Co-op DE", "Economics & Personal Finance", "Intro to Early Childhood Education", "Early Childhood Ed I/DE", "Early Childhood Ed II/DE", "Teacher Cadet I DE", "Teacher Cadet II DE", "Fashion Careers I", "Fashion Careers II", "Gourmet Foods", "Intro to Culinary Arts", "Aerospace Science I", "Aerospace Science II", "Materials & Processes", "Manufacturing Systems I", "Manufacturing Systems II", "Production Systems", "Technical Drawing & Design", "Architectural Drawing & Design", "PLTW Intro to Engineering Design H", "PLTW Principles of Engineering H", "PLTW Civil Engineering & Architecture H", "21st Century Literacy I", "21st Century Literacy II", "Broadcast Journalism I", "Broadcast Journalism II", "Broadcast Journalism III H", "Creative Writing I", "Creative Writing II", "Creative Writing & Public Speaking", "Film Studies Analysis", "Film Studies/Production", "Fundamentals of Writing", "Introduction to Journalism", "Newspaper Journalism I", "Newspaper Journalism II", "Newspaper Journalism III H", "Photojournalism I", "Photojournalism II", "Photojournalism III H", "Mythology Women's Studies Studio Art I", "Studio Art II", "Studio Art III", "Studio Art IV H", "AP Drawing", "AP 2D Art & Design", "AP 3D Art & Design", "Ceramics & Sculpture", "Computer Graphic Design", "Drawing & Painting", "Photography I", "Photography II", "Theater Arts I", "Theater Arts II", "Theater Arts III", "Theater Arts IV H", "Costume/Makeup Design", "Technical Theater Design/Production I", "Technical Theater Design/Production II H", "Drama Projects: Musical Theater H", "Band", "Orchestra", "Chorus", "Guitar", "AP Music Theory", "Intro to Weight Training", "Advanced Weight Training", "Intro to Team Sports", "Advanced Team Sports", "Intro to Yoga", "Advanced Yoga", "NASM Certified Personal Trainer", "Unified PE", "Trignometry/Advanced Algebra", "Probability & Statistics", "AP Statistics", "Precalculus", "AP Precalculus", "Precalculus DE", "Math Analysis H", "AP Calculus AB", "AP Calculus BC", "Multivariable H", "Calculus DE", "Data Science", "Computer Math", "AP Computer Science A", "AP Computer Science Principles", "Cloud Computing H", "Data Structure/Artificial Intelligence H", "PEER", "Project Management", "SCA Student Leadership", "Sources of Strength", "AP Biology/DE", "Environmental Science", "AP Environmental Science", "AP Chemistry", "Physics H", "Conceptual Physics", "AP Physics C: Mechanics", "Independent Science Research/DE", "Independent Science Research II DE", "Geospatial Science DE", "Geospatial Science II DE", "AP African American Studies", "Global Social Issues & Modern International Relations", "AP Human Geography", "AP Macro/Micro Economics", "AP Psychology", "The World of Ideas & World Religions", "Basic Skills", "Ed for Employment I", "Ed for Employment II", "Functional Skills/CBI", "French I", "French II", "French III", "French IV H", "French V H", "AP French Language & Culture", "Latin I", "Latin II", "Latin III", "Latin IV", "Latin V H", "AP Latin", "Spanish I", "Spanish II", "Spanish III", "Spanish IV H", "Spanish V H/DE", "AP Spanish Language & Culture", "German I", "German II", "German III", "German IV H", "German V H" ,"Health & PE 9","Health & PE 10"].sort(); 
let regex = new RegExp(inputCourse.value);




inputCourse.addEventListener("keyup",function(){
  courseSelection.classList.remove("hide");
  courseSelection.innerHTML = "";
  regex = /a/
  regex = new RegExp(inputCourse.value.toLowerCase());
  
    classList.forEach((name)=>{
      if (regex.test(name.toLowerCase().split("").join(""))){
        courseSelection.innerHTML += 
         `
        <p  onclick="choserChosen(this)" >${name}</p>
        
        `
      }
    })
  }  
)

searchCourse.addEventListener("click",function(){
  outputCourse.value = inputCourse.value;
  outputCourse.textContent = "Course Title: " +inputCourse.value;
  inputCourse.value = ""; courseSelection.classList.add("hide");
  courseType.classList.remove("hide");
  
  
})

function choserChosen(button){
  let type = "";
  classList.forEach((c)=>{
   if (c === button.textContent){
   if (c[0]+c[1]==="AP"){
     type =  "AP";
   }
   else if(c[c.length-2]+c[c.length-1]=="DE"){
     type=  "DE";
   }
   else if(c[c.length-1]==="H"){
     type=  "H";
   }
   else{
     type = "A";
   }
   }   
 })
  courseType.classList.add("hide");
  courseType.value = "";
  typePhrase.textContent = "Course Type: "+ type;
  typePhrase.value = type;
  console.log(typePhrase.value);
  outputCourse.value = button.textContent;
  outputCourse.textContent = "Course Title: "+button.textContent;
  inputCourse.value = "";
  regex = inputCourse.value;
  courseSelection.classList.toggle("hide");
}








//validate if user course add is good
let classHistory = /*JSON.parse(localStorage.getItem("history"))||*/[];
let userStorage = JSON.parse(localStorage.getItem("user"))||[];

addCourseCheck.addEventListener("click",function(){
  if (grade.value.length==0||(courseType.value.length==0&&typePhrase.value.length ==0)||outputCourse.value==undefined||outputCourse.value.length==0){
  }
  else{
    var courseVal = "";
    if (courseType.value.length!=0){
      courseVal = courseType.value
    }
    else{
      courseVal = typePhrase.value;
    }
    classHistory.unshift([outputCourse.value,grade.value,courseVal]);
    //localStorage.setItem("history",JSON.stringify(classHistory));
    grade.value = "";
    courseType.value = "";
    outputCourse.value = "";
    typePhrase.value = "";
    outputCourse.textContent = "Course Title: ";
    typePhrase.textContent = "Course Type: "
    updateHistory();
    gpaCalc(classHistory);
    localStorage.setItem("user",JSON.stringify(classHistory));
    console.log(userStorage);
  }
  
})

const updateHistory = () =>{
  courses.innerHTML = "";
  for (let i=0;i<classHistory.length;i++){
  courses.innerHTML += 
    
     `
      <div class="course" id="${classHistory[i][0]}">
          <div class="history-title">
          <p>${classHistory[i][0]}</p>
          </div>
          <div class="history-grade">
          <p >${classHistory[i][1].toUpperCase()}</p>
          </div>
          <div class="history-type">
          <p >${classHistory[i][2].toUpperCase()}</p>
          </div>
          <span> <i onclick="deleteTask(this)"class="fa-solid fa-circle-xmark x"></i></span>
        </div>
     
      `
  }
  if (classHistory.length){
    topIconBtn.classList.remove("hide");
  }
  
}

const deleteTask = (button) =>{
  const indexDelete = () =>{
    for (let i=0;i<classHistory.length;i++){
      if (classHistory[i][0]===button.parentElement.parentElement.id){
        return i;
      }
    }
  }
  button.parentElement.parentElement.remove();
  classHistory.splice(indexDelete(),1); 
  //localStorage.setItem("history",JSON.stringify(classHistory));
  gpaCalc(classHistory);
}

const gpaCalc = (list) =>{
  if (classHistory.length){
    let base = 0;
    let weight =0;
    for (let i=0;i<classHistory.length;i++){
      switch(list[i][1]){
        case "a+":
          base = base+4.3;
          break;
          case "a":
          base = base+4;
          break;
          case "a-":
          base = base+3.7;
          break;
          case "b+":
          base = base+3.3;
          break;
          case "b":
          base = base+3;
          break;
          case "b-":
          base = base+2.7;
          break;
          case "c+":
          base = base+2.3;
          break;
          case "c":
          base = base+2;
          break;
          case "c-":
          base = base+1.7;
          break;
          case "d+":
          base = base+1.3;
          break;
          case "d":
          base = base+1;
          break;
          case "d-":
          base = base+0.7;
          break;
          case "f":
          base = base;
          break;
      }
      switch(list[i][2].toLowerCase()){
        case "ap/de":
          weight = weight+1;
          break;
        case "ap":
          weight = weight+1;
          break;
        case "de":
          weight = weight +1;
          break;
         case "h":
          weight = weight+0.5;
          break;
          case "a":
          weight = weight;
          break;
      }
    }
    unweightGPA.textContent= "Unweighted GPA: "+ (Math.round(base*100/classHistory.length))/100;
    weight = base + weight;
    weightGPA.textContent = "Weighted GPA: "+(Math.round(weight*100/classHistory.length))/100;
    
  }
  
  else{
    weightGPA.textContent = "Weighted GPA: N/A";
    unweightGPA.textContent = "Unweighted GPA: N/A";
  }
  
}

/*
if (classHistory.length){
  updateHistory();
  gpaCalc(classHistory);
}

*/

//event listeners to open and close boxes
addNewButton.addEventListener("click",function(){
  addNewButton.classList.toggle("hide");
  addCourseBox.classList.toggle("hide");
})

addCourseX.addEventListener("click",function(){
  addNewButton.classList.toggle("hide");
  addCourseBox.classList.toggle("hide");
})





//log methods program

//declare HTML items
const signInBtn = document.getElementById("sign-up-btn");
const logInBtn = document.getElementById("log-in-btn");
const guestBtn = document.getElementById("guest-btn");
const topIconBtn = document.getElementById("main-user-icon-div");
const createAccountBtn = document.getElementById("create-sign-in-btn");
const loginAccountBtn = document.getElementById("enter-log-in-btn");

//screens 
const signInScreen = document.getElementById("sign-screen");
const logInScreen = document.getElementById("log-screen");
const gpaScreen = document.getElementById("gpa-screen");
const logOptions = document.getElementById("log-options");
const fullLogScreen = document.getElementById("full-log-screen")

//sign in and log in inputs

let signInId = document.getElementById("sign-in-id");
let signInPassword = document.getElementById("sign-in-password");
let signInName = document.getElementById("sign-in-full-name");
let signInYear = document.getElementById("sign-in-year");
let signInWarn = document.getElementById("sign-in-warning");

let logInId = document.getElementById("log-in-id");
let logInPassword = document.getElementById("log-in-password");
let logInWarn = document.getElementById("log-in-warning");




//guest button functionality

guestBtn.addEventListener("click",function(){
  gpaScreen.classList.remove("hide");
  fullLogScreen.classList.add("hide");
  topIconBtn.classList.remove("hide");
  classHistory = [];
  updateHistory();
  gpaCalc(classHistory);
  
})



signInBtn.addEventListener("click",function(){
  logOptions.classList.toggle("hide");
  signInScreen.classList.toggle("hide"); 
})

createAccountBtn.addEventListener("click",function(){
  let userIdRegex = /[0-9]/;
  let userError = 0;
  for (let i=0;i<signInId.value.length;i++){
    if (userIdRegex.test(signInId.value[i])){
    }
    else{
      userError++;
    }
  }
  
  if (userError==0 && (signInId.value.length==6||signInId.value.length==7) &&signInPassword.value.length>0 && signInName.value.length>0&&signInYear.value.length>0){
    let existUser = false;
    
    userStorage.forEach((id)=>{
      if (id.id == signInId.value){
        existUser = true;
      }
    })
    
    if (existUser==false){
    
    signInWarn.classList.add("hide");
    userError = 0;
    userStorage.unshift(
    {
      id:signInId.value,
      pass:signInPassword.value,
      courses:[]
    } 
    )
    
    addCourseToUser();
    localStorage.setItem("user",JSON.stringify(userStorage));
    updateHistory();
    gpaCalc(classHistory);
    signInScreen.classList.toggle("hide"); 
    gpaScreen.classList.toggle("hide");
    
    }
    
  }
  
  else{
    signInWarn.classList.remove("hide");
    signInWarn.textContent = "FILL OUT ALL PARTS OF FORM CORRECTLY"
  }
  
})


logInBtn.addEventListener("click",function(){
  logOptions.classList.toggle("hide");
  logInScreen.classList.toggle("hide");
  
  
})

loginAccountBtn.addEventListener("click",function(){
  findAndRetriveUser(); 
  
  if (classHistory.length){
    topIconBtn.classList.remove("hide");
  }
  
  
})


const addCourseToUser = () =>{
  classHistory = [];
  for (let i=0;i<userStorage.length;i++){
    if (userStorage[i].id == signInId.value||userStorage[i].id==logInId.value){
      userStorage[i].courses.push(classHistory);
      localStorage.setItem("user",JSON.stringify(userStorage));
    }
  }
  console.log(userStorage);
}

const findAndRetriveUser = () =>{
  let userExist = false;
  userStorage.forEach((user)=>{
    if (user.id===logInId.value){
      userExist = true;
    }
  })
  logInWarn.classList.remove("hide");
  logInWarn.textContent = "User does not exist"
  for (let i=0;i<userStorage.length;i++){
    if (userStorage[i].id===logInId.value&&userStorage[i].pass==logInPassword.value){
      
        logInWarn.textContent = "User login valid";
        //console.log(userStorage[i].courses[0]);
        console.log(userStorage);
        classHistory = userStorage[i].courses[0];
        updateHistory();
        gpaCalc(classHistory);
        localStorage.setItem("user",JSON.stringify(userStorage));
      logInScreen.classList.toggle("hide");
  gpaScreen.classList.toggle("hide");
        logInId.value = "";
        logInPassword.value = "";
        logInWarn.textContent = "";
         
           
      }
    else if(userExist){
      if (logInId.value.length){
      logInWarn.textContent = "Incorrect Password";
      }
    }
    else{
      if (logInId.value.length){
      logInWarn.textContent = "User Does not Exist";
      }
    }
      
   
  } 
}



  
  

//icon button functionality
topIconBtn.addEventListener("click",function(){
  gpaScreen.classList.add("hide");
  fullLogScreen.classList.remove("hide");
  logOptions.classList.remove("hide");
  logInScreen.classList.add("hide");
  signInScreen.classList.add("hide");
  //topIconBtn.classList.add("hide");
  logInScreen.classList.add("hide");
  /*
  classHistory = [];
  updateHistory();
  gpaCalc(classHistory);
  */
   signInId.value = "";
   signInPassword.value = "";
   signInName.value="";
   signInYear.value= "";
   logInId.value = "";
   logInPassword.value = "";
  
})