import { useEffect, useRef } from 'react'

export function useScrollReveal(options = { threshold: 0.1, triggerOnce: true }) {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed')
          if (options.triggerOnce) {
            observer.unobserve(entry.target)
          }
        } else if (!options.triggerOnce) {
          entry.target.classList.remove('is-revealed')
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: options.threshold,
      }
    )

    observer.observe(node)

    return () => {
      if (node) {
        observer.unobserve(node)
      }
    }
  }, [options.threshold, options.triggerOnce])

  return ref
}
