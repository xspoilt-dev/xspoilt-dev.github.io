// Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const icon = themeToggle.querySelector('i');
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.className = `${savedTheme}-theme`;
    updateIcon(savedTheme === 'dark');
    
    themeToggle.addEventListener('click', () => {
        const isDark = document.body.classList.contains('dark-theme');
        const newTheme = isDark ? 'light' : 'dark';
        
        document.body.className = `${newTheme}-theme`;
        localStorage.setItem('theme', newTheme);
        updateIcon(!isDark);
    });
    
    function updateIcon(isDark) {
        icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
    }
});
