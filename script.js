const token = '5760028210:AAG5N7PJUyebHry7NLR3nMuh7kMI1tUhvzM';const chatId = 'TARGET_CHAT_ID';
const message = 'Hello from my website!';

fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${message}`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });