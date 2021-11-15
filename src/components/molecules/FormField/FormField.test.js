import React, { useState } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import FormField from './FormField';
import {renderWithProviders} from 'heplers/renderWithProviders';

describe('Tests', () => {
  it('Render component', () => {
    renderWithProviders(<FormField name="name" label="name" id="name" />);
  });
});
