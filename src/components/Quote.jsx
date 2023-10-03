import React from 'react';

export default function Quote({ quote, author, company }) {
  return (
    <div className="not-prose relative m-8 rounded-xl bg-white p-8 shadow-lg ring-1 ring-black/5">
      <blockquote
        className="flex flex-col items-start justify-center space-y-8 before:absolute before:left-4 before:top-0 before:font-serif before:text-[240px] before:leading-none before:opacity-[0.08] before:content-['“'] after:absolute after:bottom-0 after:right-4 after:font-serif
          after:text-[240px] after:leading-none after:opacity-[0.08]
          after:content-['”']"
      >
        <span className="sm:text-1xl w-full max-w-xl text-lg font-medium italic sm:ml-4 sm:mt-4 md:text-2xl">
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
            {quote}
          </span>
        </span>
        <div className="flex flex-col">
          <span className="text-lg font-semibold leading-none text-gray-800 group-hover:underline">
            {author}
          </span>
          <span className="text-base text-gray-600">{company}</span>
        </div>
      </blockquote>
    </div>
  );
}
