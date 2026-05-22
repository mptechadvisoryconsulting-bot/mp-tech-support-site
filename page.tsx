import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MP Technology Consulting | Support Request',
  description: 'Submit a support or client assessment request to MP Technology Consulting.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
