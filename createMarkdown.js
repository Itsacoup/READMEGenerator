// builds the markdown based on responses
function createMarkdown(userResponse) {
//  generates appropriate table of contents
 let contents =
 `${"_____".repeat(25)}
 ### Table of Contents
 ${"_____".repeat(25)}
 `;

 if (userResponse.installation !== "") {
 contents += `
 *[installation][1]` };

 if (userResponse.usage !== "") {
 contents += `
 *[usage][2]` };

 if (userResponse.contribute !== "") {
 contents += `
 *[contribute][3]` };

 if (userResponse.test !== "") {
 contents += `
 *[tests][4]` };

 if (userResponse.license !== "") {
 contents += `
 *[license][5]` };

 if (userResponse.contact !== "") {
 contents += `
 *[contact info][6]` };

 if (contents !== "") {
 contents +=`
 ${"_____".repeat(25)}
 
 `};
 

//writes top to bottom markup of document.
 let writeMarkdown =
 `
 # ${userResponse.title}
 ${"_____".repeat(25)}
    
 ## About this Project

 ${userResponse.description}

 `
 writeMarkdown += contents;

 `
 ${"_____".repeat(25)}
 `


//  adds installation field if applicable
 if (userResponse.installation !== '') {
  
 writeMarkdown +=
 `   
 [1]:
 ## Installation

 ${userResponse.installation}
 
 ${"_____".repeat(25)}
 `
 };

//  adds usage field if applicable
 if (userResponse.usage !== '') {
  
 writeMarkdown +=
 `
 [2]:   
 ## Usage
 
 ${userResponse.usage}
    
 ${"_____".repeat(25)}
 `
 };

//  adds contribute field if applicable
 if (userResponse.contribute !== '') {
  
 writeMarkdown +=
 `
 [3]:  
 ## Contribute
    
 ${userResponse.contribute}
       
 ${"_____".repeat(25)}
 `
 };

//  adds tests field if applicable
 if (userResponse.test !== '') {
  
 writeMarkdown +=
 `
 [4]:
 ## Tests
       
 ${userResponse.test}
          
 ${"_____".repeat(25)}
 `
 };

//  adds license field if applicable
 if (userResponse.license !== '') {
  
 writeMarkdown +=
 `
 [5]:
 ## License
       
 ${userResponse.license}
          
 ${"_____".repeat(25)}
 `
 };

//  adds contact field if applicable
if (userResponse.contact !== '') {
  
 writeMarkdown +=
 `
 [6]:
 ## Contact Info
          
 ${userResponse.contact}
             
 ${"_____".repeat(25)}
 `
 };

// Returns finsihed written markdown
 return writeMarkdown;
};







module.exports = createMarkdown;
