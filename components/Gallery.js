export default function Gallery({ images = [] }) {
  if (!images || images.length === 0) return null
  return (
    <div className="gallery" role="group" aria-label="Gallery">
      {images.map((src, i) => (
        <img key={i} src={src} alt={`Gallery image ${i + 1}`} />
      ))}
    </div>
  )
}