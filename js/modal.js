const modal = document.querySelector('.modal');
const modalInner = document.querySelector('.modal__inner');

// Функции для открытия и закрытия модального окна
function openModal() {
    modal.style.display = 'flex';
}

function closeModal() {
    modal.style.display = '';
}

// Находим все кнопки для открытия модального окна (включая кнопку "Заказать" с классами .button и .modal__button)
const modalBtns = document.querySelectorAll('.modal__button, .button.course__button');

// Вешаем обработчик на каждую кнопку
modalBtns.forEach(btn => {
    btn.addEventListener('click', (event) => {
        event.preventDefault(); // Предотвращаем действие по умолчанию (если это ссылка или кнопка в форме)
        openModal();
    });
});

// Закрытие модального окна при клике на оверлей
modal.addEventListener('click', (event) => {
    if (!event.target.closest('.modal__inner')) {
        closeModal();
    }
});

// Создаем крестик для закрытия
const closeButton = document.createElement('button');
closeButton.type = 'button'; // Устанавливаем тип кнопки, чтобы не submit
closeButton.innerHTML = '&times;'; // Символ крестика
closeButton.style.cssText = `
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: #333;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: background-color 0.3s;
`;

// Добавляем hover-эффект для крестика
closeButton.addEventListener('mouseenter', () => {
    closeButton.style.backgroundColor = 'rgba(0,0,0,0.1)';
});
closeButton.addEventListener('mouseleave', () => {
    closeButton.style.backgroundColor = 'transparent';
});

// Добавляем крестик в modalInner
modalInner.style.position = 'relative'; // Для правильного позиционирования крестика
modalInner.appendChild(closeButton);

// Закрываем модальное окно при клике на крестик
closeButton.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    closeModal();
});

// Закрытие модального окна при нажатии на Escape
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.style.display === 'flex') {
        closeModal();
    }
});
