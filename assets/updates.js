const updates = [
  { date: '2025-04-07', description: 'Consolidated andrew-winter.github.io CSS styles and updated updates' },
  { date: '2025-04-03', description: 'Started analyzing Steely Dan lyrics sentiment (R, tidytext, sdarchive.com)' },
  { date: '2025-03-26', description: 'Studied "polite" web scraping (R, polite, rvest' },
  { date: '2025-03-22', description: 'Explored the Google Routes API (Python)' },
  { date: '2025-03-21', description: 'Wrote explore_files function to easily bring up specific directories with File Explorer (Python, command line)'},
  { date: '2025-03-18', description: 'Created repository to reproduce examples from Python documentation (Python)' },
  { date: '2025-01-25', description: 'Updated andrew-winter.github.io descriptions, experience, and code (HTML, CSS, JS)' },
  { date: '2025-01-20', description: 'Started analyzing Star Trek: The Next Generation scripts (R, tidytext, trekcore.com)' },
  { date: '2025-01-04', description: 'Updated NFL play-by-play analysis (Python, nflverse pbp, pandas, re, requests, sqlite3, bs4)' }
];

const updatesList = document.getElementById('updates-list');

updates.forEach(update => {
  const li = document.createElement('li');
  li.textContent = `${update.date}: ${update.description}`;
  updatesList.appendChild(li);
});
