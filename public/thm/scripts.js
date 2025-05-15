function openNav() {
    document.getElementById("sidenav").style.width = "250px";
  }

  function closeNav() {
    document.getElementById("sidenav").style.width = "0";
  }

  function openDialer() {
    try {
      window.open("tel: +917838863462", "_blank");
    } catch {
     
    }
  }
  function openWhatsapp() {
    try {
      window.open("https://api.whatsapp.com/send?phone=7838863462&text=Hello", "_blank");
    } catch {
      
    }
  }

  function openFb() {
    try {
      window.open("https://www.facebook.com/share/16Xa7h2YAT/", "_blank");
    } catch {
      
    }
  }

  function openInsta() {
    try {
      window.open("https://www.instagram.com/thehimalayanmajesty?igsh=MXJvbjNzNm9wenZnbQ%3D%3D&utm_source=qr", "_blank");
    } catch {
      
    }
  }