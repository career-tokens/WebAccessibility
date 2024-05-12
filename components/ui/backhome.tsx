import Link from 'next/link'
import React from 'react'

const BackHome = () => {
  return (
      <div className="backhome absolute top-3 left-3">
          <Link href="/">
          <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear">
  Back to Home Page
</button>
          </Link>
    </div>
  )
}

export default BackHome