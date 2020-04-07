import React from 'react';
import { Paragraph } from 'pieces/typography';
import { LegalPageGridItem } from 'pieces/blocks';

export const ImpressumBlock = ({
  company,
  headOfCompany,
  headOfCompanyIntro,
  registerHeadline,
  commercialRegisterEntry,
  address,
  tel,
  email,
  ustid,
  sx,
  commercialRegister,
}) => (
  <LegalPageGridItem sx={sx}>
    <Paragraph variant='bold'>{company}</Paragraph>
    <br />
    {headOfCompanyIntro}
    {':'}
    <Paragraph> {headOfCompany}</Paragraph>
    <br />
    <Paragraph>
      {address.street}
      <br />
      {address.city}
    </Paragraph>
    <br />
    <Paragraph>Telefon: {tel}</Paragraph>
    {email && (
      <>
        <br />
        <Paragraph>Email: {email}</Paragraph>
      </>
    )}
    <br />
    <Paragraph>UStID: {ustid}</Paragraph>
    {/* If Entry in Commercial Register is given */}
    {commercialRegister && commercialRegister.number && (
      <>
        <br />
        <Paragraph variant='bold'> {registerHeadline}</Paragraph>
        <Paragraph>{commercialRegisterEntry.title}</Paragraph>
        {/* eslint-disable-next-line max-len */}
        <Paragraph>{`${commercialRegisterEntry.courtName}: ${commercialRegister.court}`}</Paragraph>
        {/* eslint-disable-next-line max-len */}
        <Paragraph>{`${commercialRegisterEntry.numberName}: ${commercialRegister.number}`}</Paragraph>
      </>
    )}
  </LegalPageGridItem>
);
