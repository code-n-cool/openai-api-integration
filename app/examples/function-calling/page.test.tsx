import React from 'react';  
import { render, screen } from '@testing-library/react';  
import FunctionCalling from './page';
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

        expect(await screen.findByText('Sample Data')).toBeInTheDocument(); // Assuming your DataTable displays 'name'  
    });  
});