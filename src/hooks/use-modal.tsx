import { useState, useCallback } from 'react'

interface UseModalOptions {
  defaultOpen?: boolean
  onOpen?: () => void
  onClose?: () => void
}

interface UseModalReturn {
  isOpen: boolean
  open: () => void
  close: () => void
  toggle: () => void
}

export const useModal = (options: UseModalOptions = {}): UseModalReturn => {
  const { defaultOpen = false, onOpen, onClose } = options
  const [isOpen, setIsOpen] = useState(defaultOpen)

  const open = useCallback(() => {
    setIsOpen(true)
    onOpen?.()
  }, [onOpen])

  const close = useCallback(() => {
    setIsOpen(false)
    onClose?.()
  }, [onClose])

  const toggle = useCallback(() => {
    if (isOpen) {
      close()
    } else {
      open()
    }
  }, [isOpen, open, close])

  return {
    isOpen,
    open,
    close,
    toggle
  }
}

// Hook específico para modais de confirmação
interface UseConfirmationModalOptions {
  onConfirm?: () => void | Promise<void>
  onCancel?: () => void
}

interface UseConfirmationModalReturn extends UseModalReturn {
  confirm: () => Promise<void>
  cancel: () => void
  isLoading: boolean
}

export const useConfirmationModal = (
  options: UseConfirmationModalOptions = {}
): UseConfirmationModalReturn => {
  const { onConfirm, onCancel } = options
  const [isLoading, setIsLoading] = useState(false)
  const modal = useModal()

  const confirm = useCallback(async () => {
    if (!onConfirm) return
    
    try {
      setIsLoading(true)
      await onConfirm()
      modal.close()
    } catch (error) {
      console.error('Erro na confirmação:', error)
    } finally {
      setIsLoading(false)
    }
  }, [onConfirm, modal])

  const cancel = useCallback(() => {
    onCancel?.()
    modal.close()
  }, [onCancel, modal])

  return {
    ...modal,
    confirm,
    cancel,
    isLoading
  }
}
