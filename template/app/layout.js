import "./globals.css";

export const metadata = {
  title: "Simple Home Page | by Professor Ragna",
  description: "Create simple home pages fast",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
