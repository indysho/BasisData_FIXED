const ctx1 = document.getElementById('salaryChart').getContext('2d');
new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: [
            'Supervisor Produksi', 'Kepala Direktur', 'Penyanyi', 
            'Supervisor Produksi', 'Kepala Direktur', 'Penyanyi',
            'lanjut S1', 'Arsitek', 'Mechanical Enginer', 'Dosen',
            'Staf administrasi', 'Manager', 'Perancang web',
            'Manajer agribisnis', 'Pegawai bank', 'Lanjut S1',
            'PLN', 'Lanjut kuliah S1 Perikanan', 'Pegawai capil',
            'Konstruksi bangunan', 'Kantor samsat', 'Lanjut kulias S1',
            'Chef', 'Proggramer', 'PLN', 'Karyawan indomaret', 
            'Travel', 'Pegawai bank', 'machines', 'Bengkel dan perawatan mesin',
            'Pengacara', 'Karyawan restoran', 'Owner Skincare', 'Developer Aplikasi'
        ],
        datasets: [{
            label: 'Gaji (Rp)',
            data: [
                6000000, 10000000, 50500000, 6000000, 10000000, 50500000, 
                500000, 20500000, 2500000, 500000, 10500000, 5500000, 
                4000000, 12500000, 12000000, 1000000, 3500000, 1000000, 
                2500000, 9500000, 8500000, 500000, 500000, 3500000, 
                3500000, 1500000, 1000000, 2500000, 5500000, 10500000, 
                5500000, 1500000, 3500000, 49000000
            ],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
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
