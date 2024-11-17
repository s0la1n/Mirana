document.addEventListener('DOMContentLoaded', function() {
    const burgerButton = document.querySelector('.burger-button');
    const burgerMenu = document.querySelector('.burger-menu');

    // Открытие/закрытие меню по клику на бургер
    burgerButton.addEventListener('click', function() {
        burgerMenu.classList.toggle('active');
    });

    // Закрытие меню при клике вне его
    document.addEventListener('click', function(event) {
        if (!burgerMenu.contains(event.target) && !burgerButton.contains(event.target)) {
            burgerMenu.classList.remove('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;

    function showSlide(index) {
        const slidesContainer = document.querySelector('.slides');
        slidesContainer.style.transform = `translateX(${-index * 100}%)`;
        
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    let slideInterval = setInterval(nextSlide, 5000);

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            clearInterval(slideInterval); // Останавливаем автоматическое переключение
            currentIndex = index;
            showSlide(currentIndex);
            slideInterval = setInterval(nextSlide, 5000); // Перезапускаем
        });
    });

    // Инициализация
    showSlide(currentIndex);
});


// Массив с информацией о товарах
const products = {
    women: [
        {
            title: "Пальто короткое",
            image: "img/card-jacket.png",
            price: "3000 руб.",
            wishlistImage: "img/wishlist-card.svg"
        },
        {
            title: "Шарф шерстяной",
            image: "img/card-jacket.png",
            price: "800 руб.",
            wishlistImage: "img/wishlist-card.svg"
        },
        {
            title: "Шарф шерстяной",
            image: "img/card-jacket.png",
            price: "800 руб.",
            wishlistImage: "img/wishlist-card.svg"
        },
        {
            title: "Шарф шерстяной",
            image: "img/card-jacket.png",
            price: "800 руб.",
            wishlistImage: "img/wishlist-card.svg"
        }
        // Добавьте сюда другие женские товары
    ],
    men: [
        {
            title: "Куртка зимняя",
            image: "img/card-jacket.png",
            price: "4500 руб.",
            wishlistImage: "img/wishlist-card.svg"
        },
        {
            title: "Куртка зимняя",
            image: "img/card-jacket.png",
            price: "4500 руб.",
            wishlistImage: "img/wishlist-card.svg"
        },
        {
            title: "Куртка зимняя",
            image: "img/card-jacket.png",
            price: "4500 руб.",
            wishlistImage: "img/wishlist-card.svg"
        },
        {
            title: "Куртка зимняя",
            image: "img/card-jacket.png",
            price: "4500 руб.",
            wishlistImage: "img/wishlist-card.svg"
        },
        {
            title: "Куртка зимняя",
            image: "img/card-jacket.png",
            price: "4500 руб.",
            wishlistImage: "img/wishlist-card.svg"
        }
        // Добавьте сюда другие мужские товары
    ]
};

// Функция для создания карточек
function createProductCards() {
    // Функция для добавления товаров в контейнер
    function addProductCards(container, products) {
        products.forEach(product => {
            const card = document.createElement('li');
            card.classList.add('card');

            // Создаем HTML-разметку карточки товара
            card.innerHTML = `
                <img src="${product.image}" alt="${product.title}">
                <div class="card-info">
                    <h5>${product.title}</h5>
                    <ul class="card-buttons">
                        <li class="card-button">
                            <button class="price-button">
                                <span>${product.price}</span>
                            </button>
                        </li>
                        <li class="card-button">
                            <a href="#">
                                <img src="${product.wishlistImage}" alt="Добавить в избранное">
                            </a>
                        </li>
                    </ul>
                </div>
            `;

            // Добавляем карточку в контейнер
            container.appendChild(card);

            // Находим кнопку с ценой
            const priceButton = card.querySelector('.price-button');

            // Добавляем обработчик событий для смены текста на кнопке
            priceButton.addEventListener('mouseover', () => {
                const span = priceButton.querySelector('span');
                span.style.opacity = '0';  // Скрываем цену
                priceButton.classList.add('added');  // Меняем текст на "В корзину"
            });

            priceButton.addEventListener('mouseout', () => {
                const span = priceButton.querySelector('span');
                span.style.opacity = '1';  // Показываем цену
                priceButton.classList.remove('added');  // Восстанавливаем первоначальный текст
            });
        });
    }

    // Для женщин: добавляем товары в контейнер .woman-cards
    const womanCardsContainer = document.querySelector('.woman-cards');
    if (womanCardsContainer) {
        addProductCards(womanCardsContainer, products.women);
    }

    // Для мужчин: добавляем товары в контейнер .man-cards
    const manCardsContainer = document.querySelector('.man-cards');
    if (manCardsContainer) {
        addProductCards(manCardsContainer, products.men);
    }
}

// Вызов функции при загрузке страницы
document.addEventListener('DOMContentLoaded', createProductCards);

// Получаем элементы модального окна и кнопки
const modal = document.getElementById("myModal");
const btn = document.getElementById("openModal");
const span = document.getElementsByClassName("close")[0];

// Открываем модальное окно при нажатии на кнопку
btn.onclick = function() {
    modal.style.display = "block";
}

// Закрываем модальное окно при нажатии на крестик
span.onclick = function() {
    modal.style.display = "none";
}

// Закрываем модальное окно при нажатии вне его
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// Обработка отправки формы
document.getElementById("registrationForm").onsubmit = function(event) {
    event.preventDefault();
    // Здесь вы можете добавить вашу логику для обработки данных из формы
    alert("Аккаунт создан!");
    modal.style.display = "none"; // Закрываем модальное окно после создания аккаунта
}


