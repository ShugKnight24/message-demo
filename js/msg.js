//Add a document.ready to ensure that DOM loads before running the js
$(document).ready(function(){

  var loopHandle = null;

  // The messageSystem object is where you should do all of your work
  // Use any combination of javascript, HTML and CSS that you feeling
  // is appropriate

  // Added Toastr Library to display messages
  toastr.options = {
    "closeButton": true,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "3000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut",
  }
  // When "Start Messages" is pressed
  llamaMessages = function(){
    messageSystem = {
        showMessage: function(msg) {
            toastr["info"](msg);
        }
    }

    function showMsg() {
        quotes = [
        "What we've got here is failure to communicate.",
        'Go ahead, make my day.',
        "I've got a bad feeling about this.",
        "I don't know half of you half as well as I should like; and I like less than half of you half as well as you deserve.",
        "I find your lack of faith disturbing.",
        "You're gonna need a bigger boat.",
        "Tell Mike it was only business.",
        "I have come here to chew bubble gum and kick ass, and I'm all out of bubble gum."
        ];
        messageSystem.showMessage(_.sample(quotes));
    }

    function loop() {
        showMsg();
        var rand = Math.round(Math.random() * (3000 - 500)) + 500;
        loopHandle = setTimeout(loop, rand);
      }

    $(function() {
       $('#msgButton').click(function() {
           var btn = $(this),
          btnTxt = btn.text();
           if (btnTxt === 'Start Messages') {
               btn.text('Stop Messages');
               loopHandle = setTimeout(loop, 500);
           } else {
               btn.text('Start Messages');
               clearTimeout(loopHandle);
               loopHandle = null;
           }
       } );
    });
  };

  //When Shug button is pressed
  shugMessage = function() {
    shugMessageSystem = {
        shugMessage: function(shugMsg) {
            toastr["info"](shugMsg);
        }
    }

    function loop() {
        shugMsg();
        var rand = Math.round(Math.random() * (3000 - 500)) + 500;
        shugHandle = setTimeout(loop, rand);
      }

    function shugMsg() {
        qualifications = [
        "He wants to be a LLama",
        "He loves the Ann Arbor area",
        "He is a quick learner",
        "He has full-stack aspirations",
        "He wants to learn .NET and C#",
        "He is a team player.",
        "He is a life long learner",
        "He is able to pick up new technologies quickly",
        "He loves that Llamasoft is a large company with small roots",
        "He likes that LLamasoft values their employees"
        ];
        shugMessageSystem.shugMessage(_.sample(qualifications));
    }

    $(function() {
       $('#shugMsgButton').click(function() {
           var btn = $(this),
          btnTxt = btn.text();
           if (btnTxt === 'What Makes Shugmi Qualified?') {
               btn.text('Wow! He would be a great LLama!');
               shugHandle = setTimeout(loop, 500);
           } else {
               btn.text('What Makes Shugmi Qualified?');
               clearTimeout(shugHandle);
               shugHandle = null;
           }
       });
    });
  };

//When Open Instructions button is pressed
  $(function() {
     $('#accordionButton').click(function() {
        var btn = $(this),
        btnTxt = btn.text();
         if (btnTxt === 'Open Instructions') {
          btn.text('Close Instructions');
         } else {
          btn.text('Open Instructions');
         }
     });
  });
});
