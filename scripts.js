// Function to calculate BMI
function calculateBMI(height, weight) {
    if (height && weight) {
        let heightInMeters = height / 100;
        return (weight / (heightInMeters * heightInMeters)).toFixed(2);
    }
    return '--';
}

// Save settings and update profile page
function saveSettings() {
    const name = document.getElementById('name').value;
    const profilePic = document.getElementById('profilePic').files[0];
    const age = document.getElementById('age').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;

    localStorage.setItem('name', name);
    localStorage.setItem('age', age);
    localStorage.setItem('height', height);
    localStorage.setItem('weight', weight);

    if (profilePic) {
        const reader = new FileReader();
        reader.onload = function (e) {
            localStorage.setItem('profileImage', e.target.result);
            redirectToProfile();  // Redirect after the image is saved
        };
        reader.readAsDataURL(profilePic);
    } else {
        redirectToProfile();  // Redirect immediately if no image is selected
    }
}

// Update profile data on the profile page
function updateProfileData() {
    const name = localStorage.getItem('name');
    const age = localStorage.getItem('age');
    const height = localStorage.getItem('height');
    const weight = localStorage.getItem('weight');
    const bmi = calculateBMI(height, weight);

    document.getElementById('userName').textContent = name || 'John Doe';
    document.getElementById('bmiResult').textContent = 'BMI: ' + bmi;
}

// Update profile image on the profile page
function updateProfileImage() {
    const profileImage = localStorage.getItem('profileImage');
    if (profileImage) {
        document.getElementById('profileImage').src = profileImage;
    }
}

// Redirect to the profile page
function redirectToProfile() {
    window.location.href = 'index.html'; // Make sure this path is correct
}

// Load profile data on page load
window.onload = function () {
    updateProfileData();
    updateProfileImage();
};
