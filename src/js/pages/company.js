window.addEventListener('scroll', () => {
  const nav = document.querySelector('.school-nav');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 40);
});


document.getElementById('school-content').innerHTML = `

<!-- ===== HERO ===== -->
<section id="beranda" class="hero-section">
  <div class="container position-relative z-1">
    <div class="row align-items-center g-5">
      <div class="col-lg-6 fade-up">
        <div class="hero-badge">
          <i class="bi bi-patch-check-fill"></i> Akreditasi A — BAN-SM 2024
        </div>
        <h1 class="hero-title">
          Mencetak Generasi <span class="highlight">Unggul &amp; Berkarakter</span>
        </h1>
        <p class="hero-desc">
          SMK Wikrama Bogor hadir sebagai pusat pendidikan vokasi terdepan,
          membekali siswa dengan keahlian teknis, soft skill, dan jiwa
          kewirausahaan untuk siap bersaing di dunia kerja global.
        </p>
        <div class="d-flex flex-wrap gap-3">
          <a href="#ppdb" class="btn-hero-primary">
            <i class="bi bi-pencil-square"></i> Daftar PPDB Sekarang
          </a>
          <a href="#jurusan" class="btn-hero-secondary">
            <i class="bi bi-compass"></i> Lihat Program
          </a>
        </div>
      </div>
      <div class="col-lg-6 fade-up">
        <div class="hero-image-wrap">
          <div class="hero-img-card">
            <!--
              📸 IMAGE SLOT: hero-main
              Ukuran ideal: 900x600px (rasio 3:2, landscape)
              Konten: Foto kegiatan siswa / suasana kampus
              Ganti src di bawah dengan path foto Anda:
            -->
            <img
              src="./src/assets/images/SMK-WIKRAMA-BOGOR.jpg"
              alt="Suasana SMK Wikrama Bogor"
              onerror="this.parentElement.style.background='linear-gradient(135deg,#1e3a7e,#2563eb)';this.style.display='none'"
            />
            <div class="hero-img-badge">
              <div class="num">5.000+</div>
              <div>Alumni Berprestasi</div>
            </div>
          </div>
          <div class="hero-floating-card">
            <div class="icon-wrap"><i class="bi bi-award-fill"></i></div>
            <div>
              <div style="font-size:.75rem;color:var(--text-muted-custom)">Penghargaan</div>
              <div>Sekolah Terbaik Kota Bogor</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="stats-section">
  <div class="container">
    <div class="row g-4">
      <div class="col-6 col-lg-3 fade-up">
        <div class="stat-card">
          <div class="stat-icon gold"><i class="bi bi-patch-check-fill"></i></div>
          <div class="stat-number">A</div>
          <div class="stat-label">Akreditasi BAN-SM</div>
        </div>
      </div>
      <div class="col-6 col-lg-3 fade-up">
        <div class="stat-card">
          <div class="stat-icon blue"><i class="bi bi-people-fill"></i></div>
          <div class="stat-number">5K+</div>
          <div class="stat-label">Total Alumni</div>
        </div>
      </div>
      <div class="col-6 col-lg-3 fade-up">
        <div class="stat-card">
          <div class="stat-icon green"><i class="bi bi-buildings-fill"></i></div>
          <div class="stat-number">120+</div>
          <div class="stat-label">Mitra Industri</div>
        </div>
      </div>
      <div class="col-6 col-lg-3 fade-up">
        <div class="stat-card">
          <div class="stat-icon red"><i class="bi bi-mortarboard-fill"></i></div>
          <div class="stat-number">1.200+</div>
          <div class="stat-label">Siswa Aktif</div>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="profil" class="principal-section">
  <div class="container">
    <div class="row align-items-center g-5">
      <div class="col-lg-5 text-center text-lg-start fade-up">
        <div class="principal-photo-wrap d-inline-block">

          <img
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgYvF15HLagpIAxvdimUQjVri0i5reF6_qqm94M0LGzBk2Xe-i-GF-Tl96KD84F1G01zCUAVA2Zl4NCZwwNiawCgXw8J7k5b564RlHAKCW5m9wOTxl0ygeM7_Hx0DWQXWJMONqxWfA6xq3rZo36_j89k4eZxaEkstIon5QQNgNd4rB5NosPJ8ji96Uh/w400-h300/IMG_9758.JPG"
            alt="Kepala Sekolah SMK Wikrama Bogor"
            onerror="this.src='https://placehold.co/340x420/1A3C6E/FFFFFF?text=Kepala+Sekolah'"
          />
          <div class="principal-photo-accent"></div>
          <div class="principal-photo-accent2"></div>
        </div>
      </div>
      <div class="col-lg-7 fade-up">
        <div class="section-eyebrow text-white opacity-75">Sambutan Kepala Sekolah</div>
        <h2 class="section-title text-white mb-4">Pesan dari Pimpinan Kami</h2>
        <blockquote class="principal-quote">
          "Pendidikan bukan sekadar transfer ilmu, melainkan pembentukan karakter.
          Di SMK Wikrama Bogor, kami berkomitmen untuk mencetak lulusan yang tidak
          hanya kompeten secara teknis, tetapi juga berintegritas dan siap menghadapi
          tantangan era digital."
        </blockquote>
        <div class="principal-divider"></div>
        <div class="principal-name">Iin Mulyani</div>
        <div class="principal-title">Kepala SMK Wikrama Bogor</div>
      </div>
    </div>
  </div>
</section>

<section id="jurusan" class="programs-section">
  <div class="container">
    <div class="text-center mb-5 fade-up">
      <div class="section-eyebrow mx-auto">Program Keahlian</div>
      <h2 class="section-title">Jurusan Unggulan Kami</h2>
      <p class="section-desc mx-auto mt-2">
        Pilih program keahlian yang sesuai dengan minat dan bakat Anda.
        Semua jurusan dirancang bersama mitra industri terkemuka.
      </p>
    </div>
    <div class="row g-4">

      <div class="col-md-6 col-lg-4 fade-up">
        <div class="program-card">
          <div class="program-card-img-placeholder" style="background:linear-gradient(135deg,#dbeafe,#bfdbfe)">💻</div>
          <div class="program-card-body">
            <span class="program-tag">Teknologi</span>
            <div class="program-name">Pengembangan Perangkat Lunak &amp; GIM</div>
            <p class="program-desc">
              Menguasai pemrograman web, mobile, game development, dan rekayasa
              perangkat lunak berbasis industri.
            </p>
            <a href="#" class="btn-learn-more">Selengkapnya <i class="bi bi-arrow-right"></i></a>
          </div>
        </div>
      </div>

      <div class="col-md-6 col-lg-4 fade-up">
        <div class="program-card">
          <div class="program-card-img-placeholder" style="background:linear-gradient(135deg,#fef3c7,#fde68a)">🎨</div>
          <div class="program-card-body">
            <span class="program-tag">Kreatif</span>
            <div class="program-name">Desain Komunikasi Visual</div>
            <p class="program-desc">
              Menggabungkan seni visual, desain grafis, fotografi, videografi, dan
              media digital untuk komunikasi profesional.
            </p>
            <a href="#" class="btn-learn-more">Selengkapnya <i class="bi bi-arrow-right"></i></a>
          </div>
        </div>
      </div>

      <div class="col-md-6 col-lg-4 fade-up">
        <div class="program-card">
          <div class="program-card-img-placeholder" style="background:linear-gradient(135deg,#d1fae5,#a7f3d0)">🛒</div>
          <div class="program-card-body">
            <span class="program-tag">Bisnis</span>
            <div class="program-name">Bisnis Daring &amp; Pemasaran</div>
            <p class="program-desc">
              Membekali siswa dengan kemampuan e-commerce, digital marketing,
              manajemen toko online, dan kewirausahaan digital.
            </p>
            <a href="#" class="btn-learn-more">Selengkapnya <i class="bi bi-arrow-right"></i></a>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<section id="fasilitas" class="facilities-section">
  <div class="container">
    <div class="text-center mb-5 fade-up">
      <div class="section-eyebrow mx-auto">Fasilitas Sekolah</div>
      <h2 class="section-title">Lingkungan Belajar Berstandar Industri</h2>
      <p class="section-desc mx-auto mt-2">
        Fasilitas lengkap dan modern untuk mendukung proses belajar mengajar
        yang optimal dan menyenangkan.
      </p>
    </div>
    <div class="row g-3">
      <div class="col-lg-6 fade-up">
        <div class="facility-card" style="height:420px">
          <img src="https://smkwikrama.sch.id/storage/1724029360-berita.png"
            alt="Lab Komputer"
            onerror="this.parentElement.querySelector('.facility-card-overlay').style.background='linear-gradient(to top,rgba(15,23,42,.9),rgba(26,60,110,.6))';this.style.display='none'"
          />
          <div class="facility-card-overlay">
            <div>
              <i class="bi bi-display text-white me-2"></i>
              <span class="facility-caption">Laboratorium Komputer</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="row g-3">
          <div class="col-6 fade-up">
            <div class="facility-card" style="height:200px">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnbbasLNVw-Ny9AMhnOAj-6KKJzKCtOUiGRw&s"
                alt="Perpustakaan"
              />
              <div class="facility-card-overlay">
                <span class="facility-caption">Perpustakaan Digital</span>
              </div>
            </div>
          </div>
          <div class="col-6 fade-up">
            <div class="facility-card" style="height:200px">
              <img src="/src/assets/images/lapanganwk.jpg"
                alt="Lapangan Olahraga"
              />
              <div class="facility-card-overlay">
                <span class="facility-caption">Lapangan Olahraga</span>
              </div>
            </div>
          </div>
          <div class="col-6 fade-up">
            <div class="facility-card" style="height:200px">
              <img src="https://smkwikrama.sch.id/storage/1684823730-berita$berita.JPG"
                alt="Lab DKV"
              />
              <div class="facility-card-overlay">
                <span class="facility-caption">Studio Desain DKV</span>
              </div>
            </div>
          </div>
          <div class="col-6 fade-up">
            <div class="facility-card" style="height:200px">
              <img src="/src/assets/images/kantinwk.jpg"
                    alt="Kantin & Aula"
              />
              <div class="facility-card-overlay">
                <span class="facility-caption">Kantin &amp; Aula</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ===== NEWS ===== -->
<section class="news-section">
  <div class="container">
    <div class="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-end mb-5 fade-up">
      <div>
        <div class="section-eyebrow">Berita &amp; Kegiatan</div>
        <h2 class="section-title mb-0">Kabar Terbaru Sekolah</h2>
      </div>
      <a href="https://smkwikrama.sch.id/" class="btn btn-outline-primary rounded-pill mt-3 mt-md-0 fw-600">
        Lihat Semua <i class="bi bi-arrow-right ms-1"></i>
      </a>
    </div>
    <div class="row g-4">

      <div class="col-md-6 col-lg-4 fade-up">
        <div class="news-card">
          <div class="news-card-body">
            <div class="news-meta">
              <span class="news-category-badge">Prestasi</span>
              <span>12 Mei 2026</span>
            </div>
            <a href="#" class="news-title">
              Siswa PPLG Raih Juara 1 Lomba Coding Nasional 2026
            </a>
            <p class="news-excerpt">
              Tim siswa dari jurusan PPLG berhasil meraih juara pertama dalam
              kompetisi pemrograman tingkat nasional yang diikuti 500+ sekolah.
            </p>
            <a href="https://smkwikrama.sch.id/" class="btn-read-more">Baca Selengkapnya <i class="bi bi-arrow-right"></i></a>
          </div>
        </div>
      </div>

      <div class="col-md-6 col-lg-4 fade-up">
        <div class="news-card"
          <img
            src="./src/assets/images/1724118669-post.png"
            alt="PPDB 2026"
            class="news-thumb"
            onerror="this.style.display='none'"
          />
          <div class="news-card-body">
            <div class="news-meta">
              <span class="news-category-badge">Pengumuman</span>
              <span>01 Mei 2026</span>
            </div>
            <a href="#" class="news-title">
              PPDB Tahun Ajaran 2026/2027 Resmi Dibuka — Kuota Terbatas!
            </a>
            <p class="news-excerpt">
              Pendaftaran Peserta Didik Baru untuk tahun ajaran 2026/2027
              telah resmi dibuka. Segera daftarkan diri Anda sebelum kuota penuh.
            </p>
            <a href="https://smkwikrama.sch.id/" class="btn-read-more">Baca Selengkapnya <i class="bi bi-arrow-right"></i></a>
          </div>
        </div>
      </div>

      <div class="col-md-6 col-lg-4 fade-up">
        <div class="news-card">
          <img
            src="./src/assets/images/kegiatan-pmnwikrama1.webp"
            alt="Kunjungan Industri"
            class="news-thumb"
            onerror="this.style.display='none'"
          />
          <div class="news-card-body">
            <div class="news-meta">
              <span class="news-category-badge">Kerjasama</span>
              <span>18 Apr 2026</span>
            </div>
            <a href="#" class="news-title">
              MOU dengan 5 Perusahaan Teknologi Baru Ditandatangani
            </a>
            <p class="news-excerpt">
              SMK Wikrama Bogor menjalin kerja sama baru dengan lima perusahaan
              teknologi ternama untuk program magang dan rekrutmen langsung.
            </p>
            <a href="https://smkwikrama.sch.id/" class="btn-read-more">Baca Selengkapnya <i class="bi bi-arrow-right"></i></a>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


<section id="ppdb" class="py-5" style="background:linear-gradient(135deg,var(--accent),#fbbf24)">
  <div class="container text-center py-3 fade-up">
    <h2 class="fw-800 mb-2" style="font-family:'Merriweather',serif;color:var(--dark);font-size:clamp(1.5rem,4vw,2.2rem)">
      Bergabunglah Bersama Kami!
    </h2>
    <p class="mb-4" style="color:rgba(15,23,42,0.7);max-width:500px;margin:0 auto 1.5rem">
      Daftarkan diri Anda sekarang dan jadilah bagian dari komunitas pelajar
      berprestasi di SMK Wikrama Bogor.
    </p>
  <a id="Link-ppdb" href="https://spmb.smkwikrama.sch.id" target="_blank" class="btn px-4 py-3 fw-700 rounded-pill"
   style="background:var(--primary);color:#fff;font-size:1rem;box-shadow:0 8px 24px rgba(26,60,110,.35)">
   <i class="bi bi-pencil-square me-2"></i> Daftar PPDB Sekarang
</a>

    
  </div>
</section>
`;

// ── FOOTER ────────────────────────────────────────────────────
document.getElementById('school-footer').innerHTML = `
<footer id="kontak" class="school-footer">
  <div class="container">
    <div class="row g-5">

      <!-- Brand -->
      <div class="col-lg-4 col-md-6">
        <div class="footer-logo-text mb-1">SMK <span>Wikrama</span> Bogor</div>
        <p class="footer-desc">
          Sekolah Menengah Kejuruan unggulan di Kota Bogor yang berkomitmen
          mencetak lulusan kompeten, berkarakter, dan siap kerja.
        </p>
        <div class="footer-social d-flex gap-2">
          <a href="#" title="Instagram"><i class="bi bi-instagram"></i></a>
          <a href="#" title="YouTube"><i class="bi bi-youtube"></i></a>
          <a href="#" title="Facebook"><i class="bi bi-facebook"></i></a>
          <a href="#" title="TikTok"><i class="bi bi-tiktok"></i></a>
          <a href="#" title="LinkedIn"><i class="bi bi-linkedin"></i></a>
        </div>
      </div>

      <!-- Quick Links -->
      <div class="col-lg-2 col-6">
        <div class="footer-heading">Tautan Cepat</div>
        <ul class="footer-links">
          <li><a href="#beranda">Beranda</a></li>
          <li><a href="#profil">Profil Sekolah</a></li>
          <li><a href="#jurusan">Program Jurusan</a></li>
          <li><a href="#fasilitas">Fasilitas</a></li>
          <li><a href="#ppdb">Daftar PPDB</a></li>
        </ul>
      </div>

      <!-- Info -->
      <div class="col-lg-2 col-6">
        <div class="footer-heading">Informasi</div>
        <ul class="footer-links">
          <li><a href="#">Berita &amp; Kegiatan</a></li>
          <li><a href="#">Alumni</a></li>
          <li><a href="#">Ekskul</a></li>
          <li><a href="#">Prestasi</a></li>
          <li><a href="#">Galeri Foto</a></li>
        </ul>
      </div>

      <!-- Contact -->
      <div class="col-lg-4 col-md-6">
        <div class="footer-heading">Kontak &amp; Lokasi</div>
        <div class="footer-contact-item">
          <i class="bi bi-geo-alt-fill"></i>
          <span>Jl. Raya Wangun, Kelurahan Sindangsari, Kec. Bogor Timur, Kota Bogor, Jawa Barat 16146</span>
        </div>
        <div class="footer-contact-item">
          <i class="bi bi-telephone-fill"></i>
          <span>(0251) 8245 xxx</span>
        </div>
        <div class="footer-contact-item">
          <i class="bi bi-envelope-fill"></i>
          <span>info@smkwikramabogor.sch.id</span>
        </div>
        <!--
          📍 MAP SLOT: Google Maps Embed
          Ganti src iframe di bawah dengan link embed Google Maps sekolah Anda:
          Cara: Google Maps → Share → Embed a map → salin src
        -->
        <div class="footer-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.3530043195!2d106.8405!3d-6.5713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c5e5a5a5a5a5%3A0x0!2sSMK+Wikrama+Bogor!5e0!3m2!1sen!2sid!4v1234567890"
            allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
            title="Lokasi SMK Wikrama Bogor">
          </iframe>
        </div>
      </div>

    </div>

    <div class="footer-bottom">
      <small>&copy; 2026 SMK Wikrama Bogor. Semua hak dilindungi.</small>
      <div class="d-flex gap-3">
        <a href="#" style="font-size:.82rem">Kebijakan Privasi</a>
        <a href="#" style="font-size:.82rem">Syarat &amp; Ketentuan</a>
      </div>
    </div>
  </div>
</footer>`;

// ── SCROLL ANIMATIONS ─────────────────────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// ── ACTIVE NAV LINK ON SCROLL ─────────────────────────────────
const sections = document.querySelectorAll('section[id], footer[id]');
const navLinks = document.querySelectorAll('.school-nav .nav-link');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
  });
  navLinks.forEach(link => {
    link.classList.remove('active-link');
    if (link.getAttribute('href') === '#' + current) link.classList.add('active-link');
  });
}, { passive: true });
