// Global configuration override to use Poppins across all charts cleanly
Chart.defaults.font.family = "'Poppins', sans-serif";

// ==========================================
// CHART 1: BAR CHART (Monthly Sales)
// ==========================================
const barCtx = document.getElementById('barChart').getContext('2d');
new Chart(barCtx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Monthly Sales ($)',
            data: [1200, 1900, 1500, 2200, 1800, 2500],
            backgroundColor: '#2d89ff', /* Electric Blue matching your gradient themes */
            borderRadius: 6
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { labels: { color: '#334155', font: { weight: '600' } } }
        },
        scales: {
            y: { 
                ticks: { color: '#64748b' }, 
                grid: { color: '#e2e8f0' } /* Soft light gridline divider lines */
            },
            x: { 
                ticks: { color: '#64748b' }, 
                grid: { display: false } 
            }
        }
    }
});

// ==========================================
// CHART 2: LINE CHART (Website Traffic)
// ==========================================
const lineCtx = document.getElementById('lineChart').getContext('2d');
new Chart(lineCtx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [{
            label: 'Website Traffic',
            data: [400, 450, 420, 600, 800],
            borderColor: '#10b981', /* High-vibrancy Green */
            backgroundColor: 'rgba(16, 185, 129, 0.1)',
            borderWidth: 3,
            fill: true,
            tension: 0.4
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { labels: { color: '#334155', font: { weight: '600' } } }
        },
        scales: {
            y: { 
                ticks: { color: '#64748b' }, 
                grid: { color: '#e2e8f0' } 
            },
            x: { 
                ticks: { color: '#64748b' }, 
                grid: { display: false } 
            }
        }
    }
});

// ==========================================
// CHART 3: DOUGHNUT CHART (Traffic Sources)
// ==========================================
const pieCtx = document.getElementById('pieChart').getContext('2d');
new Chart(pieCtx, {
    type: 'doughnut', 
    data: {
        labels: ['Desktop', 'Tablet', 'Mobile'],
        datasets: [{
            data: [55, 25, 20],
            backgroundColor: [
                '#2d89ff', /* Electric Blue */
                '#8b5cf6', /* Modern Vivid Purple */
                '#f43f5e'  /* Modern Rose/Coral */
            ],
            borderWidth: 4,
            borderColor: '#f8fafc' /* Matches card background container for clear spacing segments */
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { 
                position: 'bottom', 
                labels: { color: '#334155', padding: 20, font: { weight: '600' } } 
            }
        }
    }
});