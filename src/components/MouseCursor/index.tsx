import { useRef, useEffect } from 'react'
import * as S from './styles'

const MouseCursor = () => {
  const mouseCursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function isMobileOrTablet() {
      const userAgent = navigator.userAgent.toLowerCase()
      return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|windows phone|kindle|playbook|silk|mobile|tablet/i.test(
        userAgent,
      )
    }

    if (!isMobileOrTablet()) {
      document.addEventListener('mousemove', (mouse) => {
        if (mouseCursorRef.current) {
          mouseCursorRef.current.style.left = `${mouse.clientX - 20}px`
          mouseCursorRef.current.style.top = `${mouse.clientY - 20}px`
        }
      })
    }
  }, [])

  return <S.MouseContainer ref={mouseCursorRef}></S.MouseContainer>
}

export default MouseCursor
