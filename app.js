$(document).ready(function() {
  $(".slide-one-item").owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 5000,
      nav: true,
      dots: true
  });
});
$(document).ready(function() {
  $(".slide-one-item.home-slider").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    nav: true,
    dots: true,
    navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">']
  });
});

$(document).ready(function() {
  $(window).on('scroll', function() {
      var scrollPos = $(document).scrollTop();
      $('#navbar a').each(function() {
          var currLink = $(this);
          var refElement = $(currLink.attr("href"));
          if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
              $('#navbar a').removeClass("active");
              currLink.addClass("active");
          }
      });
  });
});

// let nameInput = document.getElementById('name');
// let nameMsg = document.getElementById('name-msg');
// let reg = /^[a-zA-Z]{5,15}$/;

// document.getElementById('guestbook-form').addEventListener('submit', function(event) {
//   event.preventDefault(); // Prevent form submission
//   check();
// });

// function check() {
//   let val = nameInput.value;
//   if (reg.test(val)) {
//     console.log('pass');
//     nameMsg.textContent = '';
//   } else {
//     nameMsg.textContent = 'Enter valid username';
//   }
// }

// let inp = document.getElementById('name')
// let inp2 = document.getElementById('email')
// let msg = document.getElementById('msg')

// function check() {
//   let reg = /^[a-zA-Z]{4,15}$/

//   // let val = inp.value
//   if(reg.test(inp.value)){
//       alert('pass');
//   }else{
//       msg.innerText ='enter valid username'
//   }
  
//   let regEmail = /^[a-zA-Z0-9_$]{3,20}@[a-z]{2,9}\.[a-z]{2,6}$/
  
//   if(reg.test(inp2.value)){
//       alert('pass');
//   }else{
//       msg.innerText ='enter valid username'
//   }
// }


function check(event) {
  event.preventDefault();  // Prevent form from submitting

  let inp = document.getElementById('name');
  let inp2 = document.getElementById('email');
  let nameMsg = document.getElementById('name-msg');
  let emailMsg = document.getElementById('email-msg');
  
  let regName = /^[a-zA-Z]{4,15}$/;
  let regEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
  let isValid = true;
  
  // Validate name
  if (regName.test(inp.value)) {
      nameMsg.innerText = '';
  } else {
      nameMsg.innerText = 'Enter a valid username';
      isValid = false;
  }
  
  // Validate email
  if (regEmail.test(inp2.value)) {
      emailMsg.innerText = '';
  } else {
      emailMsg.innerText = 'Enter a valid email';
      isValid = false;
  }
  
  // If all validations pass, alert success
  if (isValid) {
      alert('Form submitted successfully');
      document.getElementById('guestbook-form').submit(); // Submit the form if validation passes
  }
}


