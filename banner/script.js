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
      var name = "cookieInfoHidden=";
      var cookies = document.cookie.split(';');

      for(var i = 0; i < cookies.length; i++) {
          var cookie = cookies[i];
          while (cookie.charAt(0)==' ') {
            cookie = cookie.substring(1);
          }

          if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
          }
      }
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

      //Expiry days = 30 days
      setBannerExpiry(30);
   }

   function setBannerExpiry(daysOfValidity){
    var now = new Date();
    var time = now.getTime() + (daysOfValidity * 24 * 60 * 60 * 1000);
    var newTime = new Date(now.setTime(time));
    
    newTime = newTime.toUTCString();
    
    document.cookie = "cookieInfoHidden=1; expires=" + newTime + "; path=/";
   }


   btnReject.addEventListener("click", function (e) {
    e.preventDefault();
    hideInfobar();
    //Expiry days = 1 day
    setBannerExpiry(1);
  });


});