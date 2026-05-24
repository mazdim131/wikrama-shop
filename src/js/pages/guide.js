const content = document.getElementById('content');
content.innerHTML = `
    <a href="#tutorial" class="text-black text-decoration-none">
        <div class="text-center animate__animated animate__fadeInDown">
            <h1 style="font-size: 50px; margin-top: 8%;">HOW TO USE THIS WEBSITE?</h1>
            <p style="font-size: 15px;">See how this website works so that it can provide the best recording experience for every contribution, donation or event for you.</p>
        </div>
    </a>

        <div class="container d-flex justify-content-center animate__animated animate__fadeInDown" style="margin-top: 10%;">
    <div class="row">
        <div class="col">
            <div class="card border border-0 rounded-5 text-white" style="width: 100%; background-color: #a76d2a; padding: 30px 50px;">
            <div class="card-body">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
                    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
                </svg>
                
                <h2 class="mt-3">User Friendly</h2>
                <p class="card-text">Platform kami di set dengan tampilan yang sangat sederhana. Memungkinkan pengguna menggunakannya tanpa kesulitan</p>
            </div>
            </div>
        </div>
        <div class="col">
            <div class="card border border-0 rounded-5 text-white" style="width: 100%; background-color: #a76d2a; padding: 30px 50px;">
            <div class="card-body">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-brush-fill" viewBox="0 0 16 16">
                    <path d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.1 6.1 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.1 8.1 0 0 1-3.078.132 4 4 0 0 1-.562-.135 1.4 1.4 0 0 1-.466-.247.7.7 0 0 1-.204-.288.62.62 0 0 1 .004-.443c.095-.245.316-.38.461-.452.394-.197.625-.453.867-.826.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.201-.925 1.746-.896q.19.012.348.048c.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04"/>
                </svg>                
                
                <h2 class="mt-3">Profesional Design</h2>
                <p class="card-text">Dibuat dengan design yang profesional yang dibuat tanpa campur tangan AI melainkan dibuat manual oleh developer junior</p>
            </div>
            </div>
        </div>
        <div class="col">
            <div class="card border border-0 rounded-5 text-white" style="width: 100%; background-color: #a76d2a; padding: 30px 50px;">
            <div class="card-body">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-crosshair2" viewBox="0 0 16 16">
                    <path d="M8 0a.5.5 0 0 1 .5.5v.518A7 7 0 0 1 14.982 7.5h.518a.5.5 0 0 1 0 1h-.518A7 7 0 0 1 8.5 14.982v.518a.5.5 0 0 1-1 0v-.518A7 7 0 0 1 1.018 8.5H.5a.5.5 0 0 1 0-1h.518A7 7 0 0 1 7.5 1.018V.5A.5.5 0 0 1 8 0m-.5 2.02A6 6 0 0 0 2.02 7.5h1.005A5 5 0 0 1 7.5 3.025zm1 1.005A5 5 0 0 1 12.975 7.5h1.005A6 6 0 0 0 8.5 2.02zM12.975 8.5A5 5 0 0 1 8.5 12.975v1.005a6 6 0 0 0 5.48-5.48zM7.5 12.975A5 5 0 0 1 3.025 8.5H2.02a6 6 0 0 0 5.48 5.48zM10 8a2 2 0 1 0-4 0 2 2 0 0 0 4 0"/>
                </svg>                
                
                <h2 class="mt-3">To The Point</h2>
                <p class="card-text">Fitur kami bersifat to the point dan tidak banyak embel embel yang mengganggu. Memungkinkan pengguna mendapat good experience</p>
            </div>
        </div>
        </div>
    </div>
    </div>
    




    <div class="container-video justify-content-center animate__animated animate__fadeInDown" style="margin-top: 25%;">
        <div class="container d-flex justify-content-center">
            <div class="row row-cols-1 row-cols-md-4 g-3">
                <div class="col">
                <button onclick="buyItem()" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <div class="card" style="width: 100%;">
  <div class="card-body">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
    <h5 class="card-title mt-2">Buy Item</h5>
    <h6 class="card-subtitle mb-2">Short Video</h6>
    <p class="card-text">Click the card if you want to watch the video</p>
  </div>
</div>
                </div>
                </button>
                <div class="col">
                <button onclick="toAboutVideo()">
                    <div class="card" style="width: 100%;">
  <div class="card-body">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
    <h5 class="card-title mt-2">To about page</h5>
    <h6 class="card-subtitle mb-2">Short Video</h6>
    <p class="card-text">Click the card if you want to watch the video</p>
  </div>
</div>
                </div>
                </button>
                <div class="col">
                <button onclick="toContactPage()">
                    <div class="card" style="width: 100%;">
  <div class="card-body">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
    <h5 class="card-title mt-2">To contact page</h5>
    <h6 class="card-subtitle mb-2">Short Video</h6>
    <p class="card-text">Click the card if you want to watch the video</p>
  </div>
</div>
                </div>
                </button>
                <div class="col">
                <button onclick="getStarted()">
                    <div class="card" style="width: 100%;">
  <div class="card-body">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
    <h5 class="card-title mt-2">Get Started</h5>
    <h6 class="card-subtitle mb-2">Short Video</h6>
    <p class="card-text">Click the card if you want to watch the video</p>
  </div>
</div>
                </div>
                </button>
            </div>
        </div>
    </div>

    <div class="container-video justify-content-center animate__animated animate__fadeInDown" style="margin-top: 1%;">
        <a id="tutorial"></a>
        <div class="container d-flex justify-content-center">
            <div class="row row-cols-1 row-cols-md-4 g-3">
                <div class="col">
                <button onclick="addNewList()">
                    <div class="card" style="width: 100%;">
  <div class="card-body">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
    <h5 class="card-title mt-2">Add New List</h5>
    <h6 class="card-subtitle mb-2">Short Video</h6>
    <p class="card-text">Click the card if you want to watch the video</p>
  </div>
</div>
                </div>
                </button>
                <div class="col">
                <button onclick="editList()">
                    <div class="card" style="width: 100%;">
  <div class="card-body">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
    <h5 class="card-title mt-2">Edit List</h5>
    <h6 class="card-subtitle mb-2">Short Video</h6>
    <p class="card-text">Click the card if you want to watch the video</p>
  </div>
</div>
                </div>
                </button>
                <div class="col">
                <button onclick="deleteList()">
                    <div class="card" style="width: 100%;">
  <div class="card-body">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
    <h5 class="card-title mt-2">Delete List</h5>
    <h6 class="card-subtitle mb-2">Short Video</h6>
    <p class="card-text">Click the card if you want to watch the video</p>
  </div>
</div>
                </div>
                </button>
                <div class="col">
                <button onclick="filterData()">
                    <div class="card" style="width: 100%;">
  <div class="card-body">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
    <h5 class="card-title mt-2">Filter Data</h5>
    <h6 class="card-subtitle mb-2">Short Video</h6>
    <p class="card-text">Click the card if you want to watch the video</p>
  </div>
</div>
                </div>
                </button>
            </div>
        </div>
    </div>

    <div class="container-video justify-content-center animate__animated animate__fadeInDown" style="margin-top: 1%;">
        <a id="tutorial"></a>
        <div class="container d-flex justify-content-center">
            <div class="row row-cols-1 row-cols-md-4 g-3">
                <div class="col">
                <button onclick="copyLinkWebsite()">
                    <div class="card" style="width: 100%;">
  <div class="card-body">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
    <h5 class="card-title mt-2">Copy Link Website</h5>
    <h6 class="card-subtitle mb-2">Short Video</h6>
    <p class="card-text">Click the card if you want to watch the video</p>
  </div>
</div>
                </div>
                </button>
                <div class="col">
                <button onclick="monitoringCategories()">
                    <div class="card" style="width: 100%;">
  <div class="card-body">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
    <h5 class="card-title mt-2">Monitoring Categories</h5>
    <h6 class="card-subtitle mb-2">Short Video</h6>
    <p class="card-text">Click the card if you want to watch the video</p>
  </div>
</div>
                </div>
                </button>
                <div class="col">
                <button onclick="guideBook()">
                    <div class="card" style="width: 100%;">
  <div class="card-body">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
    <h5 class="card-title mt-2">Guide Book</h5>
    <h6 class="card-subtitle mb-2">Short Video</h6>
    <p class="card-text">Click the card if you want to watch the video</p>
  </div>
</div>
                </div>
                </button>
                <div class="col">
                <button onclick="profileDev()">
                    <div class="card" id="tutorial" style="width: 100%;">
  <div class="card-body">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
    <h5 class="card-title mt-2">Profile Developer</h5>
    <h6 class="card-subtitle mb-2">Short Video</h6>
    <p class="card-text">Click the card if you want to watch the video</p>
  </div>
</div>
                </div>
                </button>
            </div>
        </div>
    </div>

    <div id="outVideo" class="rounded-3 container-sm containerOutVideo animate__animated animate__fadeInDown"></div>

    <a href="#top">
        <button type="button" class="rounded-circle btn btn-success d-flex justify-content-end ms-auto" style="margin-top: 20% !important; padding: 10px;">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"/>
            </svg>
        </button>
    </a>
`

function buyItem() {
    const outVideo = document.getElementById('outVideo');
    outVideo.innerHTML = `
        <video autoplay muted loop playsinline class="outVideo">
            <source src="/src/assets/videos/Screen Recording 2026-05-21 134954.mp4">
        </video>
    `
}
function toAboutVideo() {
    const outVideo = document.getElementById('outVideo');
    outVideo.innerHTML = `
        <video autoplay muted loop playsinline class="outVideo">
            <source src="/src/assets/videos/about.mp4">
        </video>
    `
}
function toContactPage() {
    const outVideo = document.getElementById('outVideo');
    outVideo.innerHTML = `
        <video autoplay muted loop playsinline class="outVideo">
            <source src="/src/assets/videos/contact.mp4">
        </video>
    `
}
function getStarted() {
    const outVideo = document.getElementById('outVideo');
    outVideo.innerHTML = `
        <video autoplay muted loop playsinline class="outVideo">
            <source src="/src/assets/videos/todo.mp4">
        </video>
    `
}


function addNewList() {
    const outVideo = document.getElementById('outVideo');
    outVideo.innerHTML = `
        <video autoplay muted loop playsinline class="outVideo">
            <source src="/src/assets/videos/add.mp4">
        </video>
    `
}
function editList() {
    const outVideo = document.getElementById('outVideo');
    outVideo.innerHTML = `
        <video autoplay muted loop playsinline class="outVideo">
            <source src="/src/assets/videos/edit.mp4">
        </video>
    `
}
function deleteList() {
    const outVideo = document.getElementById('outVideo');
    outVideo.innerHTML = `
        <video autoplay muted loop playsinline class="outVideo">
            <source src="/src/assets/videos/hapus.mp4">
        </video>
    `
}
function filterData() {
    const outVideo = document.getElementById('outVideo');
    outVideo.innerHTML = `
        <video autoplay muted loop playsinline class="outVideo">
            <source src="/src/assets/videos/filter.mp4">
        </video>
    `
}



function copyLinkWebsite() {
    const outVideo = document.getElementById('outVideo');
    outVideo.innerHTML = `
        <video autoplay muted loop playsinline class="outVideo">
            <source src="/src/assets/videos/salinLink.mp4">
        </video>
    `
}
function monitoringCategories() {
    const outVideo = document.getElementById('outVideo');
    outVideo.innerHTML = `
        <video autoplay muted loop playsinline class="outVideo">
            <source src="/src/assets/videos/monitoring.mp4">
        </video>
    `
}
function guideBook() {
    const outVideo = document.getElementById('outVideo');
    outVideo.innerHTML = `
        <video autoplay muted loop playsinline class="outVideo">
            <source src="/src/assets/videos/guide.mp4">
        </video>
    `
}
function profileDev() {
    const outVideo = document.getElementById('outVideo');
    outVideo.innerHTML = `
        <video autoplay muted loop playsinline class="outVideo">
            <source src="/src/assets/videos/profileDev.mp4">
        </video>
    `
}