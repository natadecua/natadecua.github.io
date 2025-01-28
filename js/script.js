// Initialize Botpress Chat
document.addEventListener('DOMContentLoaded', function() {
    window.botpressWebChat.init({
      "composerPlaceholder": "Ask about GCF Batangas",
      "botId": "YOUR_BOT_ID",
      "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
      "messagingUrl": "https://messaging.botpress.cloud",
      "clientId": "YOUR_CLIENT_ID",
      "lazySocket": true,
      "themeName": "prism",
      "frontendVersion": "v1",
      "theme": {
        "primaryColor": "#2A4B3C",
        "secondaryColor": "#5D4037",
        "showPoweredBy": false
      }
    });
  });
  
  // Form Submission Handling
  document.querySelectorAll('.church-form').forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const submitBtn = form.querySelector('button[type="submit"]');
      
      submitBtn.disabled = true;
      submitBtn.innerHTML = 'Sending...';
  
      try {
        const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });
  
        if (response.ok) {
          form.reset();
          alert('Message sent successfully!');
        } else {
          throw new Error('Form submission failed');
        }
      } catch (error) {
        alert('Error sending message. Please try again.');
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = 'Send Message';
      }
    });
  });
  
  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });