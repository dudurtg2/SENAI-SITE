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

// Hook para navegação por teclado
export const useKeyboardNavigation = () => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Tab navigation enhancement
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation')
      }

      // Escape para fechar modais/menus
      if (e.key === 'Escape') {
        const openModals = document.querySelectorAll('[role="dialog"], .modal-open')
        openModals.forEach(modal => {
          const closeButton = modal.querySelector('button[aria-label*="fechar"], button[aria-label*="Fechar"]') as HTMLButtonElement
          if (closeButton) {
            closeButton.click()
          }
        })
      }

      // Navegação por setas em menus
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        const activeElement = document.activeElement
        if (activeElement && activeElement.closest('[role="menu"], nav')) {
          e.preventDefault()
          const menuItems = Array.from(activeElement.closest('[role="menu"], nav')?.querySelectorAll('a, button') || [])
          const currentIndex = menuItems.indexOf(activeElement as Element)
          
          if (e.key === 'ArrowDown') {
            const nextIndex: number = (currentIndex + 1) % menuItems.length
            const nextElement = menuItems[nextIndex] as HTMLElement
            nextElement?.focus()
          } else {
            const prevIndex: number = currentIndex === 0 ? menuItems.length - 1 : currentIndex - 1
            const prevElement = menuItems[prevIndex] as HTMLElement
            prevElement?.focus()
          }
        }
      }

      // Enter em elementos focáveis
      if (e.key === 'Enter') {
        const activeElement = document.activeElement as HTMLElement
        if (activeElement && (activeElement.tagName === 'BUTTON' || activeElement.role === 'button')) {
          e.preventDefault()
          activeElement.click()
        }
      }
    }

    const handleMouseDown = () => {
      document.body.classList.remove('keyboard-navigation')
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('mousedown', handleMouseDown)
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('mousedown', handleMouseDown)
    }
  }, [])
}
