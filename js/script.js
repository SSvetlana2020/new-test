window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        });
    });
});

// modal windows
$(document).ready(function(){
    $('[data-modal=consultation]').on('click', function() {
      $('.overlay, #consultation').fadeIn('slow');
      });
  
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #thanks').fadeOut('slow');
      });
  
  
    //Validation
    function validateForms(form){
      $(form).validate(
        {
        rules: {
          name: {
                  required: true,
                  minlength: 2
                },
          tel: "required",
          email: {
                  required: true,
                  email: true
                  }
        },
        messages: {
                    name: {
                        required: "Пожалуйста, введите свое имя",
                        minlength: jQuery.validator.format("Введите {0} символа!")
                    },
                      tel: "Пожалуйста, введите свой номер телефона",
                    email: {
                      required: "Пожалуйста, введите свою почту",
                      email: "Неправильно введен адрес почты"
                    }
                }
      });
    };
  
  validateForms('#consultation-form');
  validateForms('#consultation form');
  
  //mask for telephone by plugin maskedinput
  
  $('input[name=tel]').mask("+38 (999) 999-99-99");
  
  // //front
  // //AJAX для отправки писем с сайта

  $('form').submit(function(e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        // url: "mailer/smart.php",
        url: "mailer/telegram.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        $('#consultation').fadeOut();
        $('.overlay, #thanks').fadeIn('slow');
  
        $('form').trigger('reset');
    });
    return false;
  });
  
  //end
  });

