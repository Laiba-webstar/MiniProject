const cars = [
  { name: "Honda Civic 2020", city: "Lahore", price: "PKR 4,200,000", img: "https://via.placeholder.com/400x200?text=Honda+Civic" },
  { name: "Suzuki Alto 2022", city: "Karachi", price: "PKR 2,000,000", img: "https://via.placeholder.com/400x200?text=Suzuki+Alto" },
  { name: "Toyota Corolla 2021", city: "Islamabad", price: "PKR 3,800,000", img: "https://via.placeholder.com/400x200?text=Toyota+Corolla" }
];

function displayCars(filter = "") {
  const carGrid = document.getElementById("carGrid");
  if (!carGrid) return;
  carGrid.innerHTML = "";
  cars
    .filter(car => car.name.toLowerCase().includes(filter.toLowerCase()))
    .forEach(car => {
      const card = document.createElement("div");
      card.className = "col-sm-12 col-md-6 col-lg-4 mb-4";
      card.innerHTML = `
        <div class="card">
          <img src="${car.img}" class="card-img-top" alt="${car.name}">
          <div class="card-body">
            <h5 class="card-title">${car.name}</h5>
            <p class="card-text">${car.city}</p>
            <p class="card-text text-success">${car.price}</p>
            <a href="#carpage" class="btn btn-primary">View Details</a>
          </div>
        </div>`;
      carGrid.appendChild(card);
    });
}

function filterCars() {
  const input = document.getElementById("searchInput");
  if (input) displayCars(input.value);
}

window.onload = () => displayCars();
let currentSlide = 0;
  function switchTab(tabId) {
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => tab.classList.remove('active'));
    event.target.classList.add('active');
  }

  function switchSlide(index) {
    const track = document.getElementById('carouselTrack');
    const dots = document.querySelectorAll('.carousel-dot');
    currentSlide = index;
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    if (dots[index]) dots[index].classList.add('active');
  }

  function nextSlide() {
    const totalSlides = document.querySelectorAll('.carousel-slide').length;
    currentSlide = (currentSlide + 1) % totalSlides;
    switchSlide(currentSlide);
  }

  function prevSlide() {
    const totalSlides = document.querySelectorAll('.carousel-slide').length;
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    switchSlide(currentSlide);
  }
  
  $(document).ready(function () {
    $("#categoryCarousel").swipe({
      swipe: function (event, direction) {
        if (direction === 'left') $(this).carousel('next');
        if (direction === 'right') $(this).carousel('prev');
      },
      allowPageScroll: "vertical"
    });
  });
   