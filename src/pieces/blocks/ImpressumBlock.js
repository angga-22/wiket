import React from 'react';
import PropTypes from 'prop-types';
// Pieces imports
import { Paragraph } from 'pieces';
import { LegalPageGridItem } from './LegalPageGridItem';

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

ImpressumBlock.propTypes = {
  sx: PropTypes.shape(),
  company: PropTypes.string.isRequired,
  headOfCompany: PropTypes.string.isRequired,
  headOfCompanyIntro: PropTypes.string.isRequired,
  registerHeadline: PropTypes.string.isRequired,
  commercialRegisterEntry: PropTypes.shape({
    title: PropTypes.string.isRequired,
    courtName: PropTypes.string.isRequired,
    numberName: PropTypes.string.isRequired,
  }).isRequired,
  commercialRegister: PropTypes.shape({
    number: PropTypes.string.isRequired,
    court: PropTypes.string.isRequired,
  }),
  address: PropTypes.shape({
    street: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
  }).isRequired,
  tel: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  ustid: PropTypes.string.isRequired,
};

ImpressumBlock.defaultProps = {
  sx: {},
  commercialRegister: {},
};
