// Contact Form Handling
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Send data to webhook
        fetch('https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjYwNTZmMDYzNTA0MzQ1MjY5NTUzNDUxMzAi_pc', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        })
        .catch(error => {
            console.error('Error sending message:', error);
        });
    });
});
