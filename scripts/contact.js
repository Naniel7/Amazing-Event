document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
  
    emailjs.init("amqTmIcWtVTXyMM2k");
  
    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const name = document.getElementById("exampleFormControlInput1").value;
      const email = document.getElementById("exampleFormControlInput2").value;
      const message = document.getElementById("exampleFormControlTextarea1").value;
  
      const formData = {
        name,
        email,
        message,
      };
  
      emailjs
        .send("service_85j0ly4", "template_m97dtv7", formData)
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            alert("Message sent successfully!");
            form.reset();
          },
          (error) => {
            console.error("FAILED...", error);
            alert("Failed to send message. Please try again later.");
          }
        );
    });
  });
  