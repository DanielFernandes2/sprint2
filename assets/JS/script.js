  // Função para enviar o formulário
  function submitForm(event) {
    event.preventDefault(); // Evita o comportamento padrão de envio do formulário

    // Obtém os valores dos campos do formulário
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Aqui você pode fazer o que desejar com os dados do formulário
    // Por exemplo, você pode enviar uma requisição AJAX para um servidor para processar os dados

    // Exemplo de exibição dos dados do formulário
    console.log('Nome:', name);
    console.log('Email:', email);
    console.log('Mensagem:', message);

    // Limpa os campos do formulário após o envio
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';

    alert('Mensagem enviada com sucesso!');
  }

  // Adiciona um ouvinte de evento para o envio do formulário
  document.getElementById('contact-form').addEventListener('submit', submitForm);

