const projects = [
  { project: 'NFL PBP Analysis', description: 'nflverse play-by-play summary stats and exploratory data analysis' },
  { project: 'TNG Sentiment Analysis', description: 'trekcore The Next Generation script regular expressions and sentiment analysis' },
  { project: 'SDA Sentiment Analysis', description: 'sdarchive Steely Dan album lyrics polite HTTP requests and sentiment analysis' },
];

const projectsList = document.getElementById('projects-list');

projects.forEach(update => {
  const li = document.createElement('li');
  li.textContent = `${update.project}: ${update.description}`;
  projectsList.appendChild(li);
});
