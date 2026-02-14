import React from 'react';

const colors = [
  { name: 'mpl-navy', value: 'var(--color-mpl-navy)' },
  { name: 'mpl-blue', value: 'var(--color-mpl-blue)' },
  { name: 'mpl-lightBlue', value: 'var(--color-mpl-lightBlue)' },
  { name: 'mpl-gray', value: 'var(--color-mpl-gray)' },
  { name: 'mpl-ink', value: 'var(--color-mpl-ink)' },
  { name: 'mpl-white', value: 'var(--color-mpl-white)' },
];

const sizes = [
  { label: 'Display', className: 'text-5xl md:text-6xl' },
  { label: 'Headline', className: 'text-3xl md:text-4xl' },
  { label: 'Title', className: 'text-2xl' },
  { label: 'Body Large', className: 'text-lg' },
  { label: 'Body', className: 'text-base' },
  { label: 'Caption', className: 'text-sm' },
];

const spacings = [
  { name: 'spacing-2', value: 'var(--spacing-2)' },
  { name: 'spacing-3', value: 'var(--spacing-3)' },
  { name: 'spacing-4', value: 'var(--spacing-4)' },
  { name: 'spacing-6', value: 'var(--spacing-6)' },
  { name: 'spacing-8', value: 'var(--spacing-8)' },
  { name: 'spacing-12', value: 'var(--spacing-12)' },
];

function StyleGuide() {
  return (
    <div className="container-custom py-12">
      <h1 className="text-4xl font-serif font-bold text-mpl-navy mb-6">Style Guide</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-serif font-bold text-mpl-navy mb-4">Colors</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {colors.map(c => (
            <div key={c.name} className="rounded-lg border border-gray-200 overflow-hidden">
              <div style={{ background: c.value }} className="h-16"></div>
              <div className="p-2 text-sm">
                <div className="font-semibold">{c.name}</div>
                <div className="text-gray-600">{c.value}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-serif font-bold text-mpl-navy mb-4">Typography</h2>
        <div className="space-y-3">
          {sizes.map(s => (
            <div key={s.label} className="flex items-baseline justify-between border-b border-gray-100 pb-2">
              <div className={`${s.className} text-mpl-navy`}>{s.label}</div>
              <div className="text-gray-600 text-sm">{s.className}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-serif font-bold text-mpl-navy mb-4">Spacing</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {spacings.map(s => (
            <div key={s.name} className="rounded-lg border border-gray-200 p-3 flex items-center justify-between">
              <div className="h-6 bg-mpl-gray rounded" style={{ width: s.value }}></div>
              <div className="text-sm">
                <div className="font-semibold">{s.name}</div>
                <div className="text-gray-600">{s.value}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-serif font-bold text-mpl-navy mb-4">Components</h2>
        <div className="flex flex-wrap gap-4">
          <button className="btn-primary">Primary Button</button>
          <button className="btn-secondary">Secondary Button</button>
          <div className="glass-card px-6 py-4">Glass Card</div>
        </div>
      </section>
    </div>
  );
}

export default StyleGuide;
