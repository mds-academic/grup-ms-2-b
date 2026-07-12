const fs = require('fs');
const stylePath = '/Users/yazidhilmi/Documents/cloud/Kalananti-cloud/Academic_Content/B2B/UOB/Async/Middleschool/grupB/dashboard/src/style.css';
let style = fs.readFileSync(stylePath, 'utf8');

const cssToAdd = `
details.lesson-reading-accordion {
  background: var(--white);
  border: 2px solid var(--line);
  border-radius: 16px;
  padding: 16px;
  margin-top: 16px;
}
details.lesson-reading-accordion summary {
  font-family: 'Nunito', system-ui, -apple-system, sans-serif;
  font-weight: 700;
  font-size: 1.1rem;
  cursor: pointer;
  outline: none;
  color: var(--navy-dark);
}
details.lesson-reading-accordion > div {
  margin-top: 16px;
  border-top: 1px solid var(--line);
  padding-top: 16px;
}
`;

style = style.replace('@media (min-width: 1025px) {', cssToAdd + '\n@media (min-width: 1025px) {');

fs.writeFileSync(stylePath, style);
console.log('Patched grupB style.css successfully');
