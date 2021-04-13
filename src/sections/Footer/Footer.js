// external dependencies
import React, { memo } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
// Pieces components
// import { usePageContext } from 'pieces/utils/context';
import { Section, NavigationLink, GridItem, FlexWrapper } from 'pieces';

// Local Component import
import { ThePuzzlersLink } from './ThePuzzlesLink';

//
// Multi Language Footer
//
// export const Footer = memo(() => {
//   const { locale } = usePageContext();
//   const { enNavLinks, deNavLinks } = useStaticQuery(graphql`
//     query {
//       enNavLinks: navJson {
//         footer {
//           links {
//             title
//             to
//           }
//         }
//       }
//       deNavLinks: deNavJson {
//         footer {
//           links {
//             title
//             to
//           }
//         }
//       }
//     }
//   `);

//   // Set footer links based on locale
//   const { footer: { links = [] } = {} } =
//     locale === 'de' ? deNavLinks : enNavLinks;

//   return (
//     <Section as='footer' sx={{ mb: ['20vw', '10vw', '0', '0', '2vw'] }}>
//       {/* Footer Content Wrapper */}
//       <GridItem
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1, transition: { delay: 1, duration: 2 } }}
//         sx={{
//           display: 'flex',
//           flexDirection: ['column', 'column', 'row', 'row', 'row'],
//           textAlign: ['center', 'center', 'center', 'left', 'left'],
//           justifyContent: 'space-between',
//           alignItems: ['center', 'center', 'flex-end', 'flex-end', 'flex-end'],
//           margin: [
//             '10vw 0 4vw',
//             '5vw 0',
//             '10vw 0',
//             '10vw 0 5vw 0',
//             '5vw 0 2vw 0',
//           ],
//         }}
//       >
//         {/* Loop through Footer Links */}
//         <FlexWrapper
//           sx={{ flexDirection: ['column', 'column', 'row', 'row', 'row'] }}
//         >
//           {links.map(link => (
//             <GatsbyLink
//               sx={{
//                 marginRight: [0, 0, 20, 20, 25],
//                 marginBottom: [20, 10, 0, 0, 0],
//               }}
//               key={link.to}
//               to={link.to}
//               variant='footer'
//             >
//               {link.title}
//             </GatsbyLink>
//           ))}
//         </FlexWrapper>
//         {/* "Built by the Puzzlers" - Reference */}
//         <ThePuzzlersLink />
//       </GridItem>
//     </Section>
//   );
// });

//
// Single Language Footer
//
export const Footer = memo(() => {
  const {
    navJson: { footer: { links = [] } = {} },
  } = useStaticQuery(graphql`
    query {
      navJson {
        footer {
          links {
            title
            to
          }
        }
      }
    }
  `);

  return (
    <Section as='footer' sx={{ mb: ['20vw', '10vw', '0', '0', '2vw'] }}>
      {/* Footer Content Wrapper */}
      <GridItem
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1, duration: 2 } }}
        sx={{
          display: 'flex',
          flexDirection: ['column', 'column', 'row', 'row', 'row'],
          textAlign: ['center', 'center', 'center', 'left', 'left'],
          justifyContent: 'space-between',
          alignItems: ['center', 'center', 'flex-end', 'flex-end', 'flex-end'],
          margin: [
            '10vw 0 4vw',
            '5vw 0',
            '10vw 0',
            '10vw 0 5vw 0',
            '5vw 0 2vw 0',
          ],
        }}
      >
        {/* Loop through Footer Links defined in nav.json */}
        <FlexWrapper
          sx={{ flexDirection: ['column', 'column', 'row', 'row', 'row'] }}
        >
          {links.map((link) => (
            <NavigationLink
              sx={{
                marginRight: [0, 0, 20, 20, 25],
                marginBottom: [20, 10, 0, 0, 0],
              }}
              key={link.to}
              to={link.to}
              variant='footer'
            >
              {link.title}
            </NavigationLink>
          ))}
          <NavigationLink to='/#header'>
            Go back to landingpage header
          </NavigationLink>
        </FlexWrapper>
        {/* "Built by the Puzzlers" - Reference */}
        <ThePuzzlersLink />
      </GridItem>
    </Section>
  );
});
