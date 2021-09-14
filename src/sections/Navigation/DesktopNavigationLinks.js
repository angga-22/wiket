// // External dependencies
// import React from 'react';
// import { useStaticQuery, graphql } from 'gatsby';
// import { Box } from '@thepuzzlers/pieces';

// // Local imports
// import { NavigationLink } from 'pieces';

// export const DesktopNavigationLinks = () => {
//   // Data
//   const {
//     navJson: {
//       nav: { links },
//     },
//   } = useStaticQuery(graphql`
//     query {
//       navJson {
//         nav {
//           links {
//             title
//             to
//           }
//         }
//       }
//     }
//   `);

//   return (
//     <Box
//       initial={{ scale: 1 }}
//       sx={{
//         display: ['none', 'none', 'none', 'none', 'flex'],
//         alignSelf: 'center',
//         alignItems: 'center',
//       }}
//     >
//       {links.map(({ to, title }) => (
//         <NavigationLink key={to} to={to} sx={{ p: ['10px 20px'] }}>
//           {title}
//         </NavigationLink>
//       ))}
//     </Box>
//   );
// };
