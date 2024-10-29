function showContent(section) {
            // Remove active class from all tabs and content sections
            document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
            document.querySelectorAll('.content-section').forEach(section => section.classList.remove('active'));

            // Add active class to the selected tab and content section
            document.getElementById(`tab-${section}`).classList.add('active');
            document.getElementById(`content-${section}`).classList.add('active');
        }