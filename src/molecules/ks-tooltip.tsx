import { Tooltip, TooltipContent, TooltipTrigger } from '@/atoms/shacdn/tooltip'
import type { ReactNode } from 'react'

export const KsTooltip = (props: { children: ReactNode; tooltip: string }) => (
  <Tooltip>
    <TooltipContent side="right">{props.tooltip}</TooltipContent>
    <TooltipTrigger asChild={true}>{props.children}</TooltipTrigger>
  </Tooltip>
)
