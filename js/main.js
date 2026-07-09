document.addEventListener('DOMContentLoaded', () => {
    
    
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');

    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', (e) => {
            sidebar.classList.toggle('open');
            e.stopPropagation();
        });

        document.addEventListener('click', (e) => {
            if (sidebar.classList.contains('open') && !sidebar.contains(e.target)) {
                sidebar.classList.remove('open');
            }
        });
    }

    
    const profileTrigger = document.getElementById('profile-trigger');
    const profileOverlay = document.getElementById('profile-card-overlay');
    const profileClose = document.getElementById('profile-close');

    if (profileTrigger && profileOverlay && profileClose) {
        
        profileTrigger.addEventListener('click', (e) => {
            profileOverlay.classList.add('show');
            e.stopPropagation();
        });

     
        profileClose.addEventListener('click', () => {
            profileOverlay.classList.remove('show');
        });

       
        document.addEventListener('click', (e) => {
            const profileCard = profileOverlay.querySelector('.profile-card');
            if (profileOverlay.classList.contains('show') && !profileCard.contains(e.target)) {
                profileOverlay.classList.remove('show');
            }
        });
    }

    const logoutBtn = document.getElementById('sidebar-logout-btn');
    const userDisplay = document.getElementById('user-display');

    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            
            const confirmExit = confirm("Are you sure you want to securely exit your investment session?");
            if (confirmExit) {
                alert("Session terminated safely. Simulating account lock redirection...");
                if (userDisplay) userDisplay.textContent = "Session Closed";
                if (loginBtn) loginBtn.style.display = "inline-block"; 
            }
        });
    }
});