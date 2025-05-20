export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="border p-4">
      <nav className="mb-4 font-semibold">Dashboard Navigation</nav>
      <section>{children}</section>
    </div>
  )
}
