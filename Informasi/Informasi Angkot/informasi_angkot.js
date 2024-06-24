document.getElementById("btn-angkot").addEventListener("click", function() {
    window.location.href = "../InformasiAngkot/InformasiAngkot.html";
}); 

document.getElementById("btn-bus").addEventListener("click", function() {
    window.location.href = "../InformasiBus/InformasiBus.html";
});

const angkotData = {
    "ADL": {
        tujuan: "Arjosari - Dinoyo - Landungsari",
        rute: ["Terminal Arjosari", "Jl. Simpang Panji Suroso", "Jl. Raden Intan", "Jl. Jenderal A. Yani", "Jl. Letjen S. Parman", "Jl. Letjend Sutoyo", "Jl. WR. Supratman", "Jl. PB. Sudirman", "Jl. Pattimura", "Jl. Trunojoyo", "Jl. Tugu", "Jl. Kahuripan", "Jl. Semeru", "Jl. Ijen", "Jl. Bandung", "Jl. Veteran", "Jl. Bogor", "Jl. Mayjen Panjaitan", "Jl. MT. Haryono", "Jl. Raya Tlogomas", "Terminal Landungsari"]
    },
    "ABH": {
        tujuan: "Arjosari - Borobudur - Hamid Rusdi",
        rute: ["Terminal Arjosari", "Jl. Simpang Panji Suroso", "Jl. Borobudur", "Jl. Hamid Rusdi"]
    },
    "ABB": { 
        tujuan: "Arjosari - Borobudur - Bunulrejo",
        rute: ["Terminal Arjosari", "Jl. Simp. R.Panji Suroso", "Jl. Raden Intan", "Jl. Jenderal A. Yani", "Jl. Letjen S. Parman", "Jl. Ciliwung", "Jl. S. Priyosudarmo", "Jl. RT. Suryo", "Jl. PB. Sudirman", "Jl. Pattimura", "Jl. Belakang RSU Syaiful Anwar", "Jl. Kahuripan", "Jl. Semeru", "Jl. Arjuno", "Jl. Kawi", "Jl. Panderman", "Jl. Wilis", "Jl. Gading", "Jl. Sanggabuana", "Jl. Galunggung", "Jl. Bukit Barisan", "Jl. Lokon", "Jl. Tidar", "Jl. Puncak Mandala", "Tidar"]
    },
    "AH": {
        tujuan: "Arjosari - Hamid Rusdi",
        rute: ["Terminal Arjosari", "Jl. Simpang R. Panji Suroso", "Jl S. Priyosudarmo", "Jl. R. Intan", "Jl. Letjend S. Parman", "Jl. Letjend Sutoyo", "Jl. J. A. Suprapto", "Jl. Jend. Basuki Rachmad", "Jl. Merdeka Utara", "Jl. Merdeka Timur", "Jl. S. Wiryo Pranoto", "Jl. Pasar Besar", "Jl. Sersan Harun", "Jl. Kyai Tamin", "Jl. Prof. Moh. Yamin", "Jl. Sartono SH", "Jl. Kol. Sugiono", "Terminal Hamid Rusdi"]
    },
    "AJH": {
        tujuan: "Arjosari - Janti - Hamid Rusdi",
        rute: ["Terminal Arjosari", "Jl. Simpang R. Panji Suroso", "Jl. LA. Sucipto", "Jl. Jenderal A. Yani", "Jl. Letjend S. Parman", "Jl. Letjend Sutoyo", "Jl. Indragiri", "Jl. RT. Suryo", "Jl. Hamid Rusdi", "Jl. Kesatrian Terusan", "Jl. Urip Sumoharjo", "Jl. Pattimura", "Jl. Trunojoyo", "Jl. Jembatan Pahlawan", "Jl. Ir. Juanda", "Jl. Zaenal Zakse", "Jl. Laks. Martadinata", "Jl. Kyai Tamin", "Jl. Prof. Moh Yamin", "Jl. Peltu Sujono", "Jl. Susanto", "Jl. Niaga", "Jl. Sonokeling", "Jl. Janti", "Jl. S. Supriadi", "Jl. Satsui Tubun", "Terminal Hamid Rusdi"]
    },
    "AL": {
        tujuan: "Arjosari - Landungsari",
        rute: ["Terminal Arjosari", "Jl. Simpang R. Panji Suroso", "Jl. R. Panji Suroso", "Jl. LA Sucipto", "Jl. Tenaga", "Jl. Karya Timur", "Jl. Mahakam", "Jl. WR. Supratman", "Jl. PB. Sudirman", "Jl. Pattimura", "Jl. Trunojoyo", "Jl. Kertanegara", "Jl. Tugu", "Jl. Kahuripan", "Jl. Semeru", "Jl. Ijen", "Jl. Retawu", "Jl. Bondowoso", "Jl. Jombang", "Jl. Surabaya", "Jl. Jakarta", "Jl. Bogor", "Jl. Veteran", "Jl. Sumbersari", "Jl. Gajayana", "Jl. MT. Haryono", "Jl. Raya Tlogomas", "Terminal Landungsari"]
    },
    "AMH": {
        tujuan: "Arjosari - Mergosono - Hamid Rusdi",
        rute: ["Terminal Arjosari", "Jl. Simpang R. Panji Suroso", "Jl. S. Priyosudarmo", "Jl. RT. Suryo", "Jl. Hamid Rusdi", "Jl. Kesatrian Terusan", "Jl. Urip Sumoharjo", "Jl. PB. Sudirman", "Jl. Ir. Juanda", "Jl. Kebalon", "Jl. Kol Sugiyono", "Terminal Hamid Rusdi"]
    },
    "AT": {
        tujuan: "Arjosari - Tidar",
        rute: ["Terminal Arjosari", "Jl. Simpang R. Panji Suroso", "Jl. Raden Intan", "Jl. Jenderal A. Yani", "Jl. Letjend S. Parman", "Jl. Ciliwung", "Jl. S. Priyosudarmo", "Jl. RT. Suryo", "Jl. PB. Sudirman", "Jl. Pattimura", "Jl. Belakang RSU Syaiful Anwar", "Jl. Kahuripan", "Jl. Semeru", "Jl. Arjuno", "Jl. Kawi", "Jl. Panderman", "Jl. Wilis", "Jl. Gading", "Jl. Sanggabuana", "Jl. Galunggung", "Jl. Bukit Barisan", "Jl. Lokon", "Jl. Tidar", "Jl. Puncak Mandala", "Tidar"]
    },
    "HA": {
        tujuan: "Hamid Rusdi - Arjosari",
        rute: ["Terminal Hamid Rusdi", "Jl. A. Satsui Tubun", "Jl. S. Supriyadi", "Jl. Arief Margono", "Jl. AI. Suryani", "Jl. KH. Wachid Hasyim", "Jl. Kauman", "Jl. KH. Hasyim Ashari", "Jl. AR. Hakim", "Jl. Merdeka Utara", "Jl. MGR. Sugiowiryopranoto", "Jl. Mojopahit", "Jl. Tugu", "Jl. Untung Suropati", "Jl. Pajajaran", "Jl. Trunojoyo", "Jl. HOS. Cokroaminoto", "Jl. Dr. Cipto", "Jl. PB. Sudirman", "Jl. WR. Supratman", "Jl. Letjend Sutoyo", "Jl. Letjend S. Parman", "Jl. Jend. A. Yani", "Jl. Raden Intan", "Terminal Arjosari"]
    },
    "HL": {
        tujuan: "Hamid Rusdi - Landungsari",
        rute: ["Terminal Hamid Rusdi", "Jl. Satsui Tubun", "Jl. S. Supriyadi", "Jl. Janti", "Jl. Sonokeling", "Jl. Niaga", "Jl. Susanto", "Jl. Halmahera", "Jl. Sampo", "Jl. Kalimantan", "Jl. Sulawesi", "Jl. Yulius Usman", "Jl. Arief Margono", "Jl. KH. Hasyim Ashari", "Jl. Kawi", "Jl. Ijen", "Jl. Retawu", "Jl. Gede", "Jl. Jakarta", "Jl. Garut", "Jl. Bandung", "Jl. Veteran", "Jl. Sumbersari", "Jl. Gajayana", "Jl. MT. Haryono", "Jl. Raya Tlogomas", "Terminal Landungsari"]
    },
    "HM": {
        tujuan: "Hamid Rusdi - Mulyorejo",
        rute: ["Terminal Hamid Rusdi", "Jl. Kol. Sugiono", "Jl. Susanto", "Jl. Irian Jaya", "Jl. Tanimbar", "Jl. Sulawesi", "Jl. Yulius Usman", "Jl. Syarief Al Qodri", "Jl. AI. Suryani", "Jl. Brigjen. Katamso", "Jl. IR. Rais", "Jl. Jupri", "Jl. Raya Bandulan", "Jl. Mulyorejo", "Terminal Mulyorejo"]
    },
    "HML": {
        tujuan: "Hamid Rusdi - Mergan - Landungsari",
        rute: ["Terminal Hamid Rusdi", "Jl. Satsui Tubun", "Jl. S. Supriyadi", "Jl. Janti", "Jl. Sonokeling", "Jl. Niaga", "Jl. Susanto", "Jl. Halmahera", "Jl. Tanimbar", "Jl. Sulawesi", "Jl. Nusakambangan", "Jl. Arief Margono", "Jl. S. Supriyadi", "Jl. Rajawali", "Jl. Ters. Mergan Lori", "Jl. Raya Langsep", "Jl. Galunggung", "Jl. Bukit Barisan", "Jl. Tambora", "Jl. Tidar", "Jl. Simp. Candi", "Jl. Candi", "Jl. Ters. Sigura-gura", "Jl. Belakang IAIN", "Jl. Mertojoyo Selatan", "Jl. MT. Haryono Gg XII", "Jl. Raya Tlogomas", "Terminal Landungsari"]
    },
    "LDH": {
        tujuan: "Landungsari - Dinoyo - Hamid Rusdi",
        rute: ["Terminal Landungsari", "Jl. Raya Tlogomas", "Jl. MT. Haryono", "Jl. Mayjend Panjaitan", "Jl. BS. Riyadi", "Jl. Basuki Rachmad", "Jl. Merdeka Barat", "Jl. Kauman", "Jl. Wachid Hayim", "Jl. A. I. Suryani", "Jl. Pasar Besar", "Jl. Sersan Harun", "Jl. Kyai Tamin", "Jl. Prof M. Yamin", "Jl. Sartono SH", "Jl. Kol. Sugiono", "Terminal Hamid Rusdi"]
    },
    "LH": {
        tujuan: "Landungsari - Hamid Rusdi",
        rute: ["Terminal Landungsari", "Jl. Raya Tlogomas", "Jl. MT. Haryono", "Jl. Gajayana", "Jl. Sumbersari", "Jl. B. Sutami", "Jl. Surabaya", "Jl. Jombang", "Jl. Bondowoso", "Jl. Gading", "Jl. Pulosari", "Jl. Kawi Atas", "Jl. AR. Hakim", "Jl. Merdeka Utara", "Jl. Merdeka Timur", "Jl. Sugiowiryopranoto", "Jl. Sutan Syahrir", "Jl. Kyai Tamin", "Jl. Prof. M. Yamin", "Jl. Sartono SH", "Jl. Peltu Sujono", "Jl. Susanto", "Jl. Niaga", "Jl. Sonokeling", "Jl. Janti", "Jl. S. Supriyadi", "Jl. Satsui Tubun", "Terminal Hamid Rusdi"]
    },
    "MK": {
        tujuan: "Madyopuro - Karang Besuki",
        rute: ["Terminal Madyopuro", "Jl. Ki. Ageng Gribig", "Jl. Muharto", "Jl. Zaenal Zakse", "Jl. Pasar Besar", "Jl. Zaenal Arifin", "Jl. A. Munandar", "Jl. MGR. Sugiowiryopranoto", "Jl. Merdeka Timur", "Jl. Merdeka Selatan", "Jl. Kauman", "Jl. KH. Hasyim Ashari", "Jl. Kawi", "Jl. Ijen", "Jl. Pahlawan Trip", "Jl. Surabaya", "Jl. Bend. Sutami", "Jl. Klaseman", "Karang Besuki"]
    },
    "MM": {
        tujuan: "Mulyorejo - Madyopuro",
        rute: ["Terminal Mulyorejo", "Jl. Raya Mulyorejo", "Jl. Raya Bandulan", "Jl. Jupri", "Jl. Raya Langsep", "Jl. Raya Dieng", "Jl. Kawi Atas", "Jl. Kawi", "Jl. AR. Hakim", "Jl. Merdeka Utara", "Jl. MGR. Sugiowiryopranoto", "Jl. Mojopahit", "Jl. Tugu", "Jl. Kertanegara", "Jl. Trunojoyo", "Jl. Pattimura", "Jl. Urip Sumoharjo", "Jl. Mayjend M. Wiyono", "Jl. Ranu Grati", "Jl. Danau Toba", "Kl. Ki. Ageng Gribig", "Terminal Madyopuro"]
    },
    "MT": {
        tujuan: "Mulyorejo - Tlogowaru",
        rute: ["Terminal Mulyorejo", "Jl. Sutan Syahrir", "Jl. Kyai Tamin", "Jl. Laks. Martadinata", "Jl. Gatot Subroto", "Jl. Ir. H. Juanda", "Jl. Muharto", "Jl. Ki Ageng Gribig", "Jl. Mayjen Sungkono", "Jl. Wonokoyo", "Tlogowaru"]
    }
};

 
function updateInfo() {
    const jenisAngkot = document.getElementById('jenis-angkot').value;
    const tujuanInput = document.getElementById('tujuan-angkutan');
    const ruteList = document.getElementById('rute-perlintasan');

    const data = angkotData[jenisAngkot];
    if (data) {
        tujuanInput.value = data.tujuan;
        ruteList.innerHTML = data.rute.map(rute => `<li>${rute}</li>`).join('');
    }
}  

document.addEventListener("DOMContentLoaded", () => {
    updateInfo();
});

document.querySelectorAll('.hamburger-menu, .hamburger-menuafter').forEach(function(menu) {
    menu.addEventListener('click', function() {
        document.querySelector('.sidebar').classList.toggle('active');
        document.querySelectorAll('.hamburger-menu, .hamburger-menuafter').forEach(function(item) {
            item.classList.toggle('open');
        });
    });
});

