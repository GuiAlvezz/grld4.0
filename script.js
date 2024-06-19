// Seleciona os elementos do DOM
const userNameInput = document.getElementById('user-name');
const userEmailInput = document.getElementById('user-email');
const userPhoneInput = document.getElementById('user-phone');
const cardNumberDisplay = document.getElementById('card-number-display');
const cardExpirationDisplay = document.getElementById('card-expiration-display');
const cardLimitDisplay = document.getElementById('card-limit-display');
const updateUserButton = document.getElementById('update-user-info');
const transactionList = document.getElementById('transaction-list');
const paymentMethodsList = document.getElementById('payment-methods-list');

// Adiciona evento de click ao botão de atualizar informações do usuário
updateUserButton.addEventListener('click', () => {
  const userName = userNameInput.value;
  const userEmail = userEmailInput.value;
  const userPhone = userPhoneInput.value;

  // Atualiza informações do usuário
  document.getElementById('user-name-display').textContent = userName;
  document.getElementById('user-email-display').textContent = userEmail;
  document.getElementById('user-phone-display').textContent = userPhone;
});

// Simula as informações do cartão
const cardNumber = '1234 5678 9012 3456';
const cardExpiration = '12/2025';
const cardLimit = 'R$ 1.000,00';

// Exibe as informações do cartão
cardNumberDisplay.textContent = cardNumber;
cardExpirationDisplay.textContent = cardExpiration;
cardLimitDisplay.textContent = cardLimit;

// Simula uma lista de transações
const transactions = [
  { id: 1, date: '2022-01-01', description: 'Compra em loja', value: 'R$ 100,00' },
  { id: 2, date: '2022-01-05', description: 'Pagamento de conta', value: 'R$ 50,00' },
  { id: 3, date: '2022-01-10', description: 'Transferência', value: 'R$ 200,00' },
];

// Renderiza a lista de transações
transactions.forEach((transaction) => {
  const transactionListItem = document.createElement('li');
  transactionListItem.textContent = `${transaction.date} - ${transaction.description} - ${transaction.value}`;
  transactionList.appendChild(transactionListItem);
});

// Simula uma lista de métodos de pagamento
const paymentMethods = [
  { id: 1, name: 'Cartão de Crédito', description: 'Visa' },
  { id: 2, name: 'Boleto', description: 'Boleto Bancário' },
  { id: 3, name: 'Pix', description: 'Pix' },
];

// Renderiza a lista de métodos de pagamento
paymentMethods.forEach((paymentMethod) => {
  const paymentMethodListItem = document.createElement('li');
  paymentMethodListItem.textContent = `${paymentMethod.name} - ${paymentMethod.description}`;
  paymentMethodsList.appendChild(paymentMethodListItem);
});

