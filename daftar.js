document.getElementById('toggleButton').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    if (sidebar.classList.contains('inactive')) {
      sidebar.classList.remove('inactive');
      sidebar.classList.add('active');
    } else {
      sidebar.classList.remove('active');
      sidebar.classList.add('inactive');
    }
  });
  
  const rowsPerPage = 10;
  let currentPage = 1;
  
  function paginateTable(filteredRows) {
    const table = document.getElementById('dataTable');
    const totalRows = filteredRows.length;
    const totalPages = Math.ceil(totalRows / rowsPerPage);
  
    // Hide all rows
    const rows = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
    for (let i = 0; i < rows.length; i++) {
      rows[i].style.display = 'none';
    }
  
    // Show rows for the current page
    for (let i = (currentPage - 1) * rowsPerPage; i < currentPage * rowsPerPage && i < totalRows; i++) {
      filteredRows[i].style.display = '';
    }
  
    // Update pagination controls
    document.getElementById('pageInfo').textContent = `Page ${currentPage} of ${totalPages}`;
    document.getElementById('prevPage').disabled = currentPage === 1;
    document.getElementById('nextPage').disabled = currentPage === totalPages;
  }
  
  function filterTable() {
    const table = document.getElementById('dataTable');
    const rows = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
    const jurusan = document.getElementById('jurusanSelect').value.toLowerCase();
    const nim = document.getElementById('nimInput').value.toLowerCase();
    const nama = document.getElementById('namaInput').value.toLowerCase();
  
    let filteredRows = [];
  
    for (let i = 0; i < rows.length; i++) {
      const cells = rows[i].getElementsByTagName('td');
      const rowNim = cells[0].textContent.toLowerCase();
      const rowNama = cells[1].textContent.toLowerCase();
      const rowJurusan = cells[2].textContent.toLowerCase();
  
      if ((nim === '' || rowNim.includes(nim)) &&
          (nama === '' || rowNama.includes(nama)) &&
          (jurusan === '' || rowJurusan === jurusan)) {
        filteredRows.push(rows[i]);
      }
    }
  
    // Reset pagination to first page
    currentPage = 1;
    paginateTable(filteredRows);
  
    // Show or hide table based on filtered results
    document.getElementById('dataTable').style.display = filteredRows.length > 0 ? '' : 'none';
  }
  
  document.getElementById('prevPage').addEventListener('click', function() {
    if (currentPage > 1) {
      currentPage--;
      filterTable(); // Apply pagination after changing page
    }
  });
  
  document.getElementById('nextPage').addEventListener('click', function() {
    const totalRows = document.getElementById('dataTable').getElementsByTagName('tbody')[0].getElementsByTagName('tr').length;
    const totalPages = Math.ceil(totalRows / rowsPerPage);
    if (currentPage < totalPages) {
      currentPage++;
      filterTable(); // Apply pagination after changing page
    }
  });
  
  function onSearch() {
    filterTable();
  }
  
  document.querySelectorAll('.search-bar input, .search-bar select').forEach(function(element) {
    element.addEventListener('input', function() {
      onSearch();
    });
  });
  
  // Call filterTable() when the page loads
  window.addEventListener('load', function() {
    filterTable();
  });
  