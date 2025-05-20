export default function ChapterTwoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header className="bg-gray-100 p-4 text-center font-semibold text-lg">
        Chapter 2 – File-Based Routing
      </header>
      <main className="p-6">{children}</main>
      <footer className="text-center text-sm text-gray-400 mt-12">File-Based Routing Demo</footer>
    </div>
  )
}
