//function that returns a license badge based on which license is passed in
//If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "none") {
    return ``
  }
  else {
    return `![${license}](https://img.shields.io/badge/license-${license}-brightgreen)`
  }
}

//function that returns the license link
//If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "Apache2.0") {
    return "https://www.apache.org/licenses/LICENSE-2.0"
  }
  else if (license === 'GNU3.0') {
    return "https://www.gnu.org/licenses/gpl-3.0.en.html#:~:text=The%20GNU%20General%20Public%20License%20is%20a%20free%2C%20copyleft%20license,share%20and%20change%20the%20works."
  }
  else if (license === 'MIT') {
    return "https://choosealicense.com/licenses/mit/"
  }
  else {
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "none") {
    return ``
  }
  else {
    return `## License`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}
${renderLicenseBadge(data.license)}
${renderLicenseLink(data.license)}

## Contributors
${data.contributors}

## Tests
${data.tests}

## Questions
${data.questions}
`;
};

module.exports = generateMarkdown;
