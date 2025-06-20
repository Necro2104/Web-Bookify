// Contact page form validation
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
// Basic validation
        if (!name || !email || !subject || !message) {
            alert('Please fill out all fields.');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // In a real app, would submit to server
        // Show success message
        alert('Thank you for your message! We will get back to you soon.');
        
        // Reset form
        this.reset();

        // Create success notification
        const notification = document.createElement('div');
        notification.className = 'notification success';
        notification.innerHTML = `
            <div class="notification-icon">
                <i class="fas fa-check-circle"></i>
            </div>
            <div class="notification-content">
                <h3>Message Sent!</h3>
                <p>We've received your message and will respond shortly.</p>
            </div>
            <button class="notification-close">×</button>
        `;
        
        document.body.appendChild(notification);

        // Auto-remove notification after 5 seconds
        setTimeout(() => {
            notification.classList.add('fade-out');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 5000);

         // Close button for notification
        notification.querySelector('.notification-close').addEventListener('click', function() {
            notification.classList.add('fade-out');
            setTimeout(() => {
                notification.remove();
            }, 300);
        });
    });

    // Add styles for notification
    const style = document.createElement('style');
    style.textContent = `
        .notification {
            position: fixed;
            bottom: 20px;
            right: 20px;
            padding: 15px;
            background-color: white;
            border-radius: var(--border-radius-md);
            box-shadow: 0 4px 12px var(--shadow-color);
            display: flex;
            align-items: center;
            z-index: 100;
            max-width: 400px;
            animation: slide-in 0.3s ease;
        }
        
        .notification.success {
            border-left: 4px solid var(--success-color);
        }
        
        .notification-icon {
            margin-right: 15px;
            font-size: 24px;
            color: var(--success-color);
        }
        
        .notification-content h3 {
            margin: 0 0 5px 0;
        }
        
        .notification-content p {
            margin: 0;
            color: var(--light-text);
        }
        
        .notification-close {
            position: absolute;
            top: 10px;
            right: 10px;
            background: none;
            border: none;
            font-size: 18px;
            cursor: pointer;
            color: var(--light-text);
        }
        
        .notification.fade-out {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.3s ease, transform 0.3s ease;
        }
        
        @keyframes slide-in {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    
    document.head.appendChild(style);
});