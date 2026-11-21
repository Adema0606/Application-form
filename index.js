const tickets = [
  { title: 'Проектор не включается', room: '203', category: 'Оборудование', done: false },
  { title: 'Не закрывается окно', room: '105', category: 'Аудитория', done: false },
  { title: 'В коридоре не горит свет', room: 'Коридор, 2-й этаж', category: 'Другое', done: true }
];

const ticketList = document.getElementById('ticketList');

function renderTickets() {
  ticketList.innerHTML = '';

  tickets.forEach((ticket) => {
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
    ticketList.append(li);
  });
}

renderTickets();