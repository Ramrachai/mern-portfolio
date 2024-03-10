import StyledComponentsRegistry from "../lib/registry";
import "./globals.css";

export const metadata = {
  title: "MERN Portfolio Project",
  description: "MERN Portfolio project by Ramrachai Marma",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
