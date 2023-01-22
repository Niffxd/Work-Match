'use client';
// import * as React from 'react';
// import Pagination from '@mui/material/Pagination';

// import { createTheme, ThemeProvider } from '@mui/material/styles';

// const theme = createTheme({
//   status: {
//     danger: '#e53e3e',
//   },
//   palette: {
//     primary: {
//       main: '#6b7fd7',
//       darker: '#053e85',
//     },
//     neutral: {
//       main: '#64748B',
//       contrastText: '#fff',
//     },
//   },
// });
export default function BasicPagination({ prueba, setPaginate }) {
  const handleClick = (e, page) => {
    setPaginate(prueba.slice(page, page + 5));
  };
  return (
    <div>
      {/* <ThemeProvider theme={theme}>
        <Pagination
          count={prueba.length-1}
          color="primary"
          onChange={handleClick}
        />
      </ThemeProvider> */}
    </div>
  );
}
