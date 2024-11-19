const ctx1 = document.getElementById('barChart').getContext('2d');
const barChart = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['3.000.000,00', '10.000.000,00', '15.000.000,00', '50.000.000,00'],
        datasets: [{
            label: 'Gaji Perbulan',
            data: [200, 150, 180, 10],
            backgroundColor: 'rgba(72, 191, 227, 0.6)',
            borderColor: 'rgba(72, 191, 227, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const ctx2 = document.getElementById('pieChart1').getContext('2d');
const pieChart1 = new Chart(ctx2, {
    type: 'pie',
    data: {
        labels: ['Pegawai Bank', 'Staff Kantoran', 'Arsitek', 'Programmer', 'Dosen', 'Programmer'],
        datasets: [{
            label: 'Dokumen',
            data: [25, 30, 20, 25],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
        }]
    }
});

const ctx3 = document.getElementById('pieChart2').getContext('2d');
const pieChart2 = new Chart(ctx3, {
    type: 'doughnut',
    data: {
        labels: ['S1 Teknik Informatika Kendari', 'D4 Teknik Informatika Bandung', 'S1 Manajaemen Informatika', 'S1 Akutansi', 'D4 Teknik Perikanan'],
        datasets: [{
            label: 'Agama',
            data: [50, 20, 10, 15, 5],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF']
        }]
    }
});
