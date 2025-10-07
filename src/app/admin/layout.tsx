import { ReactNode } from "react";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <h1>Painel Administrativo</h1>
      {children}
    </div>
  );
}
