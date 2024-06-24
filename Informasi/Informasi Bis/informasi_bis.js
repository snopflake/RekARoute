document.getElementById("btn-angkot").addEventListener("click", function() {
    window.location.href = "../InformasiAngkot/InformasiAngkot.html";
}); 

document.getElementById("btn-bus").addEventListener("click", function() {
    window.location.href = "../InformasiBus/InformasiBus.html";
});

const busData = {
    "BUS I": {
        tujuan: [
            "SMPN 18", "SMAN 9", "MAN 2 Malang", "MTsN 1 Malang", "SMAN 8", 
            "SMPN 4", "SMKN 2", "SMPN 18", "SMPN 8", "SMPN 6", "SMAN 1", "SMAN 3", "SMAN 4"
        ],
        rute: [
            "SPBU Tlogomas", "Jl. MT. Haryono", "Jl. Soekarno Hatta", "Bundaran Pesawat", 
            "Taman Krida Budaya Jatim (TKBJ)", "Jl. Dl Panjaitan", "Jl. Bogor", "Jl. Veteran", 
            "Bundaran Diknas/UB", "Jl. Veteran", "Jl. Bandung", "Jl. Ijen", "Jl. Semeru", 
            "Jl. Kahuripan", "Bundaran Tugu", "Balai Kota Malang"
        ]
    },
    "BUS II": {
        tujuan: [ 
            "SMKN 3", "MAN 2 Malang", "MTsN 1 Malang", "SMAN 8", "SMPN 4", 
            "SMKN 2", "SMPN 1", "SMPN 8", "SMPN 6", "SMAN 1", "SMAN 3", "SMAN 4"
        ],
        rute: [
            "SPBU Mergan (Pisang Candi)", "Jl. Raya Langsep", "Jl Raya Galunggung", "Jl. Bondowoso", 
            "Jl. Jombang", "Jl. Surabaya", "Jl. Jakarta", "Jl. Bogor Bawah", "Jl. Veteran", 
            "U Turn SMAN 8", "Bundaran Diknas", "Jl. Veteran", "Jl. Bandung", "Jl. Ijen", 
            "Jl. Semeru", "Jl. Kahuripan", "Bundaran Tugu", "Balai Kota Malang"
        ]
    },
    "BUS III": {
        tujuan: ["SMPN 5", "SMPN 3", "SMAN 1", "SMAN 3", "SMAN 4"],
        rute: [
            "Terminal Madyopuro (Sawojajar)", "Jl. Ki Ageng Gribig", "Jl. Danau Toba", "Jl. AM Wiyono", 
            "Jl. Kesatrian", "Jl. Hamid Rusdi", "Bundaran SMPN 5", "Jl. Panglima Sudirman", 
            "Jl. Dr Cipto", "Jl. Cokroaminoto", "Jl. Trunojoyo", "Jl. Kertanegara", "Bundaran Tugu", 
            "Balai Kota Malang"
        ]
    },
    "BUS IV": {
        tujuan: ["SMAN 6", "SMAN 10 (B)", "SMPN 10", "SMKN 10", "SMPN 23"],
        rute: [
            "Terminal Madyopuro (Sawojajar)", "Jl. Ki Ageng Gribig", "Jl. Mayjen Sungkono", 
            "Terminal Hamid Rusdi", "Block Office (Kantor Terpadu)"
        ]
    },
    "BUS V": {
        tujuan: ["SMAN 2", "SMAN 5", "SMKN 4", "SMAN 1", "SMAN 3", "SMAN 4"],
        rute: [
            "Block Office (Kantor Terpadu)", "Jl. Mayjen Sungkono", "Pasar Induk Gadang", 
            "PLN Satsuit Tubun", "Jl. Kolonel Sugiono", "Jl. RE Martadinata", "Bawah Flyover Kotalama", 
            "Comboran", "Jl. Sulawesi", "SPBU Sawahan", "Jl. Syarif Al Qodri (Embong Arab)", 
            "Jl. Kauman", "Jl. KH. Hasyim Asy'ari", "Jl. AR Hakim", "Gereja", "Jl. Mojopahit", 
            "Bundaran Tugu", "Balai Kota Malang"
        ]
    },
    "BUS VI": {
        tujuan: ["SMAN 5", "SMKN 4", "SMAN 2", "SMAN 1", "SMAN 4", "SMAN 3", "SMKN 1", "SMPN 19"],
        rute: [
            "Samsat Kacuk", "Jl. Sudanco Supriyadi", "Jl. Janti", "Jl. Halmahera", "Jl. Tanimbar", 
            "Jl. Sulawesi", "Jl. Nusakambangan", "Comboran", "Jl. RE Martadinata", "Jl. Gatot Subroto", 
            "Jl. Trunojoyo", "Jl. Kertanegara", "Bundaran Tugu", "Balai Kota Malang"
        ]
    }
};

function updateInfo() {
    const selectedBus = document.getElementById("jenis-bus").value;
    const sekolahPerlintasan = document.getElementById("sekolah-perlintasan");
    const rutePerlintasan = document.getElementById("rute-perlintasan"); 

    // Update schools
    sekolahPerlintasan.value = busData[selectedBus].tujuan.join(", ");
 
    sekolahPerlintasan.innerHTML = "";
    busData[selectedBus].tujuan.forEach(route => {
        const li = document.createElement("li");
        li.textContent = route;
        sekolahPerlintasan.appendChild(li);
    });

    // Update routes
    rutePerlintasan.innerHTML = "";
    busData[selectedBus].rute.forEach(route => {
        const li = document.createElement("li");
        li.textContent = route;
        rutePerlintasan.appendChild(li);
    });
}

document.addEventListener("DOMContentLoaded", updateInfo);

document.querySelectorAll('.hamburger-menu, .hamburger-menuafter').forEach(function(menu) {
    menu.addEventListener('click', function() {
        document.querySelector('.sidebar').classList.toggle('active');
        document.querySelectorAll('.hamburger-menu, .hamburger-menuafter').forEach(function(item) {
            item.classList.toggle('open');
        });
    });
});





