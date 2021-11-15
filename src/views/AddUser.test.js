import React from 'react';
import { renderWithProviders } from 'heplers/renderWithProviders';
import AddUser from './AddUser'
import Dashboard from './Dashboard';
import {screen, fireEvent} from '@testing-library/react'

describe('Fill the form field',()=>{
    it('Render the component',()=>{
        renderWithProviders(
        <>
        <AddUser/>
        <Dashboard/>
        </>
        );
        fireEvent.change(screen.getByTestId('Name'), {target: {value: 'Michael Romanow'}})
        fireEvent.change(screen.getByTestId('Attendance'), {target: {value: '78%'}})
        fireEvent.change(screen.getByTestId('Average'), {target: {value: '4.5'}})
        fireEvent.click(screen.getByText('Add'))
        screen.getByText('Michael Romanow')
    })
})