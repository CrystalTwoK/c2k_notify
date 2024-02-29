let notifications = document.querySelector('.notifications');
let index = 0
let maxNotificationNumber = 3
let notificationList = {}

window.addEventListener('message', (e) =>{
  let data = e.data;
  if (data.action = "addNotification"){
    addNotification(data.message);
  }
})

function addNotification(message){
    index += 1;
    if (index > maxNotificationNumber) {
        notifications.removeChild(notifications.lastChild);
    }
    // console.log(index);
    let newListItem = document.createElement('li');
    newListItem.id = `#notifica_${index}`;
    newListItem.classList.add('notification');
    newListItem.innerHTML = `<div class="container animate__animated animate__slideInRight">
    <div class="notification-container">
    <i class="fa-solid fa-circle-info"></i>
      <div class="message">
        <span class="text text-1">NOTIFICA</span>
        <span class="text text-2">${message}</span>
      </div>
    </div>
    <div class="progress"></div>
</div>`
notifications.prepend(newListItem);

setTimeout(() => {
    index -= 1;
    // console.log(index)
    newListItem.remove();
}, 6 * 1000);
}