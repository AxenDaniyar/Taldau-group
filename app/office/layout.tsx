import "./office.css";

export const metadata = {
  title: "Taldau Office",
  description: "Back office for Taldau Group",
};

export default function OfficeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
