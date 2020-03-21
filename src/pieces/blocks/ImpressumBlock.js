import React from 'react';
import { Paragraph } from 'pieces/typography';
import { LegalPageGridItem } from 'pieces/blocks';

export const ImpressumBlock = ({
  company,
  headOfCompany,
  address,
  tel,
  ustid,
  sx,
}) => (
  <LegalPageGridItem sx={sx}>
    <Paragraph variant='bold'>{company}</Paragraph>
    <br />
    Vertretungsberechtigter Geschäftsführer:
    <Paragraph> {headOfCompany}</Paragraph>
    <br />
    <Paragraph>
      {address.street}
      <br />
      {address.city}
    </Paragraph>
    <br />
    <Paragraph>Telefon: {tel}</Paragraph>
    <br />
    <Paragraph>UStID: {ustid}</Paragraph>
  </LegalPageGridItem>
);
