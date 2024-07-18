function tampilkanHasilBMI(bmi) {
    const hasilContainer = document.getElementById('hasil-container');
    hasilContainer.innerHTML = ""; // Kosongkan container sebelum menampilkan hasil baru
  
    let kategori;
    let pesan;
  
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
  
    // Tampilkan kategori dan pesan di HTML
    hasilContainer.innerHTML += `<h2>Hasil BMI</h2>`;
    hasilContainer.innerHTML += `<p>Kategori: ${kategori}</p>`;
    hasilContainer.innerHTML += `<p>${pesan}</p>`;
  }  