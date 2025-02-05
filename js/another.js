// Show Popup on Page Load
window.onload = function () {
    setTimeout(() => {
        document.getElementById('launchPopup').classList.add('show');
    }, 1000); // 1-second delay
};

// Close Popup
function closePopup() {
    document.getElementById('launchPopup').classList.remove('show');
}