import { Button } from '@/atoms/shacdn/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/atoms/shacdn/dropdown-menu'
import { KsImage } from '@/molecules/ks-image'

export function KsDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild={true}>
        <Button
          variant="outline"
          size="icon"
          className="overflow-hidden rounded-full"
        >
          <KsImage
            width={36}
            height={36}
            alt="Avatar"
            src={''}
            fallbackIconName="user"
            className="overflow-hidden rounded-full"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
