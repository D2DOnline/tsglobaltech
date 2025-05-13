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