import React from 'react';

export default function Quote() {
  return (
    <div className="py-8">
      <div className="not-prose relative rounded-xl bg-white p-8 shadow-lg ring-1 ring-black/5">
        <blockquote
          className="flex flex-col items-start justify-center space-y-8 before:absolute before:left-4 before:top-0 before:font-serif before:text-[240px] before:leading-none before:opacity-[0.08] before:content-['“'] after:absolute after:bottom-0 after:right-4 after:font-serif
          after:text-[240px] after:leading-none after:opacity-[0.08]
          after:content-['”']"
        >
          <span className="w-full max-w-xl text-lg font-medium italic sm:ml-4 sm:mt-4 sm:text-2xl md:text-3xl">
            <span
              data-br=":r6:"
              data-brr="1"
              style={{
                display: 'inline-block',
                verticalAlign: 'top',
                textDecoration: 'inherit',
                maxWidth: '471px',
              }}
            >
              Comparing Budgetr to other budgeting apps is like comparing a
              racehorse to a donkey. Budgetr is the racehorse. It&apos;s the
              best budgeting app I&apos;ve ever used.
            </span>
          </span>
          <div className="flex flex-col">
            <span className="text-lg font-semibold leading-none text-gray-800 group-hover:underline">
              A.N. Other
            </span>
            <span className="text-base text-gray-600">
              CFO at MoneyBags LLC
            </span>
          </div>
        </blockquote>
      </div>
    </div>
  );
}
