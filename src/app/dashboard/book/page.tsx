import React from 'react'

export type BookResponse = {
  data: Book[];
  message: string;
  status: string;
}

export type Book = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  'publisher-id': string;
}

async function getBookData() {
  const url = 'http://localhost:8181/api/book'
  const res = await fetch(url)

  if (!res.ok) {
    throw new Error('Failed to fetch book data')
  }

  return res.json()
}

async function Book() {
  const bookData: BookResponse = await getBookData()
  const { data, message, status } = bookData;
  return (
    <div className="w-full h-max rounded px-5">
      {data.map((book) => {
        return <div key={book.id} className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm my-4">
          <dl className="-my-3 divide-y divide-gray-100 text-sm">
            <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900">Title</dt>
              <dd className="text-gray-700 sm:col-span-2">{book.title}</dd>
            </div>

            <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900">Subtitle</dt>
              <dd className="text-gray-700 sm:col-span-2">{book.subtitle}</dd>
            </div>

            <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900">Description</dt>
              <dd className="text-gray-700 sm:col-span-2">{book.description}</dd>
            </div>

            <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900">Publisher id</dt>
              <dd className="text-gray-700 sm:col-span-2">{book['publisher-id']}</dd>
            </div>
          </dl>
        </div>
      })}
    </div>
  )
}

export default Book;