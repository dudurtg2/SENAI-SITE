import { useEffect } from 'react'

export const useSmoothScroll = () => {
  useEffect(() => {
    // Função para realizar scroll suave para o elemento
    const smoothScrollTo = (elementId: string) => {
      const element = document.getElementById(elementId)
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }
    }

    // Event listener para links de navegação
    const handleNavClick = (event: Event) => {
      const target = event.target as HTMLAnchorElement
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        event.preventDefault()
        const elementId = target.getAttribute('href')?.substring(1)
        if (elementId) {
          smoothScrollTo(elementId)
        }
      }
    }

    // Adicionar event listeners
    document.addEventListener('click', handleNavClick)

    // Cleanup
    return () => {
      document.removeEventListener('click', handleNavClick)
    }
  }, [])
}
