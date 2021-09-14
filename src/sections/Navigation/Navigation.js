// // external dependencies
// import React, { memo } from 'react';
// import { useStaticQuery, graphql } from 'gatsby';
// import { FlexWrapper, GridItem, Box } from '@thepuzzlers/pieces';
// // Local components
// import { SimpleNavigation } from 'pieces/navigation/simple';
// import { NavigationLink } from 'pieces';
// // client imports
// import { NavigationHeader } from './NavigationHeader';

// export const Navigation = memo(() => {
//   // data
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
//     <SimpleNavigation
//       NavigationHeader={(props) => <NavigationHeader {...props} />}
//       links={[
//         ...links.map(({ title, to }) => (
//           <NavigationLink
//             key={to}
//             to={to}
//             sx={{
//               p: ['2rem 0', '1.5rem 4vw', '5vw 0', '1.5rem 4vw', '1rem 0'],
//             }}
//           >
//             {title}
//           </NavigationLink>
//         )),
//       ]}
//       OverlayLayout={({ children }) => (
//         <GridItem>
//           <Box
//             sx={{
//               display: 'flex',
//               height: '100vh',
//               width: '100%',
//               mt: '-60px',
//             }}
//           >
//             <FlexWrapper
//               sx={{
//                 margin: 'auto',
//                 textAlign: 'center',
//                 flexWrap: 'wrap',
//                 justifyContent: 'center',

//                 flexDirection: ['column', 'row', 'column', 'row'],
//               }}
//             >
//               {children}
//             </FlexWrapper>
//           </Box>
//         </GridItem>
//       )}
//     />
//   );
// });
