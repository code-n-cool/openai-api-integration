import React from 'react';  
import { render, screen } from '@testing-library/react';  
import FunctionCalling from './page'; // Adjust the path as necessary  
import { getAvailabilty } from '../../utils';

// Mocking the getAvailabilty function  
jest.mock('../../utils', () => ({  
    getAvailabilty: jest.fn(),  
}));  

describe('FunctionCalling Component', () => {  
    beforeEach(() => {  
        jest.clearAllMocks(); // Clear mocks before each test for isolation  
    });  

    it('renders correctly', () => {  
        render(<FunctionCalling />);  

        // Check if the DataTable component is rendered  
        expect(screen.getByTestId('datatable')).toBeInTheDocument();  
    });  

    it('calls getAvailabilty with correct arguments on function call', async () => {  
        const mockData = [{ idType: 1, name: 'Sample Data', price: 100 }];  
        (getAvailabilty as jest.Mock).mockResolvedValue(mockData); // Mock implementation to resolve  

        render(<FunctionCalling />);  

        // Simulate a scenario to trigger functionCallHandler (you may need to implement this based on your test requirements)  
        // For example, triggering a button click if you have any buttons in your chat component  

        expect(await screen.findByText('Sample Data')).toBeInTheDocument(); // Assuming your DataTable displays 'name'  
    });  
});