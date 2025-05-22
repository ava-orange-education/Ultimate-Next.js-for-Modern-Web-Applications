// /components/HeavyComponent.tsx
'use client'

export default function HeavyComponent() {
  return (
    <div className="p-4 border rounded bg-white shadow">
      <h3 className="text-lg font-semibold">Heavy Component</h3>
      <p className="text-sm text-gray-600">
        This component was dynamically loaded using <code>next/dynamic</code> to improve page load performance.
      </p>
    </div>
  )
}
