const tickets = [
  { title: 'Проектор не включается', room: '203', category: 'Оборудование', done: false },
  { title: 'Не закрывается окно', room: '105', category: 'Аудитория', done: false },
  { title: 'В коридоре не горит свет', room: 'Коридор, 2-й этаж', category: 'Другое', done: true }
];

const ticketList = document.getElementById('ticketList');

function renderTickets() {
  ticketList.innerHTML = '';

  tickets.forEach((ticket, index) => {
    const li = document.createElement('li');
    
    const titleSpan = document.createElement('span');
    titleSpan.className = 'ticket-title';
    titleSpan.textContent = ticket.title;

    const infoSpan = document.createElement('span');
    infoSpan.className = 'ticket-info';
    infoSpan.textContent = 'Где: ' + ticket.room + ' | Категория: ' + ticket.category + ' | ';

    const statusSpan = document.createElement('span');
    if (ticket.done) {
      statusSpan.className = 'status-done';
      statusSpan.textContent = 'Выполнена';
    } else {
      statusSpan.className = 'status-open';
      statusSpan.textContent = 'Открыта';
    }

    infoSpan.append(statusSpan);
    li.append(titleSpan, infoSpan);

    const btnGroup = document.createElement('div');
    btnGroup.className = 'btn-group';

    if (ticket.done === false) {
      const doneBtn = document.createElement('button');
      doneBtn.className = 'btn-done';
      doneBtn.textContent = 'Выполнить';
      doneBtn.addEventListener('click', () => {
        ticket.done = true;
        renderTickets();
      });
      btnGroup.append(doneBtn);
    }

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn-delete';
    deleteBtn.textContent = 'Удалить';
    deleteBtn.addEventListener('click', () => {
      tickets.splice(index, 1);
      renderTickets();
    });
    
    btnGroup.append(deleteBtn);
    li.append(btnGroup);
    ticketList.append(li);
  });
}

renderTickets();


const ticketTitle = document.getElementById('ticketTitle');
const ticketRoom = document.getElementById('ticketRoom');
const ticketCategory = document.getElementById('ticketCategory');
const addTicketBtn = document.getElementById('addTicket');
const message = document.getElementById('message');

addTicketBtn.addEventListener('click', () => {
  const title = ticketTitle.value.trim();
  const room = ticketRoom.value.trim();
  const category = ticketCategory.value;

  if (title === '' || room === '' || category === '') {
    message.textContent = 'Заполните все поля!';
    return;
  }

  const newTicket = {
    title: title,
    room: room,
    category: category,
    done: false
  };

  tickets.push(newTicket);
  renderTickets();

  ticketTitle.value = '';
  ticketRoom.value = '';
  ticketCategory.value = '';
  message.textContent = '';
});






