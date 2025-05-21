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

document.querySelector("#checkin_calender_button").addEventListener('click', () => {
  document.querySelector('#checkin_calender').classList.toggle('hidden');
});

document.querySelector("#checkout_calender_button").addEventListener('click', () => {
  document.querySelector('#checkout_calender').classList.toggle('hidden');
});

document.querySelector("#adults_selection_button").addEventListener('click', () => {
  document.querySelector('#adults_selection_box').classList.toggle('hidden');
})

document.querySelector("#child_selection_button").addEventListener('click', () => {
  document.querySelector('#child_selection_box').classList.toggle('hidden');
})


const adultsDropdownItem = document.querySelectorAll(".adults_data");

adultsDropdownItem.forEach(element => {
  element.addEventListener('click', function() {
    const selected_adults_data = document.querySelector("#selected_adults_data");
    
    selected_adults_data.innerText = event.target.getAttribute("data-value");
    document.querySelector('#adults_selection_box').classList.toggle('hidden');
  });
});

const childDropdownItem = document.querySelectorAll(".child_data");

childDropdownItem.forEach(element => {
  element.addEventListener('click', function() {
    const selected_adults_data = document.querySelector("#selected_child_data");
    
    selected_adults_data.innerText = event.target.getAttribute("data-value");
    document.querySelector('#child_selection_box').classList.toggle('hidden');
  });
});
