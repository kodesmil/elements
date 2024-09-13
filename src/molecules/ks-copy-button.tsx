import { Button } from '@/atoms'
import { type FC, useState } from 'react'

interface KsCopyButtonProps {
  textToCopy: string
  copyButtonName?: string
  copiedButtonName?: string
}

export const KsCopyButton: FC<KsCopyButtonProps> = ({
  textToCopy,
  copyButtonName = 'Copy',
  copiedButtonName = 'Copied!',
}) => {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 10000)
    } catch (error) {
      console.error('Failed to copy text:', error)
    }
  }

  return (
    <Button onClick={handleCopy}>
      {isCopied ? copiedButtonName : copyButtonName}
    </Button>
  )
}
