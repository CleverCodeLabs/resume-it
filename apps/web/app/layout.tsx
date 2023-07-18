import { Metadata } from "next";
import GlobalProvider from "./provider";

export const metadata: Metadata = {
  title: "Resume-it",
  description: "Welcome to Resume-it",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <GlobalProvider>{children}</GlobalProvider>
      </body>
    </html>
  );
}
