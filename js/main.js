// Data pengurus: ubah nama/jabatan di sini. Foto: taruh di assets/images/pengurus/ sesuai nama file.
const pengurus=[
{nama:'Naufal Habiburrahman',jabatan:'Kepala Unit',foto:'01-naufal.jpg'},
{nama:'Maulana Robby',jabatan:'Vice Manajer & Rutin',foto:'02-robby.jpg'},
{nama:'Sultan Damar Septyansyah',jabatan:'Sekretaris 1',foto:'03-sultan.jpg'},
{nama:'Dina Kamila',jabatan:'Sekretaris 2',foto:'04-dina.jpg'},
{nama:'Nur Zahra Christalya',jabatan:'Bendahara 1',foto:'05-zahra.jpg'},
{nama:'Eagle Johnson Queen',jabatan:'Bendahara 2',foto:'06-eagle.jpg'},
{nama:'Naya Azka Putri Winarto',jabatan:'Humas',foto:'07-naya.jpg'},
{nama:'Gabriella Erica Hardiyan',jabatan:'Kesekretariatan',foto:'08-gabriella.jpg'},
{nama:'Faiz Rayhan Raffael',jabatan:'Perlengkapan 1',foto:'09-faiz.jpg'},
{nama:'Prisna Dwi Hanggandau',jabatan:'Perlengkapan 2',foto:'10-prisna.jpg'}];
document.getElementById('pengurusGrid').innerHTML=pengurus.map((p,n)=>`<article class="pcard"><span class="num">#${String(n+1).padStart(2,"0")}</span><h3 class="pop role">${p.jabatan}</h3><div class="slot" data-src="assets/images/pengurus/${p.foto}" data-alt="Foto ${p.nama}"></div><p class="name">${p.nama}</p></article>`).join('');
// Slot foto: jika file ada, tampil; jika belum, tampil kotak penanda nama file.
document.querySelectorAll('.slot').forEach(s=>{const i=new Image();i.src=s.dataset.src;i.alt=s.dataset.alt||'';i.loading='lazy';i.onerror=()=>i.remove();i.onload=()=>s.classList.add("has");s.appendChild(i)});
document.getElementById('yr').textContent=new Date().getFullYear();
