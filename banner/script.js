document.addEventListener("DOMContentLoaded", function () {
  
  var infoBar = document.querySelector(".cookie-consent-banner");
  var btnAccept = document.querySelector(".cookie-consent-banner__cta");
   var btnReject = document.querySelector(".cookie-consent-banner__cta--secondary");


  // Check if user has already accepted the notification
  if(wasAccepted()) {
    hideInfobar();
    return;
  }

  //listen for the click event on Accept button
  btnAccept.addEventListener("click", function (e) {
    e.preventDefault();
    saveAcceptInCookies();
    hideInfobar();
  });

  //hide cookie info bar
  function hideInfobar () {
    infoBar.className = infoBar.classList.value + " cookies-consent-banner_accepted";
  }

  // Check if user has already accepted the notification
   function wasAccepted () {
     return checkCookie() === "1";
   }

  // // get cookie
   function checkCookie () {
      return "";
   };

  //save cookie
   function saveAcceptInCookies () {
    var imported = document.createElement('script');
    imported.src = 'https://www.googletagmanager.com/gtag/js?id=G-CBJDNTG257';
    document.head.appendChild(imported);


    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-CBJDNTG257');
   }

   btnReject.addEventListener("click", function (e) {
    e.preventDefault();
    hideInfobar();
  });


});