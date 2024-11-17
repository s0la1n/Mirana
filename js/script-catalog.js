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


// Функция для создания карточек товаров в соответствующем списке
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
                            <button class="price-button"><span>${product.price}</span></button>
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

    // Для женщин: добавляем товары в соответствующие категории
    for (let category in products.women) {
        // Для каждой категории создаем контейнер для товаров
        const container = document.querySelector(`.woman-${category}-cards`);
        if (container) {
            addProductCards(container, products.women[category]);
        }
    }

    // Для мужчин: добавляем товары в соответствующие категории
    for (let category in products.men) {
        // Для каждой категории создаем контейнер для товаров
        const container = document.querySelector(`.man-${category}-cards`);
        if (container) {
            addProductCards(container, products.men[category]);
        }
    }
}

// Вызов функции при загрузке страницы
document.addEventListener('DOMContentLoaded', createProductCards);

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.nav-types a').forEach(anchor => {
      anchor.addEventListener('click', function(event) {
        event.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  });

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