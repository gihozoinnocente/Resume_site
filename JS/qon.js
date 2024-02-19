const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit",async (e) => {
    e.preventDefault();
    // Get the values from the form
    const name = e.target.elements.name.value
    const message = e.target.elements.text.value
    const email = e.target.elements.email.value
    const subject = e.target.elements.subject.value
    const phonenumber = e.target.elements.phonenumber.value
    

     // defining the message
     const query = {
        
        // id: uuidv4(),
        "senderName":name,
        email,
        message,
        subject,
        phonenumber,
        // location,
        // sentOn: Date.now()
    }
   
    
        const postQueries = await post('/queries/',query);
        console.log(postQueries)
        const queries = postQueries.data;
        // console.log(queries)
    
    window.alert("Thank you for contacting me")
    e.target.elements.name.value = ''
    e.target.elements.text.value = ''
    e.target.elements.email.value = ''
    // e.target.elements.subject.value = ''
    // e.target.elements.phonenumber.value = ''



})

var userLocation 




