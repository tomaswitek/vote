import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationList,
  StyledNavigationItem,
} from 'baseui/header-navigation'
import { Button } from 'baseui/button'
import { StyledLink } from 'baseui/link'
import Link from 'next/link'

function Header() {
  return (
    <HeaderNavigation>
      <StyledNavigationList $align={ALIGN.left}>
        <StyledNavigationItem href="#basic-link2">Logo</StyledNavigationItem>
      </StyledNavigationList>
      <StyledNavigationList $align={ALIGN.center} />
      <StyledNavigationList $align={ALIGN.right}>
        <StyledNavigationItem>
          <Link href="/users/new">
            <StyledLink href="#">New user</StyledLink>
          </Link>
        </StyledNavigationItem>
      </StyledNavigationList>
    </HeaderNavigation>
  )
}

export default Header
