// 1. Track which step we're on
let currentStep = 1;
const totalSteps = 3;

const steps = document.querySelectorAll('.form-step');
const stepLabels = document.querySelectorAll('.step-label');
const progressFill = document.getElementById('progressFill');
const form = document.getElementById('multiStepForm');
const successMessage = document.getElementById('successMessage');

// 2. Show only the current step, update progress bar + labels
function showStep(stepNumber) {
  steps.forEach(step => {
    step.classList.toggle('active', Number(step.dataset.step) === stepNumber);
  });

  stepLabels.forEach(label => {
    label.classList.toggle('active', Number(label.dataset.step) === stepNumber);
  });

  const percentage = (stepNumber / totalSteps) * 100;
  progressFill.style.width = `${percentage}%`;
}

// 3. Validate only the fields inside the CURRENT step
function validateCurrentStep() {
  const activeStep = document.querySelector('.form-step.active');
  const inputs = activeStep.querySelectorAll('input[required], select[required]');

  for (const input of inputs) {
    if (input.value.trim() === '') {
      input.style.borderColor = '#E8574A';
      input.focus();
      return false;
    } else {
      input.style.borderColor = '#DDD6CB';
    }
  }
  return true;
}

// 4. Next button logic
document.querySelectorAll('.next-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    if (!validateCurrentStep()) return;

    if (currentStep < totalSteps) {
      currentStep++;
      showStep(currentStep);

      if (currentStep === totalSteps) {
        buildReviewSummary();
      }
    }
  });
});

// 5. Back button logic
document.querySelectorAll('.back-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    if (currentStep > 1) {
      currentStep--;
      showStep(currentStep);
    }
  });
});

// 6. Build the review screen from what the user entered
function buildReviewSummary() {
  const fullName = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;
  const service = document.getElementById('service').value;
  const budget = document.getElementById('budget').value || 'Not specified';

  document.getElementById('reviewSummary').innerHTML = `
    <p><strong>Name:</strong> ${fullName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Interested in:</strong> ${service}</p>
    <p><strong>Budget:</strong> ${budget}</p>
  `;
}

// 7. Final submit
form.addEventListener('submit', function (e) {
  e.preventDefault();
  form.classList.add('hidden');
  document.querySelector('.step-labels').classList.add('hidden');
  document.querySelector('.progress-bar').classList.add('hidden');
  successMessage.classList.remove('hidden');
});