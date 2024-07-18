const form = document.getElementById('bmi-form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Mencegah submit form default

  const tinggi = parseFloat(document.getElementById('tinggi').value);
  const berat = parseFloat(document.getElementById('berat').value);

  // Hitung BMI (rumus BMI = berat / (tinggi/100)^2)
  const bmi = berat / Math.pow(tinggi / 100, 2);

  // Panggil fungsi untuk menampilkan hasil BMI
  tampilkanHasilBMI(bmi);
});
function tampilkanHasilBMI(bmi) {
    const hasilContainer = document.getElementById('hasil-container');
    hasilContainer.innerHTML = ""; // Kosongkan container sebelum menampilkan hasil baru
  
    let kategori;
    let pesan;
    let jenisKelamin = document.getElementById('jenis-kelamin').value;
  
    if (jenisKelamin === "laki-laki") {
      jenisKelamin = "Laki-laki";
    } else if (jenisKelamin === "perempuan") {
      jenisKelamin = "Perempuan";
    }
  
    if (bmi < 18.5) {
      kategori = "Kekurangan Berat Badan";
      pesan = "Berat badan Anda berada di bawah batas normal.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      kategori = "Berat Badan Normal";
      pesan = "Berat badan Anda berada di batas normal.";
    } else if (bmi >= 25 && bmi <= 29.9) {
      kategori = "Kelebihan Berat Badan";
      pesan = "Berat badan Anda sedikit di atas batas normal.";
    } else if (bmi >= 30) {
      kategori = "Obesitas";
      pesan = "Berat badan Anda jauh di atas batas normal.";
    }
  
    // Tampilkan hasil BMI di elemen HTML
    hasilContainer.innerHTML += `<h2>Hasil BMI ${jenisKelamin}</h2>`;
    hasilContainer.innerHTML += `<p>BMI: ${bmi.toFixed(2)}</p>`;
    hasilContainer.innerHTML += `<p>Kategori: ${kategori}</p>`;
    hasilContainer.innerHTML += `<p>${pesan}</p>`;
}