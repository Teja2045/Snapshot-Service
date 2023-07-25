import Navbar from "@/components/Navbar";

export const metadata = {
  title: "snapshot service",
  description: "snapshot service",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{scrollBehavior:'smooth'}}>
      <body
        style={{ backgroundColor: "#f8fafc", margin:"0" }}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
