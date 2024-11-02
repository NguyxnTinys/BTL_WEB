function Validator(options) {
    var formElement = document.querySelector(options.form);
    if (formElement) {
        options.rules.forEach(function (rule) {
            var inputElement = formElement.querySelector(rule.selector);
            if (inputElement) {
                inputElement.onblur = function () {
                    validateInput(inputElement, rule);
                };
                inputElement.oninput = function () {
                    clearError(inputElement);
                };
            }
        });
    }

    function validateInput(inputElement, rule) {
        var errorMessage = rule.test(inputElement.value);
        var errorElement = inputElement.parentElement.querySelector('.message');
        if (errorMessage) {
            errorElement.innerText = errorMessage;
            inputElement.parentElement.classList.add('invalid');
        } else {
            clearError(inputElement);
        }
    }

    function clearError(inputElement) {
        var errorElement = inputElement.parentElement.querySelector('.message');
        errorElement.innerText = "";
        inputElement.parentElement.classList.remove('invalid');
    }
}

Validator.isRequired = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : 'Please fill in this field';
        }
    };
};

Validator.isPassword = function (selector, minLength = 6) {
    return {
        selector: selector,
        test: function (value) {
            return value.length >= minLength ? undefined : `Password must be at least ${minLength} characters`;
        }
    };
};

Validator.isConfirmed = function (selector, getConfirmValue, message) {
    return {
        selector: selector,
        test: function (value) {
            return value === getConfirmValue() ? undefined : message || 'Passwords do not match';
        }
    };
};