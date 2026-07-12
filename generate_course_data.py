import json

content = """export const courseData = {
  1: {
    kicker: "Checkpoint 01 · Mulai di sini",
    title: "Eksplorasi Data Pribadi",
    duration: "Video 1 · Konsep dasar",
    videoId: "cWfbcaSg7Eo",
    startSeconds: 0,
    endSeconds: 900,
    bookmarks: [
      {"time": 10, "label": "Pengantar Data Pribadi"},
      {"time": 300, "label": "Data Sensitif vs Publik"},
      {"time": 600, "label": "Penggunaan Data di Aplikasi"}
    ],
    quizzes: [],
    summaryHtml: `
      <header class="reading-header">
        <div>
          <p class="label">Materi Bacaan 01</p>
          <h3>Eksplorasi Data Pribadi</h3>
        </div>
      </header>
      <article class="reading-section">
        <h4>Apa itu Data Pribadi?</h4>
        <div class="slide-text">
          <p><strong>Data Pribadi</strong> adalah informasi khusus yang menunjuk <strong>LANGSUNG</strong> kepadamu. Informasi ini bisa membuat orang lain mengenali siapa dirimu, di mana kamu tinggal, dan bagaimana cara menghubungimu.</p>
          <div class="quote-box">Informasi pribadi adalah milikmu seutuhnya (privat). Jangan membagikannya sembarangan!</div>
        </div>
        <h4>Jenis-jenis Data</h4>
        <div class="slide-text">
          <div class="info-grid">
            <div class="mini-card" style="background-color:#E8F5E9;">
              <h3>Data Publik (Aman) 🟢</h3>
              <p>Informasi yang aman diketahui orang banyak (contoh: hobi, film kesukaan, nama panggilan).</p>
            </div>
            <div class="mini-card" style="background-color:#FFEBEE;">
              <h3>Data Sensitif (Rahasia) 🔴</h3>
              <p>Informasi krusial yang bisa disalahgunakan (contoh: Password, NIK, lokasi akurat, nama ibu kandung).</p>
            </div>
          </div>
        </div>
        <h4>Izin Aplikasi (App Permissions)</h4>
        <div class="slide-text">
          <p>Aplikasi sering meminta izin akses ke perangkatmu. Kita harus selalu bertanya: <em>"Apakah aplikasinya benar-benar butuh data itu?"</em></p>
          <ul>
            <li><strong>Wajar:</strong> Aplikasi Ojek Online meminta akses Lokasi (GPS).</li>
            <li><strong>Mencurigakan:</strong> Aplikasi Kalkulator meminta akses Kamera dan Kontak Telepon.</li>
          </ul>
        </div>
        <h4>Praktek MIT App Inventor</h4>
        <div class="slide-text">
          <p>Di App Inventor, kita mengumpulkan data menggunakan input dari pengguna.</p>
          <div class="app-screen">
            <p><strong>Komponen Input Dasar:</strong></p>
            <p><span class="block-badge block-ui">TextBoxNama</span> <span class="block-badge block-ui">TextBoxUsername</span> <span class="block-badge block-ui">ButtonSimpan</span></p>
          </div>
        </div>
      </article>
    `
  },
  2: {
    kicker: "Checkpoint 02 · Tanggung Jawab",
    title: "Etika dan Tanggung Jawab Digital",
    duration: "Video 2 · Etika Data",
    videoId: "cWfbcaSg7Eo",
    startSeconds: 904,
    endSeconds: 1720,
    bookmarks: [
      {"time": 905, "label": "Penyalahgunaan Data"},
      {"time": 1200, "label": "Dampak Kebocoran Data"},
      {"time": 1500, "label": "Menjaga Privasi Digital"}
    ],
    quizzes: [],
    summaryHtml: `
      <header class="reading-header">
        <div>
          <p class="label">Materi Bacaan 02</p>
          <h3>Etika dan Tanggung Jawab Digital</h3>
        </div>
      </header>
      <article class="reading-section">
        <h4>Dampak Data Bocor</h4>
        <div class="slide-text">
          <p>Jika data sensitifmu bocor, orang tak bertanggung jawab bisa menyalahgunakannya. Dampaknya sangat fatal:</p>
          <ul>
            <li><strong>Pencurian Identitas:</strong> Hacker menggunakan nama & fotomu untuk menipu orang lain.</li>
            <li><strong>Kerugian Finansial:</strong> Peretas mengakses rekening atau menipu keluargamu.</li>
            <li><strong>Ancaman Fisik:</strong> Oversharing lokasi (Live Location) bisa mengundang kejahatan.</li>
          </ul>
        </div>
        <h4>Cara Melindungi Privasi</h4>
        <div class="slide-text">
          <div class="info-grid">
            <div class="mini-card" style="background-color:#E3F2FD;">
              <h3>1. Password Kuat 🔑</h3>
              <p>Gunakan kombinasi Huruf Besar, Kecil, Angka, dan Simbol. Jangan gunakan tanggal lahir!</p>
            </div>
            <div class="mini-card" style="background-color:#FFF3E0;">
              <h3>2. Waspada Phishing 🎣</h3>
              <p>Jangan klik link mencurigakan dari WhatsApp yang menawarkan hadiah tak masuk akal.</p>
            </div>
          </div>
        </div>
        <h4>Fitur Keamanan di App Inventor</h4>
        <div class="slide-text">
          <p>Sebagai developer, kita wajib menjaga data pengguna. Salah satunya dengan mengamankan form Login.</p>
          <div class="app-screen">
            <p><strong>Komponen Keamanan:</strong></p>
            <p>Gunakan <span class="block-badge block-ui">PasswordTextBox</span> agar teks yang diketik berubah menjadi bintang-bintang (••••••).</p>
          </div>
          <div class="block-code">
            <span class="block-badge block-control">when ButtonLogin.Click</span><br/>
            <span class="block-badge block-control">if</span> <span class="block-badge block-math">is empty</span> <span class="block-badge block-ui">PasswordTextBox.Text</span><br/>
            <span class="block-badge block-control">then</span> <span class="block-badge block-ui">set LabelPeringatan.Text</span> <span class="block-badge block-text">"Error: Password kosong!"</span>
          </div>
        </div>
      </article>
    `
  },
  3: {
    kicker: "Checkpoint 03 · Logika Data",
    title: "Penyimpanan Data dengan TinyDB",
    duration: "Video 3 · Penyimpanan Lokal",
    videoId: "cWfbcaSg7Eo",
    startSeconds: 1720,
    endSeconds: 2560,
    bookmarks: [
      {"time": 1720, "label": "Konsep Database Lokal"},
      {"time": 2000, "label": "Fungsi TinyDB"},
      {"time": 2300, "label": "Data Sementara vs Permanen"}
    ],
    quizzes: [],
    summaryHtml: `
      <header class="reading-header">
        <div>
          <p class="label">Materi Bacaan 03</p>
          <h3>Penyimpanan Data dengan TinyDB</h3>
        </div>
      </header>
      <article class="reading-section">
        <h4>Masalah Data Sementara</h4>
        <div class="slide-text">
          <p>Menyimpan skor menggunakan <strong>Global Variable</strong> sangat rawan hilang. Begitu aplikasi ditutup, data akan kembali ke angka 0.</p>
          <div class="quote-box">Untuk data permanen (tidak terhapus walau HP direstart), kita menggunakan Database Lokal.</div>
        </div>
        <h4>Berkenalan dengan TinyDB</h4>
        <div class="slide-text">
          <p><strong>TinyDB</strong> adalah database lokal (penyimpanan di memori fisik HP) yang tidak butuh kuota internet. TinyDB merupakan <em>Non-Visible Component</em> (bekerja di latar belakang).</p>
          <div class="info-grid">
            <div class="mini-card" style="background-color:#E8F5E9;">
              <h3>Tag (Label) 🏷️</h3>
              <p>Nama/judul tempat menyimpan data. Harus unik! Contoh: <em>"SkorTertinggi"</em>.</p>
            </div>
            <div class="mini-card" style="background-color:#E3F2FD;">
              <h3>Value (Isi) 📦</h3>
              <p>Isi data yang disimpan. Contoh: angka <em>100</em> atau teks <em>"Budi"</em>.</p>
            </div>
          </div>
        </div>
        <h4>Blok StoreValue di App Inventor</h4>
        <div class="slide-text">
          <p>Untuk menaruh data ke dalam TinyDB, kita menggunakan perintah <strong>StoreValue</strong>.</p>
          <div class="block-code">
            <span class="block-badge block-control">call TinyDB1.StoreValue</span><br/>
            &nbsp;&nbsp;&nbsp;&nbsp;tag: <span class="block-badge block-text">"SkorGame"</span><br/>
            &nbsp;&nbsp;&nbsp;&nbsp;valueToStore: <span class="block-badge block-math">100</span>
          </div>
          <p>Blok di atas berarti: Simpan angka 100 ke dalam laci bernama "SkorGame".</p>
        </div>
      </article>
    `
  },
  4: {
    kicker: "Checkpoint 04 · Praktik Mengelola",
    title: "Mengelola Data Aman di TinyDB",
    duration: "Video 4 · CRUD dan Keamanan",
    videoId: "cWfbcaSg7Eo",
    startSeconds: 2560,
    endSeconds: 3290,
    bookmarks: [
      {"time": 2560, "label": "Menampilkan & Update Data"},
      {"time": 2800, "label": "Menghapus Data (Delete)"},
      {"time": 3060, "label": "Flowchart Penyimpanan"},
      {"time": 3150, "label": "Keamanan Data Lokal"}
    ],
    quizzes: [],
    summaryHtml: `
      <header class="reading-header">
        <div>
          <p class="label">Materi Bacaan 04</p>
          <h3>Mengelola Data Aman di TinyDB</h3>
        </div>
      </header>
      <article class="reading-section">
        <h4>Mengambil Data (GetValue)</h4>
        <div class="slide-text">
          <p>Setelah data disimpan menggunakan StoreValue, kita bisa memanggilnya kembali menggunakan <strong>GetValue</strong>.</p>
          <div class="block-code">
            <span class="block-badge block-control">set LabelOutput.Text to</span> <br/>
            <span class="block-badge block-control">call TinyDB1.GetValue</span><br/>
            &nbsp;&nbsp;&nbsp;&nbsp;tag: <span class="block-badge block-text">"SkorGame"</span><br/>
            &nbsp;&nbsp;&nbsp;&nbsp;valueIfTagNotThere: <span class="block-badge block-math">0</span>
          </div>
          <p>Jika Tag tidak ditemukan (karena belum pernah disimpan), aplikasi akan menggunakan <em>valueIfTagNotThere</em> sebagai cadangan.</p>
        </div>
        <h4>Menghapus Data (ClearTag)</h4>
        <div class="slide-text">
          <p>Jika pengguna ingin mereset akun atau menghapus data riwayat, kita harus menyediakan fitur Hapus Data (ClearTag).</p>
          <div class="block-code">
            <span class="block-badge block-control">call TinyDB1.ClearTag</span><br/>
            &nbsp;&nbsp;&nbsp;&nbsp;tag: <span class="block-badge block-text">"SkorGame"</span>
          </div>
        </div>
        <h4>Keamanan Database Lokal</h4>
        <div class="slide-text">
          <p>Meskipun data disimpan lokal di HP, ada risiko jika HP-mu hilang atau dipinjam orang tanpa izin. Oleh karena itu:</p>
          <ul>
            <li>Gunakan sistem kunci (Login Screen) sebelum bisa masuk ke halaman yang menampilkan isi TinyDB.</li>
            <li>Jangan pernah membuat aplikasi menyimpan data pengguna tanpa persetujuan mereka.</li>
          </ul>
        </div>
      </article>
    `
  },
  5: {
    kicker: "Checkpoint 05 · Hands-on",
    title: "Mini Project Tiny DB",
    duration: "Video 5 · Tantangan Akhir",
    videoId: "cWfbcaSg7Eo",
    startSeconds: 3290,
    endSeconds: 3321,
    bookmarks: [
      {"time": 3290, "label": "Instruksi Mini Project"}
    ],
    quizzes: [],
    summaryHtml: `
      <header class="reading-header">
        <div>
          <p class="label">Mini Project</p>
          <h3>Tantangan Akhir: Sistem CRUD Data Rahasia</h3>
        </div>
      </header>
      <article class="reading-section">
        <h4>Misi Kalian 🏆</h4>
        <div class="slide-text">
          <p>Sekarang giliranmu merakit aplikasi secara utuh! Tonton instruksi video untuk mengerjakan mini project ini.</p>
          <ul>
            <li>Desain UI yang rapi dan menarik.</li>
            <li>Gunakan <strong>StoreValue</strong> untuk tombol Simpan. (Pastikan pakai Tag rahasiamu sendiri).</li>
            <li>Gunakan <strong>GetValue</strong> untuk tombol Baca dan tampilkan hasilnya ke Label Output.</li>
            <li>Gunakan <strong>ClearTag</strong> untuk tombol Hancurkan Data agar memori kembali bersih!</li>
          </ul>
        </div>
      </article>
    `
  }
};
"""

with open("/Users/yazidhilmi/Documents/cloud/Kalananti-cloud/Academic_Content/B2B/UOB/Async/Middleschool/grupB/dashboard/src/courseData.js", "w") as f:
    f.write(content)

print("courseData.js generated successfully")
