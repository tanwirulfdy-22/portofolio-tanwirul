# 🚀 Portofolio Web Modern - Tanwirul Fuadi

Website portofolio personal yang didesain khusus untuk **Mahasiswa** dengan gaya visual **Modern Dark & Sleek (Masculine Tech Aesthetic)**. Dibuat dengan clean architecture tanpa dependensi berat (Zero build step), langsung siap pakai dan mudah dikustomisasi.

---

## 🌟 Fitur Utama

- **Hero Interaktif:** Efek animasi teks mengetik (*dynamic typing effect*) yang menonjolkan peran & fokus keahlian.
- **Profil Akademik & Mahasiswa:** Menampilkan status kuliah, IPK, minat riset, keunggulan karakter, dan tombol unduh CV.
- **Pendidikan & Organisasi:** Timeline rapi untuk riwayat kampus, himpunan mahasiswa, dan kepanitiaan event.
- **Tech Stack & Visual Progress:** Kategori keahlian frontend, backend, tools pemrograman, dan soft skills.
- **Formulir Kontak WhatsApp Terintegrasi:** Pengunjung dapat mengirim pesan langsung ke WhatsApp pribadi Anda dengan format pesan otomatis.
- **Desain Responsif & Modern:** Mengadopsi Tailwind CSS, Glassmorphism, efek glow, dan font modern (*Plus Jakarta Sans*).

---

## 📁 Struktur File

```
d:\Fuadi\
│
├── index.html              # Halaman utama portofolio
├── README.md               # Panduan penggunaan & kustomisasi
│
└── assets/
    ├── css/
    │   └── style.css       # Custom styling, glow, animasi float, scrollbar
    └── js/
        └── main.js         # Logika interaktif: kontak WA, typing effect, navigasi
```

---

## ⚡ Cara Menjalankan Portofolio di Komputer

Ada 2 cara sangat mudah untuk melihat website ini di browser Anda:

### Cara 1: Langsung Buka File (Paling Cepat)
Cukup buka folder `d:\Fuadi\` di File Explorer komputer Anda, lalu **klik ganda (double-click)** pada file `index.html`. File akan langsung terbuka di browser (Chrome, Edge, Firefox, dll).

### Cara 2: Menjalankan Local Web Server dengan Python
Jika Anda ingin menjalankannya seperti web server asli:
1. Buka terminal / PowerShell di folder `d:\Fuadi`.
2. Jalankan perintah:
   ```bash
   python -m http.server 3000
   ```
3. Buka browser dan kunjungi: **`http://localhost:3000`**

---

## 🛠️ Panduan Kustomisasi Data Pribadi

### 1. Mengubah Nomor WhatsApp untuk Menerima Pesan
Buka file `assets/js/main.js`, cari baris nomor WhatsApp:
```javascript
// Ganti dengan nomor WhatsApp Anda (Gunakan format 62 tanpa tanda '+')
const waNumber = "6281234567890";
```
Ganti `6281234567890` dengan nomor WhatsApp asli Anda.

### 2. Mengubah Foto Profil
Di `index.html` pada bagian avatar profil, Anda bisa mengganti ikon dengan tag gambar `<img>`:
```html
<img src="path/ke/foto-anda.jpg" alt="Fuadi" class="w-full h-full object-cover">
```

### 3. Mengubah Nama Universitas & Jurusan
Buka file `index.html`, cari bagian:
- Bagian Hero: cari kata `Teknik Informatika / IT`
- Bagian Pendidikan: cari kata `Universitas / Perguruan Tinggi` dan ubah menjadi nama kampus Anda (misalnya: *Universitas Indonesia*, *Institut Teknologi Bandung*, dll.)

---

## 🌐 Cara Publikasikan ke Internet (Gratis)

Agar portofolio Anda memiliki link sendiri yang bisa dicantumkan di CV / LinkedIn:

1. **GitHub Pages (Gratis & Populer untuk Developer):**
   - Buat repository baru di GitHub dengan nama `username.github.io`.
   - Upload file `index.html`, folder `assets/`, dan file lainnya.
   - Website otomatis online di: `https://username.github.io`

2. **Netlify Drop (1 Menit Jadi):**
   - Kunjungi [app.netlify.com/drop](https://app.netlify.com/drop).
   - Tarik (*drag-and-drop*) folder `d:\Fuadi` ke halaman tersebut.
   - Netlify akan langsung memberikan URL website gratis yang aktif selamanya!

3. **Vercel:**
   - Hubungkan akun GitHub ke Vercel dan deploy dalam 1 klik.
