import StyledComponentsRegistry from '../lib/registry';
import './globals.css';
import 'rsuite/dist/rsuite-no-reset.min.css';
import { CustomProvider } from 'rsuite';

export const metadata = {
    title: 'MERN Portfolio Project',
    description: 'MERN Portfolio project by Ramrachai Marma',
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body>
                <StyledComponentsRegistry>
                    <CustomProvider>{children}</CustomProvider>
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}
