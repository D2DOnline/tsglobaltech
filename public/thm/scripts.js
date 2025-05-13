function openNav() {
    document.getElementById("sidenav").style.width = "250px";
  }

  function closeNav() {
    document.getElementById("sidenav").style.width = "0";
  }

  function openWhatsapp() {
    try {
      window.open("whatsapp://send?phone=7838863462", "_blank");
    } catch {
      window.open("https://api.whatsapp.com/send?phone=7838863462&text=Hello", "_blank");
    }
  }
  function openWhatsapp1() {
    try {
      window.open("https://api.whatsapp.com/send?phone=7838863462&text=Hello", "_blank");
    } catch {
      
    }
  }