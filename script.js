const updates = [
  { date: '2025-01-24', description: 'Coding in R and tidytext to analyze Star Trek The Next Generation script data.' },
  { date: '2024-11-22', description: 'Updated job descriptions R project with tidytext with recent experience.' },
  { date: '2024-10-23', description: 'Programatically download and summarize nflverse play-by-play data using Python.' },
];

const updatesList = document.getElementById('updates-list');

updates.forEach(update => {
  const li = document.createElement('li');
  li.textContent = `${update.date}: ${update.description}`;
  updatesList.appendChild(li);
});
