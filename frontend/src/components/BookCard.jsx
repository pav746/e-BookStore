import React from 'react'
import { HiStar } from 'react-icons/hi'

export default function BookCard({ book }) {
  const discount = book?.oldPrice ? Math.round(((book.oldPrice - book.newPrice) / book.oldPrice) * 100) : 0

  return (
    <article className="card-base hover:shadow-2xl transition-all duration-300">
      <img src={book?.coverImage || 'https://via.placeholder.com/420x600?text=No+Image'} alt={book?.title} className="w-full h-80 object-cover rounded-t-lg" />
      <div className="p-5">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest">{book?.category}</p>
            <h3 className="font-bold text-lg mt-2">{book?.title}</h3>
            <p className="text-sm text-muted mt-1">{book?.author || 'Unknown Author'}</p>
          </div>
          <div className="text-right">
            <div className="text-xl font-extrabold text-gray-900">${book?.newPrice}</div>
            {discount > 0 && <div className="text-sm text-red-500">-{discount}%</div>}
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <HiStar key={i} className={`text-sm ${i < Math.round(book?.rating || 4) ? 'text-yellow-400' : 'text-gray-300'}`} />
            ))}
          </div>
          <button className="btn-primary px-4 py-2 rounded-lg">Add</button>
        </div>
      </div>
    </article>
  )
}
