export const courseData = {
  1: {
    thumbnail: "./thumb_1.png",
    kicker: "Checkpoint 01 · Mulai di sini",
    title: "Eksplorasi Data Pribadi",
    duration: "Video 1 · Konsep dasar",
    videoId: "cWfbcaSg7Eo",
    startSeconds: 2,
    endSeconds: 887,
    bookmarks: [
      {"time": 10, "label": "Pengantar Data Pribadi"},
      {"time": 300, "label": "Data Sensitif vs Publik"},
      {"time": 600, "label": "Penggunaan Data di Aplikasi"}
    ],
    quizzes: [
      {
        time: 483, // 08:03
        resumeTime: 488, // 08:08
        skipTo: 488, // Skips the segment 08:03-08:08 if replayed
        title: "Mini Kuis 1 🧠",
        questions: [
          {
            qid: "V1_Q1",
            question: "Manakah di bawah ini yang merupakan Data Pribadi SENSITIF?",
            options: [
              "Warna kesukaanmu",
              "Nomor Induk Kependudukan (NIK)",
              "Merek sepatu yang sering kamu pakai"
            ],
            answer: "Nomor Induk Kependudukan (NIK)",
            explanation: "NIK adalah identitas unik yang sangat rahasia dan dapat disalahgunakan jika jatuh ke tangan yang salah."
          }
        ]
      },
      {
        time: 735, // 12:15
        resumeTime: 740, // 12:20
        skipTo: 740, // Skips 12:15-12:20
        title: "Mini Kuis 2 🧠",
        questions: [
          {
            qid: "V1_Q2",
            question: "Aplikasi apa yang wajar dan masuk akal jika meminta izin mengakses Microphone (Mic)?",
            options: [
              "Aplikasi Perekam Suara (Voice Note)",
              "Aplikasi Senter HP",
              "Aplikasi Kalkulator"
            ],
            answer: "Aplikasi Perekam Suara (Voice Note)",
            explanation: "Aplikasi perekam suara butuh Mic, sedangkan senter atau kalkulator tidak masuk akal jika meminta mic."
          }
        ]
      },
      {
        time: 885, // 14:45, before the 14:47 segment boundary
        title: "Mini Kuis 3 🧠",
        questions: [
          {
            qid: "V1_Q3",
            question: "Di manakah sebaiknya kamu menaruh 'Password Akun Game'-mu?",
            options: [
              "Di profil Bio Instagram (Publik)",
              "Di catatan/brankas yang aman (Sensitif)",
              "Di grup WhatsApp kelas (Publik)"
            ],
            answer: "Di catatan/brankas yang aman (Sensitif)",
            explanation: "Password adalah data sensitif yang harus disimpan dengan aman dan tidak dipublikasikan ke publik."
          }
        ]
      }
    ],
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
    thumbnail: "./thumb_2.png",
    kicker: "Checkpoint 02",
    title: "Etika dan Tanggung Jawab Digital",
    duration: "Video 2 · Interaktif",
    videoId: "cWfbcaSg7Eo",
    startSeconds: 899, // 14:59
    endSeconds: 1701,  // 28:21
    bookmarks: [
      {"time": 900, "label": "Etika Berinternet"},
      {"time": 1200, "label": "Phishing & Penipuan"},
      {"time": 1400, "label": "Membuat Password Kuat"}
    ],
    quizzes: [
      {
        time: 1273, // 21:13
        resumeTime: 1278, // 21:18
        skipTo: 1278,
        title: "Mini Kuis 4 🧠",
        questions: [
          {
            qid: "V2_Q1",
            question: "Jika ada seseorang menelepon mengaku dari pihak Bank dan meminta nomor PIN ATM-mu, apa yang harus kamu lakukan?",
            options: [
              "Berikan PIN-nya agar masalah cepat selesai",
              "Matikan telepon, Bank tidak pernah meminta PIN nasabah",
              "Berikan setengah PIN saja"
            ],
            answer: "Matikan telepon, Bank tidak pernah meminta PIN nasabah",
            explanation: "Pihak bank resmi TIDAK PERNAH meminta PIN, password, atau kode OTP kepada nasabahnya."
          }
        ]
      },
      {
        time: 1408, // 23:28
        resumeTime: 1413, // 23:33
        skipTo: 1413,
        title: "Latihan Praktik 💻",
        questions: [
          {
            qid: "V2_LP",
            html: `
              <div class="interactive-sandbox">
                <p style="margin-top:0; margin-bottom:12px; font-size:1.05rem;"><strong>Buat Password yang Kuat!</strong></p>
                <p style="margin-bottom:16px; font-size:0.95rem; color:var(--text-gray);">Pastikan password-mu minimal 8 karakter, mengandung huruf besar, huruf kecil, angka, dan simbol.</p>
                <div style="display:flex; flex-direction:column; gap:12px; margin-bottom:16px;">
                  <input type="text" id="pass-input" placeholder="Masukkan password kuat (contoh: Kucing@123)" style="padding:12px; border:2px solid var(--line); border-radius:8px; font-size:1rem;">
                </div>
                <div>
                  <button type="button" class="check-code-btn" onclick="window.checkPasswordGuess(this)">Cek Kekuatan Password</button>
                </div>
                <div class="sandbox-feedback" style="display:none; margin-top:16px; padding:12px; border-radius:8px; font-size:0.95rem;"></div>
              </div>
            `
          }
        ]
      },
      {
        time: 1548, // 25:48
        resumeTime: 1553, // 25:53
        skipTo: 1553,
        title: "Mini Kuis 5 🧠",
        questions: [
          {
            qid: "V2_Q2",
            question: "Manakah password di bawah ini yang paling kuat dan aman dari serangan hacker?",
            options: [
              "12345678",
              "namakucingku",
              "G@r0d4_B1rU!99"
            ],
            answer: "G@r0d4_B1rU!99",
            explanation: "Password tersebut mengandung huruf besar, huruf kecil, angka, dan simbol (karakter khusus)."
          }
        ]
      },
      {
        time: 1700, // 28:20
        title: "Mini Kuis 6 🧠",
        questions: [
          {
            qid: "V2_Q3",
            question: "Mengapa kita menggunakan blok 'is empty' saat memproses form Login?",
            options: [
              "Untuk menghapus password pengguna",
              "Untuk mencegah pengguna mengirim form jika belum mengisi password",
              "Untuk mengecek apakah HP kehabisan baterai"
            ],
            answer: "Untuk mencegah pengguna mengirim form jika belum mengisi password",
            explanation: "Blok 'is empty' memastikan bahwa pengguna tidak mengirimkan data yang kosong."
          }
        ]
      }
    ],
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
    thumbnail: "./thumb_3.png",
    kicker: "Checkpoint 03 · Logika Data",
    title: "Penyimpanan Data dengan TinyDB",
    duration: "Video 3 · Penyimpanan Lokal",
    videoId: "cWfbcaSg7Eo",
    startSeconds: 1715, // 28:35
    endSeconds: 2547, // 42:27
    bookmarks: [
      {"time": 1715, "label": "Konsep Database Lokal"},
      {"time": 2000, "label": "Fungsi TinyDB"},
      {"time": 2300, "label": "Data Sementara vs Permanen"}
    ],
    quizzes: [
      {
        time: 2090, // 34:50
        resumeTime: 2092, // 34:52
        skipTo: 2092,
        title: "Mini Kuis 7 🧠",
        questions: [
          {
            qid: "V3_Q1",
            question: "Jika kamu ingin membuat fitur 'To-Do List' yang datanya tidak terhapus walau HP direstart, komponen apa yang WAJIB dipakai?",
            options: [
              "Global Variable",
              "TextBox Component",
              "TinyDB (Database Lokal)"
            ],
            answer: "TinyDB (Database Lokal)",
            explanation: "TinyDB menyimpan data secara permanen di memori HP, berbeda dengan variabel yang terhapus saat aplikasi ditutup."
          }
        ]
      },
      {
        time: 2546, // 42:26
        title: "Mini Kuis 8 🧠",
        questions: [
          {
            qid: "V3_Q2",
            question: "Dalam konsep TinyDB, apa fungsi dari sebuah 'Tag'?",
            options: [
              "Sebagai isi data sesungguhnya yang akan disimpan",
              "Sebagai stiker penamaan (judul) agar data mudah dicari di laci",
              "Sebagai warna latar belakang aplikasi"
            ],
            answer: "Sebagai stiker penamaan (judul) agar data mudah dicari di laci",
            explanation: "Tag berfungsi seperti label di laci agar kita tahu data mana yang sedang kita simpan atau ambil."
          }
        ]
      }
    ],
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
    thumbnail: "./thumb_4.png",
    kicker: "Checkpoint 04 · Praktik Mengelola",
    title: "Mengelola Data Aman di TinyDB",
    duration: "Video 4 · CRUD dan Keamanan",
    videoId: "cWfbcaSg7Eo",
    startSeconds: 2555, // 42:35
    endSeconds: 3272, // 54:32
    bookmarks: [
      {"time": 2555, "label": "Menampilkan & Update Data"},
      {"time": 2800, "label": "Menghapus Data (Delete)"},
      {"time": 3060, "label": "Flowchart Penyimpanan"},
      {"time": 3150, "label": "Keamanan Data Lokal"}
    ],
    quizzes: [
      {
        time: 2892, // 48:12
        resumeTime: 2896, // 48:16
        skipTo: 2896,
        title: "Mini Kuis 9 🧠",
        questions: [
          {
            qid: "V4_Q1",
            question: "Kamu menggunakan StoreValue dengan Tag 'Koin' nilainya 10. Lalu kamu memakai StoreValue lagi dengan Tag 'Koin' nilainya 50. Berapa nilai 'Koin' saat ini?",
            options: [
              "60 (karena ditambah)",
              "50 (karena ditimpa / di-update)",
              "10 (data pertama yang permanen)"
            ],
            answer: "50 (karena ditimpa / di-update)",
            explanation: "Menyimpan data dengan Tag yang sama akan menimpa/mengganti data lama dengan data baru yang kita masukkan."
          }
        ]
      },
      {
        time: 3041, // 50:41
        resumeTime: 3050, // 50:50
        skipTo: 3050,
        title: "Mini Kuis 10 🧠",
        questions: [
          {
            qid: "V4_Q2",
            question: "Jika kita ingin aplikasi 'melupakan' seluruh data pada sebuah tag tertentu secara permanen, blok apa yang digunakan?",
            options: [
              "TinyDB1.GetValue",
              "TinyDB1.ClearTag",
              "TinyDB1.StoreValue dengan nilai 0"
            ],
            answer: "TinyDB1.ClearTag",
            explanation: "Blok ClearTag digunakan khusus untuk menghapus atau melupakan data berdasarkan nama Tag yang dipilih."
          }
        ]
      }
    ],
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
    thumbnail: "./thumb_5.png",
    kicker: "Checkpoint 05 · Hands-on",
    title: "Mini Project Tiny DB",
    duration: "Video 5 · Tantangan Akhir",
    videoId: "cWfbcaSg7Eo",
    startSeconds: 3285, // 54:45
    endSeconds: 3323, // 55:23
    bookmarks: [
      {"time": 3285, "label": "Instruksi Mini Project"}
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
