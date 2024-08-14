import React, { useState } from 'react';

const Table = ({ data, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the indexes of the items to be displayed on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the data array to get the items for the current page
  const currentPageData = data.slice(startIndex, endIndex);

  // Function to handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Generate pagination buttons
  const paginationButtons = [];
  const totalPages = Math.ceil(data.length / itemsPerPage);
  for (let i = 1; i <= totalPages; i++) {
    paginationButtons.push(
      <button key={i} onClick={() => handlePageChange(i)}>
        {i}
      </button>
    );
  }

  return (
    <div>
      <table itemsPerPage={5}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            {/* Add more table headers if needed */}
          </tr>
        </thead>
        <tbody>
          {currentPageData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              {/* Render additional columns here */}
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        {/* Render pagination buttons */}
        {paginationButtons}
      </div>
    </div>
  );
};

export default Table;
