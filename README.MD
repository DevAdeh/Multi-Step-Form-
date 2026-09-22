# Multi-Step Form

A responsive multi-step form built with HTML, CSS, and JavaScript. Guides users through personal info, preferences, and a review step before final submission — with a live progress bar and Next/Back navigation.

## Features
- 3-step form flow with a visual progress bar
- Step-by-step validation (only checks the fields on the current step)
- Dynamic review screen that summarizes answers before submission
- Back/Next navigation without losing entered data
- Success message on submission

## How it works
Each step is a hidden/shown section controlled by JavaScript. A `currentStep` variable tracks progress, the progress bar width updates based on step number, and validation only checks inputs inside the active step before allowing the user to continue. On the final step, previously entered values are pulled back into a summary view before submission.

## Tech used
- HTML
- CSS
- JavaScript (DOM manipulation, form validation, dynamic content rendering)

## How to use
1. Clone or download this repo
2. Open `index.html` in your browser
3. Fill in each step and use Next/Back to navigate
4. Review your details on the final step and submit

## Project structure
multi-step-form/
├── index.html
├── style.css
├── script.js
└── README.md

## Author
Adeola Ejikunle — [GitHub](https://github.com/DevAdeh)