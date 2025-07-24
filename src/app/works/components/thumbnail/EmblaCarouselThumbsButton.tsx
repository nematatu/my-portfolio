import React from 'react'
import Image from 'next/image'

type PropType = {
  selected: boolean
  image: string
  onClick: () => void
}

export const Thumb: React.FC<PropType> = (props) => {
  const { selected, image, onClick } = props

  return (
    <div
      className={'embla-thumbs__slide'.concat(
        selected ? ' embla-thumbs__slide--selected' : ''
      )}
    >
      <button
        onClick={onClick}
        type="button"
        className="embla-thumbs__slide__number"
      >
        <Image
          src={image}
          alt={image}
          width={100}
          height={100}
        />
      </button>
    </div>
  )
}
