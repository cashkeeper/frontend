// @flow
import { createStore, createEvent, type Store, type Event } from 'effector'
import { DEFAULT_THEME } from '@lib/constants/general'

type Theme = 'light'

const initialTheme = localStorage.getItem('theme') || DEFAULT_THEME
const $theme: Store<Theme | string> = createStore(initialTheme)

$theme.watch(theme => {
  localStorage.setItem('theme', theme)
})

const themeChanged: Event<Theme> = createEvent('theme changed')

$theme.on(themeChanged, (_, nextTheme) => nextTheme)

export { $theme, themeChanged }
