import { useState } from 'react'

export default function SnsIcon({ name, alt, className }) {
  const jpg = `/icons/${name}.jpg`
  const svg = `/icons/${name}.svg`
  const [src, setSrc] = useState(jpg)
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => {
        if (src !== svg) setSrc(svg)
      }}
    />
  )
}
