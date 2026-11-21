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
    li.textContent = ticket.title + ' | ' + ticket.room + ' | ' + ticket.category;
    ticketList.append(li);
});
}

renderTickets();