import { useState } from 'react'
import Head from 'next/head'

export default function Home() {
  const [category, setCategory] = useState('electronics')
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)

  const expensiveItems = {
    electronics: [
      { name: 'Apple Vision Pro', price: '$3,499', image: '📱', link: 'https://amazon.com/s?k=apple+vision+pro' },
      { name: 'Sony A1 OLED TV 77"', price: '$3,798', image: '📺', link: 'https://amazon.com/s?k=sony+a1+oled+77' },
      { name: 'MacBook Pro 16" Max', price: '$3,499', image: '💻', link: 'https://amazon.com/s?k=macbook+pro+16' },
      { name: 'Bose Ultra Open Earbuds', price: '$2,999', image: '🎧', link: 'https://amazon.com/s?k=high+end+headphones' },
      { name: 'DJI Inspire 3 Drone', price: '$16,499', image: '🚁', link: 'https://amazon.com/s?k=dji+inspire+3' },
      { name: 'Canon EOS R5 C Camera', price: '$4,499', image: '📷', link: 'https://amazon.com/s?k=canon+eos+r5' }
    ],
    jewelry: [
      { name: '5 Carat Diamond Ring', price: '$45,000', image: '💍', link: 'https://amazon.com/s?k=diamond+ring+5+carat' },
      { name: 'Rolex Submariner', price: '$14,300', image: '⌚', link: 'https://amazon.com/s?k=luxury+watches' },
      { name: 'Cartier Love Bracelet', price: '$7,400', image: '💎', link: 'https://amazon.com/s?k=luxury+bracelet' },
      { name: 'Pearl Necklace Strand', price: '$8,500', image: '📿', link: 'https://amazon.com/s?k=pearl+necklace' },
      { name: 'Platinum Wedding Band', price: '$3,200', image: '💍', link: 'https://amazon.com/s?k=platinum+wedding+band' },
      { name: 'Emerald Earrings', price: '$12,900', image: '💚', link: 'https://amazon.com/s?k=emerald+earrings' }
    ],
    furniture: [
      { name: 'Herman Miller Eames Lounge', price: '$6,995', image: '🪑', link: 'https://amazon.com/s?k=eames+lounge+chair' },
      { name: 'Luxury King Bed Frame', price: '$4,299', image: '🛏️', link: 'https://amazon.com/s?k=luxury+king+bed' },
      { name: 'Italian Leather Sofa', price: '$8,500', image: '🛋️', link: 'https://amazon.com/s?k=italian+leather+sofa' },
      { name: 'Marble Dining Table', price: '$5,600', image: '🍽️', link: 'https://amazon.com/s?k=marble+dining+table' },
      { name: 'Handwoven Persian Rug', price: '$15,000', image: '🏺', link: 'https://amazon.com/s?k=persian+rug' },
      { name: 'Crystal Chandelier', price: '$3,800', image: '💡', link: 'https://amazon.com/s?k=crystal+chandelier' }
    ],
    automotive: [
      { name: 'Tesla Powerwall Battery', price: '$11,500', image: '🔋', link: 'https://amazon.com/s?k=home+battery+system' },
      { name: 'Racing Simulator Cockpit', price: '$4,999', image: '🏎️', link: 'https://amazon.com/s?k=racing+simulator' },
      { name: 'High-End Car Cover', price: '$2,400', image: '🚗', link: 'https://amazon.com/s?k=luxury+car+cover' },
      { name: 'Premium Tire Set (4)', price: '$3,200', image: '⚙️', link: 'https://amazon.com/s?k=premium+tires' },
      { name: 'Car Lift System', price: '$5,500', image: '🔧', link: 'https://amazon.com/s?k=car+lift' },
      { name: 'Portable EV Charger', price: '$1,899', image: '⚡', link: 'https://amazon.com/s?k=ev+charger' }
    ],
    sports: [
      { name: 'Peloton Bike+ Premium', price: '$2,495', image: '🚴', link: 'https://amazon.com/s?k=peloton+bike' },
      { name: 'Golf Club Set Pro', price: '$4,999', image: '⛳', link: 'https://amazon.com/s?k=professional+golf+clubs' },
      { name: 'Rowing Machine Pro', price: '$2,990', image: '🚣', link: 'https://amazon.com/s?k=rowing+machine' },
      { name: 'Ski Equipment Set', price: '$3,500', image: '⛷️', link: 'https://amazon.com/s?k=ski+equipment' },
      { name: 'Scuba Diving Gear', price: '$2,800', image: '🤿', link: 'https://amazon.com/s?k=scuba+gear' },
      { name: 'Kayak Premium', price: '$1,999', image: '🛶', link: 'https://amazon.com/s?k=premium+kayak' }
    ],
    home: [
      { name: 'Sub-Zero Refrigerator', price: '$12,499', image: '🧊', link: 'https://amazon.com/s?k=sub+zero+refrigerator' },
      { name: 'Wolf Range 48"', price: '$18,495', image: '🔥', link: 'https://amazon.com/s?k=wolf+range' },
      { name: 'Miele Washing Machine', price: '$2,299', image: '🌀', link: 'https://amazon.com/s?k=miele+washer' },
      { name: 'Dyson Air Purifier TP09', price: '$949', image: '💨', link: 'https://amazon.com/s?k=dyson+purifier' },
      { name: 'Espresso Machine La Marzocco', price: '$6,500', image: '☕', link: 'https://amazon.com/s?k=la+marzocco' },
      { name: 'Smart Home Security System', price: '$3,999', image: '🏠', link: 'https://amazon.com/s?k=smart+security+system' }
    ]
  }

  const handleSearch = (cat) => {
    setLoading(true)
    setCategory(cat)
    setTimeout(() => {
      setResults(expensiveItems[cat])
      setLoading(false)
    }, 500)
  }

  return (
    <>
      <Head>
        <title>Amazon Expensive Items Search</title>
        <meta name="description" content="Browse expensive items on Amazon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="container">
        <h1>🛍️ Amazon Expensive Items Browser</h1>
        <p className="subtitle">Discover luxury and high-end products</p>

        <div className="categories">
          <button onClick={() => handleSearch('electronics')} className={category === 'electronics' ? 'active' : ''}>
            📱 Electronics
          </button>
          <button onClick={() => handleSearch('jewelry')} className={category === 'jewelry' ? 'active' : ''}>
            💎 Jewelry
          </button>
          <button onClick={() => handleSearch('furniture')} className={category === 'furniture' ? 'active' : ''}>
            🪑 Furniture
          </button>
          <button onClick={() => handleSearch('automotive')} className={category === 'automotive' ? 'active' : ''}>
            🚗 Automotive
          </button>
          <button onClick={() => handleSearch('sports')} className={category === 'sports' ? 'active' : ''}>
            ⚽ Sports
          </button>
          <button onClick={() => handleSearch('home')} className={category === 'home' ? 'active' : ''}>
            🏠 Home
          </button>
        </div>

        {loading ? (
          <div className="loading">Loading expensive items...</div>
        ) : (
          <div className="results">
            {results.map((item, index) => (
              <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className="card">
                <div className="emoji">{item.image}</div>
                <h3>{item.name}</h3>
                <p className="price">{item.price}</p>
                <button className="search-btn">Search on Amazon →</button>
              </a>
            ))}
          </div>
        )}

        {results.length === 0 && !loading && (
          <div className="empty">
            <p>👆 Select a category above to browse expensive items</p>
          </div>
        )}
      </main>
    </>
  )
}
