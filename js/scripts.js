// Select Elements
const menuToggle = document.querySelector('.menu-toggle');
const navLinksMobile = document.querySelector('.nav-links-mobile');

// Add Event Listener for Toggling the Menu
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinksMobile.classList.toggle('active');
});

function copyContract() {
    const contractAddress = document.getElementById('contract-address').textContent;
    navigator.clipboard.writeText(contractAddress).then(() => {
        showPopup(); // Show popup when copied successfully
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}
function showPopup() {
    const popup = document.getElementById('copy-popup');
    popup.classList.add('show');

    // Hide popup after 2 seconds
    setTimeout(() => {
        popup.classList.remove('show');
    }, 2000);
}