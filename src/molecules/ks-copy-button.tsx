import { Button } from '@kodesmil/elements/atoms'
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
      setTimeout(() => setIsCopied(false), 3000)
    } catch (_error) {}
  }

  return (
    <Button variant={'secondary'} onClick={handleCopy}>
      {isCopied ? copiedButtonName : copyButtonName}
    </Button>
  )
}
