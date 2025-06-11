'use client'

import React, { useState } from 'react'

export function EnlargeImage({ src, alt }) {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <>
      <img
        src={src}
        alt={alt}
        onClick={openModal}
        style={{ cursor: 'zoom-in' }}
      />

      {isOpen && (
        <span
          className="fixed top-0 left-0 z-50 flex size-full cursor-zoom-out items-center justify-center bg-black/70"
          onClick={closeModal}
        >
          <span
            className="relative mx-8 flex items-center justify-center"
            onClick={closeModal}
          >
            <span
              className="absolute top-6 right-8 text-3xl"
              onClick={closeModal}
            >
              &#10005;
            </span>
            <img className="!m-0 size-fit object-contain" src={src} alt={alt} />
          </span>
        </span>
      )}
    </>
  )
}
