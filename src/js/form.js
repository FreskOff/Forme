const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');
const toast = document.getElementById('toast');

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showError(input, errorElement, message) {
    input.classList.add('error');
    errorElement.textContent = message;
}

function clearError(input, errorElement) {
    input.classList.remove('error');
    errorElement.textContent = '';
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    // Валидация имени
    if (nameInput.value.trim() === '') {
        showError(nameInput, nameError, 'Введите имя');
        isValid = false;
    } else {
        clearError(nameInput, nameError);
    }

    // Валидация email
    if (emailInput.value.trim() === '') {
        showError(emailInput, emailError, 'Введите email');
        isValid = false;
    } else if (!validateEmail(emailInput.value.trim())) {
        showError(emailInput, emailError, 'Некорректный email');
        isValid = false;
    } else {
        clearError(emailInput, emailError);
    }

    // Валидация сообщения
    if (messageInput.value.trim() === '') {
        showError(messageInput, messageError, 'Введите сообщение');
        isValid = false;
    } else {
        clearError(messageInput, messageError);
    }

    if (isValid) {
        // Эмуляция отправки
        console.log('Форма отправлена:', {
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
            message: messageInput.value.trim()
        });

        // Показ toast
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);

        // Сброс формы
        form.reset();
    }
});

// Очистка ошибок при вводе
[nameInput, emailInput, messageInput].forEach(input => {
    input.addEventListener('input', () => {
        if (input.classList.contains('error')) {
            const errorElement = document.getElementById(`${input.id}-error`);
            clearError(input, errorElement);
        }
    });
});