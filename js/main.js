$(document).ready(function () {
   // intro-header - form
   $('#sign-btn').on('click', function(e){
      $(e.currentTarget).closest('ul').hide();
      $('form#signin').fadeIn("fast");
   });

   // form before footer
   $("#contact form").on("submit", function(e){
      e.preventDefault();
      var $from = $(e.currentTarget),
         $email = $from.find('#contact-email'),
         $button =  $from.find('button[type=submit]');

         if($email.val().indexOf('@') == -1){
            vaca = $email.closest('.form-group').addClass('has-error');
         } else{
            $from.find('.form-group').addClass('has-sucsses').removeClass('has-error');
            $button.attr('disabled', 'disabled');
            $button.after('<span>Message sent. We will contact you soon</span>')
         }
   });

   $('#menu__items > li').click(function() {
      $(this).addClass('active')
      $('#menu__items > li').not(this).removeClass('active')
    });

});
