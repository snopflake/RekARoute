// document.getElementById("btn-angkot").addEventListener("click", function() {
//     window.location.href = "/Informasi Angkot/informasi_angkot.html";
// }); 

// document.getElementById("btn-bus").addEventListener("click", function() {
//     window.location.href = "InformasiBus.html";
// });

document.querySelectorAll('.hamburger-menu, .hamburger-menuafter').forEach(function(menu) {
    menu.addEventListener('click', function() {
        document.querySelector('.sidebar').classList.toggle('active');
        document.querySelectorAll('.hamburger-menu, .hamburger-menuafter').forEach(function(item) {
            item.classList.toggle('open');
        });
    });
});
