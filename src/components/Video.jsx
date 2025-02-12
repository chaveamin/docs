export function Video({ src, autoplay, loop, controls }) {
  return (
    <video
      className="rounded-xl ring-2 ring-zinc-300"
      src={src}
      autoPlay={autoplay}
      loop={loop}
      controls={controls}
    />
  )
}
