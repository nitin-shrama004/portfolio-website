document.getElementById('contact-form').addEventListener('submit',function(e){
    e.preventDefault();
    console.log(this);
    emailjs.sendForm('service_ivqa11g','template_5i3074b',this)
    .then(function(result){
        alert("Send Your Message Sucsesfully");
        console.log(result.text);
        document.getElementById('contact-form').reset();
    },function(error){
        alert("Messsage Not send !");
    
    });
});


      const menuIcon = document.getElementById('menu-icon');
        const secondNav = document.querySelector('.second-nav');
    
        menuIcon.addEventListener('click', () => {
            secondNav.classList.toggle('active');
        });


  const words = ["Web Developer" ,"UI/UX Designer"];
  let wordIndex = 0;
  let charIndex = 0;
  let currentWord = "";
  let isDeleting = false;
  const speed = 150;
  const delayAfterWord = 1000;
  const element = document.getElementById("auto-type-text");

  function type() {
    currentWord = words[wordIndex];
    if (isDeleting) {
      element.textContent = currentWord.substring(0, charIndex--);
    } else {
      element.textContent = currentWord.substring(0, charIndex++);
    }

    if (!isDeleting && charIndex === currentWord.length + 1) {
      isDeleting = true;
      setTimeout(type, delayAfterWord);
      return;
    }

    if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(type, isDeleting ? speed / 2 : speed);
  }

  type(); 