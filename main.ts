const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement 

form.addEventListener('submit', (event: Event)=>{
    event.preventDefault();

    //Collect input values
    const name = (document.getElementById('name') as HTMLInputElement).value 
    const email = (document.getElementById('email') as HTMLInputElement).value 
    const phone = (document.getElementById('phone') as HTMLInputElement).value 
    const education = (document.getElementById('education' )as HTMLInputElement).value 
    const experience = (document.getElementById('experience') as HTMLInputElement).value 
    const skills = (document.getElementById('skills') as HTMLInputElement).value 

    //Generate the resume content dynamically.
    const resumeHTML = `
    <h2><b> Resume </h2></b>
    <h3> Personal Information </h3>
    <p><b>Name:</b>${name}</p>
    <p><b>email:</b>${email}</p>
    <p><b>phone:</b>${phone}</p>
    
    <h3>Education</h3>
    <p>${education}</p>

     <h3>Experience</h3>
    <p>${experience}</p>

    <h3>skills</h3>
    <p>${skills}</p>
    `;

    //Display generated resume
    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumeHTML
    }
    else{
            console.log('The resume display element is missing.m');
    }
}) 