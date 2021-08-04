import { render, screen } from '@testing-library/react';
import DataInfo from './DataInfo';

test('DataInfo phone = "telefono" and mail = "contacto.fonovital@gmail.com"', async () => {
    render(<DataInfo />);
    expect(await screen.queryByText("contacto.fonovital@gmail.com")).toBeInTheDocument();
    expect(await screen.queryByText("telefono")).toBeInTheDocument();
});