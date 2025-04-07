const updates = [
  { date: '2025-10-30', description: 'More OOP.' },
  { date: '2025-08-14', description: 'More OOP.' },
  { date: '2024-07-06', description: 'Company considered Coalesce as a tool to work with...' },
  { date: '2024-05-18', description: 'Worked with some OOP (Object-Oriented Programming) in Python.' }
];

const updatesList = document.getElementById('updates-list');

updates.forEach(update => {
  const li = document.createElement('li');
  li.textContent = `${update.date}: ${update.description}`;
  updatesList.appendChild(li);
});
