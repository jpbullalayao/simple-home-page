import "./globals.css";

export const metadata = {
  title: "Simple Home Page | by Professor Ragna",
  description: "The simplest home page template for new projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
