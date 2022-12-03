import { LayoutProps } from '@/interfaces';

export function AdminLayout({ children }: LayoutProps) {
  return (
    <div>
      <h1>Admin Layout</h1>
      <div>{children}</div>
    </div>
  );
}
