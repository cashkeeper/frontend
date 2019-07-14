// @flow
import { type Store } from 'effector'
import { $breakpoint } from './breakpoint'

type Device = 'mobile' | 'tablet' | 'desktop'

const $device: Store<Device> = $breakpoint.map(breakpoint => {
  if (breakpoint === 'xs') return 'mobile'
  if (breakpoint === 'sm') return 'mobile'
  if (breakpoint === 'md') return 'tablet'
  return 'desktop'
})

const $isMobile: Store<boolean> = $device.map(device => device === 'mobile')
const $isTablet: Store<boolean> = $device.map(device => device === 'tablet')
const $isDesktop: Store<boolean> = $device.map(device => device === 'desktop')

export { $device, $isMobile, $isTablet, $isDesktop }
export type { Device }
