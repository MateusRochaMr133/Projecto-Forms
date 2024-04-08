const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const passwordConfirmation = document.querySelector("#password-confirmation");

/* Adicionando um evento ao formulario do tipo submit, lembre-se que como o evento é do tipo submit iremos receber um event(event) do proprio submit
Submit - Enviar o formulario
AddEventListener - Capturar uma ação ou evento do usuario no formulario*/
form.addEventListener('submit', (event) => {
    /* Prevenindo o evento padrao que seria enviar o formulario para algum lugar */
    event.preventDefault();

    /* Alert("Cadastrado com Sucesso") */
    checkForm();
});

username.addEventListener('blur', () => {
    checkInputUsername();
})

email.addEventListener('blur', () => {
    checkInputEmail();
})

password.addEventListener('blur', () => {
    checkInputPassword();
})

passwordConfirmation.addEventListener('blur', () => {
    checkInputPassWordConfirmation();
})

function checkInputUsername() {
    const usernameValue = username.value;

    if (usernameValue === "") {
        errorInput(username, "Preencha um nome de usuário");
    }
    else {
        const formItem = username.parentElement;
        formItem.classList = 'form-content';
    }
};

function checkInputEmail() {
    const emailValue = email.value;

    if (emailValue === "") {
        errorInput(email, "Preencha um e-mail válido");
    }
    else {
        const formItem = email.parentElement;
        formItem.classList = 'form-content';
    }
};

function checkInputPassword() {
    const passwordValue = password.value;

    if (passwordValue === "") {
        errorInput(password, "Preencha um e-mail válido");
    }
    else if (passwordValue.length < 8) {
        /* length - propriedade que verifica quantos caracteres foram digitados */
        errorInput(password, "A senha deve conter no minio 8 caracteres!");
    }
    else {
        const formItem = password.parentElement;
        formItem.classList = 'form-content';
    }
};

function checkInputPassWordConfirmation() {
    const passWordConfirmationValue = passwordConfirmation.value;

    if (passWordConfirmationValue === "") {
        errorInput(passwordConfirmation, "Preencha uma senha válida");
    }
    else if (passWordConfirmationValue.length < 8) {
        errorInput(passwordConfirmation, "A senha deve conter no minimo 8 caracteres");
    }
    else if ( passWordConfirmationValue != password.value) {
        errorInput(passwordConfirmation, "A senha não é a mesma de cima")
    }
    else {
        const formItem = passwordConfirmation.parentElement;
        formItem.classList = 'form-content';
    }
};

function errorInput(input, message) {
    /* ParentElement - seleciona o pai direto do elemento especificado */
    const formItem = input.parentElement;

    /* FormItem.querySelector("span") = Seleciona o span que estiver dentro do formItem */
    const textMessage = formItem.querySelector("span");

    textMessage.innerText = message;
    formItem.className = "form-content error";
};

function checkForm() {
    checkInputUsername();
    checkInputEmail();
    checkInputPassword();
    checkInputPassWordConfirmation();
    

    /* QueryselectorAll = seleciona todos os elementos com a classe .form-content do formulário, as guardando dentro de um array */
    const formItems = form.querySelectorAll('.form-content');

    /* Every verifica se o array está de acordo com uma condição que especificarmos, verifica se esta preenchido todas as posiçoes do array, ele percorre toda a array */
    const isValid = [...formItems].every ((item) => {
        /* O return esta retornando se a condiçao e verdadeira,sendo verdadeira ele ira dentro do form-cont do formulario e vai verificar os valores de cada item do formulario */
        return item.className === "form-content"
    })

    console.log(isValid)

    if (isValid) {
        alert('Cadastrado com Sucesso!')
    }
};