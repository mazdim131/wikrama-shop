const content = document.getElementById("content");

function submissionMission() {
  let outTeks = document.getElementById("out-teks");
  outTeks.innerHTML = `
    <p class="text-black mt-5">
        Kami percaya bahwa setiap siswa memiliki potensi wirausaha yang luar biasa.
        Misi Wikrama Shop adalah menyediakan ekosistem perdagangan digital yang inklusif di 
        lingkungan sekolah, menjembatani produk karya siswa dengan seluruh warga sekolah, serta menanamkan 
        jiwa kewirausahaan sejak dini melalui teknologi modern.
    </p>
    `;
}

function submissionPlacement() {
  let outTeks = document.getElementById("out-teks");
  outTeks.innerHTML = `
    <p class="text-black mt-5">
        Wikrama Shop hadir secara hybrid. Selain melalui platform digital yang bisa diakses kapan saja, 
        kami memiliki titik-titik distribusi strategis di dalam lingkungan SMK Wikrama Bogor mulai dari kantin pusat
        hingga koperasi siswa untuk memastikan setiap pesanan sampai ke tangan pembeli dengan cepat dan efisien.    
    </p>
    `;
}

function submissionPartners() {
  let outTeks = document.getElementById("out-teks");
  outTeks.innerHTML = `
    <p class="text-black mt-5">
        Ekosistem kami tumbuh berkat kolaborasi erat antara jurusan (kompetensi keahlian), 
        pelaku UMKM lokal di sekitar sekolah, dan tentu saja, para siswa kreatif. Kami bekerja sama untuk
        memastikan produk yang dipasarkan memiliki standar kualitas yang baik dan memberikan manfaat ekonomi 
        kembali ke komunitas sekolah.
    </p>
    `;
}

content.innerHTML = `
    <section class="animate__animated animate__fadeInDown">
        <div class="container-sm">
        <h1 style="font-size: 96px; padding-top: 15%;" class="text-white animate__animated animate__fadeInDown">
            Digitalizing <br> School <br> Commerce.
        </h1>
        <p class="text-white animate__animated animate__fadeInDown" style="margin-bottom: 15%;">
            A digital platform built for Wikrama community to<br> showcase, trade, and grow local student businesses<br> to the next level.
        </p>

        <div style="border-top: 2px solid white;" class="line animate__animated animate__fadeIn"></div>

        <div class="d-flex mt-3">
            <div class="justify-content-start text-white animate__animated animate__fadeIn">
                <p>SMK WIKRAMA BOGOR</p>
            </div>

            <div class="ms-auto justify-content-end text-white animate__animated animate__fadeIn">
                <p>Gedung Mewah</p>
            </div>
        </div>
        </div>
    </section>

    <div class="second-layer">
        <div class="text-center animate__animated animate__fadeInDown">
        <h1 style="margin-top: 10%;" class="reveal">
            Cara Baru Mendukung 
            <span style="background-color: #E67E22; border-radius: 50px; padding-left: 10px; padding-right: 10px; padding-bottom: 5px; color: white;">Ekonomi Sekolah</span>
        </h1>
        <p class="reveal">
            Platform digital resmi Wikrama untuk memudahkan transaksi harian dan mendukung<br> pertumbuhan wirausaha muda di lingkungan sekolah.
        </p>

        <img src="/src/assets/images/51f73e7785f7aebb29e3c0c23016dfe8.jpg" class="rounded-5 reveal" style="width: 900px;">

        <div style="margin-top: 70px; border-top: 2px solid white;" class="reveal"></div>
            <div class="d-flex sponsors-logo flex-column flex-md-row flex-wrap justify-content-center align-items-center gap-4 gap-md-5 mx-auto mt-5 reveal">
                <div style="width: 18rem;">
  <div class="card-body">

  <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-box-seam-fill icon" viewBox="0 0 16 16" style="color: #E67E22;">
  <path fill-rule="evenodd" d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.01-.003.268-.108a.75.75 0 0 1 .558 0l.269.108.01.003zM10.404 2 4.25 4.461 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339L8 5.961 5.596 5l6.154-2.461z"/>
</svg>

    <h5 class="card-title mt-4">Cari Kebutuhan</h5>
    <p class="card-text">
        Jelajahi katalog lengkap mulai dari seragam, alat tulis, hingga produk kreatif hasil karya siswa.
    </p>
  </div>
</div>

<div style="width: 18rem;">
  <div class="card-body">

  <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-basket2-fill icon" viewBox="0 0 16 16">
  <path d="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0zm4-1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1"/>
</svg>

    <h5 class="card-title mt-4">Pesan Instan</h5>
    <p class="card-text">
        Pilih barang favoritmu dan lakukan pemesanan secara digital hanya dalam beberapa klik saja.
    </p>
  </div>
</div>

<div style="width: 18rem;">
  <div class="card-body">

    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-phone-fill icon" viewBox="0 0 16 16">
  <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0"/>
</svg>

    <h5 class="card-title mt-4">Ekosistem Digital</h5>
    <p class="card-text">
        Menghubungkan penjual dan pembeli di lingkungan Wikrama dalam satu platform yang efisien.
    </p>
  </div>
</div>

<div style="width: 18rem;">
  <div class="card-body">

    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-tags-fill icon" viewBox="0 0 16 16">
  <path d="M2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586zm3.5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
  <path d="M1.293 7.793A1 1 0 0 1 1 7.086V2a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l.043-.043z"/>
</svg>

    <h5 class="card-title mt-4">Harga Transparan</h5>
    <p class="card-text">
        Mendukung keadilan ekonomi dengan harga yang kompetitif dan transparan bagi seluruh warga sekolah.
    </p>
  </div>
</div>
            </div>

        <div class="container px-4" style="margin-top: 5%;">
  <div class="row gx-5">
    <div class="col">
      <div class="p-3">
        <h1 class="reveal">
            The story of 
            <span style="background-color: #E67E22; border-radius: 30px; padding-left: 10px; padding-right: 10px; padding-bottom: 10px; color: white;">Wikrama Shop</span>
        </h1>

        <div class="d-flex gap-3 reveal" style="margin-top: 100px;">
            <button type="button" class="btn-subquest" id="btn-subquest" onclick="submissionMission()" style="background-color: #e67e22; color: white !important;">Mission</button>
            <button type="button" class="btn-subquest" id="btn-subquest" onclick="submissionPlacement()">Placements</button>
            <button type="button" class="btn-subquest" id="btn-subquest" onclick="submissionPartners()">Partners</button>
        </div>

        <div id="out-teks" class="reveal">
        <p class="mt-5 reveal">
        Kami percaya bahwa setiap siswa memiliki potensi wirausaha yang luar biasa.
        Misi Wikrama Shop adalah menyediakan ekosistem perdagangan digital yang inklusif di 
        lingkungan sekolah, menjembatani produk karya siswa dengan seluruh warga sekolah, serta menanamkan 
        jiwa kewirausahaan sejak dini melalui teknologi modern.
        </p>
        </div>

      </div>
    </div>
    <div class="col">
      <div class="p-3">
      
        <div id="carouselExampleAutoplaying" class="reveal carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner rounded-5">
    <div class="carousel-item active">
      <img src="/src/assets/images/1724118669-post.png" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="/src/assets/images/commerce.png" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="/src/assets/images/SMK-WIKRAMA-BOGOR.jpg" class="d-block w-100" alt="...">
    </div>
  </div>
</div>

      </div>
    </div>
  </div>
</div>

        </div>

    </div>
`;
