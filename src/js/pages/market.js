const content = document.getElementById("content");

const listItems = [
  {
    name: "Keke Craft Alice Tas Anyaman Pandan Tenun Nusantara Kulit Sapi Asli Ramah Lingkungan Unik Tali Panjang",
    price: "Rp. 400.000",
    category: "Fashion",
    documentation:
      "https://down-id.img.susercontent.com/file/id-11134207-822wg-mlcyqoufn09482@resize_w450_nl.webp",
    sub: "Keke Craft",
    interaction: "",
  },
  {
    name: "Keke Craft Landyard Kulit Anyaman Tenun Nusantara",
    price: "Rp. 175.000",
    category: "accessories",
    documentation:
      "https://down-id.img.susercontent.com/file/id-11134207-8224z-mk6ppo6z3d3572@resize_w450_nl.webp",
    sub: "Keke Craft",
    interaction: "",
  },
  {
    name: "Keke craft tas Hampers Anyaman Pandan",
    price: "Rp. 85.000",
    category: "accessories",
    documentation:
      "https://down-id.img.susercontent.com/file/id-11134207-7ra0k-mcbs7qhneg2hfe@resize_w450_nl.webp",
    sub: "Keke Craft",
    interaction: "",
  },
  {
    name: "Keke Craft Dompet Kartu Dompet Anyaman Pandan Dompet Kerajinan Dompet Kartu Unik",
    price: "Rp. 120.000",
    category: "Fashion",
    documentation:
      "https://down-id.img.susercontent.com/file/id-11134207-7r98t-lzeh5m372w2mdf@resize_w450_nl.webp",
    sub: "Keke Craft",
    interaction: "",
  },
  {
    name: "TAZZA Veloura Sepatu Heels 3cm Maryjane Wanita Hitam",
    price: "Rp. 190.000",
    category: "Fashion",
    documentation:
      "https://down-id.img.susercontent.com/file/id-11134207-81zth-mefxm5llhlhd32@resize_w450_nl.webp",
    sub: "Sole de Tazza",
    interaction: "",
  },
  {
    name: "TAZZA Veloura Sepatu Heels 3cm Maryjane Wanita Crimson Wine",
    price: "Rp. 190.000",
    category: "Fashion",
    documentation:
      "https://down-id.img.susercontent.com/file/id-11134207-81ztk-mefxm9hfhpty11@resize_w450_nl.webp",
    sub: "Sole de Tazza",
    interaction: "",
  },
  {
    name: "TAZZA Veloura Sepatu Heels 3cm Maryjane Wanita Ivory Blush",
    price: "Rp. 190.000",
    category: "Fashion",
    documentation:
      "https://down-id.img.susercontent.com/file/id-11134207-81ztc-mefxmh4mcp34e5@resize_w450_nl.webp",
    sub: "Sole de Tazza",
    interaction: "",
  },
  {
    name: "TAZZA Veloura Sepatu Heels 3cm Maryjane Wanita Mocha Glaze",
    price: "Rp. 190.000",
    category: "Fashion",
    documentation:
      "https://down-id.img.susercontent.com/file/id-11134207-81zte-mefxmw7gs0zq8f@resize_w450_nl.webp",
    sub: "Sole de Tazza",
    interaction: "",
  },
  {
    name: "SHOWER PUFF, SPONS MANDI PREMIUM QUALITY, BATH SPONGE BESAR",
    price: "Rp. 15.000",
    category: "Equipment",
    documentation:
      "https://down-id.img.susercontent.com/file/id-11134207-8224z-mg3q3ivtwcgca6@resize_w450_nl.webp",
    sub: "Jiejing",
    interaction: "",
  },
  {
    name: "Joyko Gel Pen Q3 (Pulpen)",
    price: "Rp. 5.000",
    category: "Equipment",
    documentation:
      "https://media.monotaro.id/mid01/big/Kebutuhan%20Kantor/Alat%20Tulis/Pena/Pulpen%20Bolpoin/Joyko%20Gel%20Pen%20Q3%20(Pulpen)/j2P108049686-4.jpg",
    sub: "Joyco",
    interaction: "",
  },
  {
    name: "PENCIL 2B FABER-CASTELL (Pulpen)",
    price: "Rp. 5.000",
    category: "Equipment",
    documentation:
      "https://parto.id/asset/foto_produk/pensi-2b-faber-_1631724263.jpg",
    sub: "Faber Castell",
    interaction: "",
  },
  {
    name: "Gantungan Kunci akrilik 2 foto depan belakang ganci / keychain / ganci",
    price: "Rp. 5.000",
    category: "Equipment",
    documentation:
      "https://down-id.img.susercontent.com/file/id-11134207-7r991-lmr7a7rzt63oc1",
    sub: "Faber Castell",
    interaction: "",
  },
];

const card = (data) =>
  data
    .map(
      (item) => `
    <div class="col-6 col-md-4 col-lg-3 mb-4 reveal">
        <div class="card custom-product-card h-100" 
             data-bs-toggle="modal" 
             data-bs-target="#exampleModal" 
             onclick="setModalProduct('${item.name.replace(/'/g, "\\'")}')">
            
            <div class="img-container">
                <img src="${item.documentation}" alt="${item.name}">
            </div>
            
            <div class="product-details">
                <div class="price-text">
                    ${item.price} 
                    ${item.oldPrice ? `<span class="old-price-text">${item.oldPrice}</span>` : ""}
                </div>
                <div class="title-text">${item.name}</div>
                <div class="brand-text">${item.sub}</div>
            </div>

        </div>
    </div>
`,
    )
    .join("");

content.innerHTML = `
<div class="container my-5" style="margin-top: 8% !important;">
    <div class="row row-cols-1 row-cols-lg-2 g-4">
        
        <div class="col">
            <a href="" class="text-decoration-none" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="setModalProduct('Integrated Led Headlamp / Stylis Rear Lamp')">
                <div class="card card-sampul-kiri animate__animated animate__backInLeft border-0 rounded-4 p-4 hero-showcase-card">
                    <div class="d-flex align-items-center gap-2 mb-5">
                        <div class="feature-icon-badge">
                            <i class="bi bi-lightning-charge-fill"></i>
                        </div>
                        <span class="text-white fw-medium hero-badge-text">
                            Integrated Led Headlamp <br> Stylis Rear Lamp
                        </span>
                    </div>
                </div>
            </a>
        </div>

        <div class="col">
            <a href="" class="text-decoration-none" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="setModalProduct('Niacinamide-TXA Milky Cleanser')">
                <div class="card card-sampul-kanan animate__animated animate__backInRight border-0 rounded-4 p-4 product-shop-card d-flex flex-column justify-content-between">
                    <div class="d-flex gap-2">
                        <span class="color-dot bg-warning"></span>
                        <span class="color-dot bg-danger"></span>
                    </div>
                    
                    <div class="text-center my-4">
                        <img src="/src/assets/items/b48e3c572b2dfd9a940f780871198f96.png" 
                             alt="Cast Lights" class="main-product-img img-fluid">
                    </div>

                    <div class="d-flex justify-content-between align-items-end mt-auto">
                        <div>
                            <h5 class="fw-bold text-dark m-0">Niacinamide-TXA Milky Cleanser</h5>
                            <p class="text-muted small m-0">Dazzle Me Store</p>
                        </div>
                        <button class="btn btn-dark-custom rounded-pill px-4 py-2 fw-medium d-flex gap-2 align-items-center">
                            Order <span class="price-tag text-black-50 small">Rp. 75.000</span>
                        </button>
                    </div>
                </div>
            </a>
        </div>

    </div>
</div>

<div class="container-sm d-flex" style="margin-top: 5%;">
    <div class="justify-content-start">
        <h1 class="reveal">Our Product</h1>
    </div>
    <div class="justify-content-end ms-auto"></div>
</div>

<div class="container my-5">
    <div id="product-container" class="row"></div>
</div>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Tanya Produk</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <span class="input-group-text mb-2">Type message here</span>
                <textarea id="modal-textarea" class="form-control" rows="4" aria-label="With textarea"></textarea>                    
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" id="btn-submit-modal" class="btn btn-primary">Send Message</button>
            </div>
        </div>
    </div>
</div>
`;

document.getElementById("product-container").innerHTML = card(listItems);

function setModalProduct(productName) {
  const textarea = document.getElementById("modal-textarea");
  if (textarea) {
    textarea.value = `Halo saya ingin bertanya tanya mengenai produk 
--- | ${productName} | ---.
apakah stoknya tersedia?`;
  }
}

document
  .getElementById("btn-submit-modal")
  .addEventListener("click", function () {
    const pesan = document.getElementById("modal-textarea").value;
    if (!pesan.trim()) {
      alert("Pesan tidak boleh kosong!");
      return;
    }
    const nomorWA = "6285710276264";
    const url =
      "https://wa.me/" + nomorWA + "?text=" + encodeURIComponent(pesan);
    window.open(url, "_blank");
  });

const contactForm = document.getElementById("contact");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const telepon = document.getElementById("tel").value;
    const pesan = document.getElementById("ulasan").value;

    if (!nama || !email || !telepon || !pesan) {
      alert("Harap isi semua field sebelum submit!");
      return;
    }

    const nomorWA = "6289517354572";
    const teks = `Halo Min, ada pesan baru dari website: ScanGo\n\nNama: ${nama}\nEmail: ${email}\nNomor Telephone: ${telepon}\nPesan: ${pesan}`;
    const url =
      "https://wa.me/" + nomorWA + "?text=" + encodeURIComponent(teks);

    window.open(url, "_blank");
    alert("Pesan Anda akan diarahkan ke WhatsApp 🚀");
    this.reset();
  });
}
