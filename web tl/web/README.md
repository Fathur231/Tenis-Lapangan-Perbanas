# Website UKM Tenis Lapangan - UHW Perbanas Surabaya

Website statis (HTML, CSS, JS). Tidak perlu instalasi apa pun.

## Cara melihat di VS Code
Install ekstensi **Live Server**, klik kanan `index.html` lalu **Open with Live Server**.

## Menambah foto
Taruh foto di `assets/images/` dengan nama persis seperti yang tertulis di kotak putus-putus pada halaman:
- `hero.jpg`, `tentang.jpg`, `galeri-1.jpg` sampai `galeri-6.jpg`
- `pengurus/01-naufal.jpg` sampai `pengurus/10-prisna.jpg` (rasio 3:4, foto potret)
Jika file belum ada, kotak penanda tetap tampil. Format .jpg; kalau pakai .png, ubah nama file di `index.html` / `js/main.js`.

## Mengubah isi
- Teks: edit `index.html` (ganti semua `[ ... ]`, nomor WhatsApp `62XXXXXXXXXX`, akun Instagram).
- Pengurus: edit daftar di `js/main.js`.
- Warna: edit variabel di bagian atas `css/style.css`.

## Online-kan
Folder ini bisa diunggah ke Netlify, Vercel, Cloudflare Pages, atau GitHub Pages (semua punya ekstensi/CLI untuk VS Code). Publikasikan folder ini (yang berisi `index.html`) sebagai root.

## Catatan
Foto pengurus, hero, tentang, dan galeri sudah terpasang. Ganti file dengan nama yang sama untuk memperbarui foto.
