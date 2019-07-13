// @flow
import { createStore, createEvent, type Store, type Event } from 'effector'
import throttle from 'throttleit'

const body = document.documentElement

const getBodyWidth = () => (body ? body.clientWidth : 0)
const getBodyHeight = () => (body ? body.clientHeight : 0)

const getWidth = () => Math.max(getBodyWidth(), window.innerWidth || 0)
const getHeight = () => Math.max(getBodyHeight(), window.innerHeight || 0)

const getViewport = () => ({
  width: getWidth(),
  height: getHeight()
})

type Viewport = {
  width: number,
  height: number
}

const initialViewport = getViewport()
const $viewport: Store<Viewport> = createStore(initialViewport)

const windowResized: Event<void> = createEvent('window resized')
$viewport.on(windowResized, () => getViewport())

const throttledWindowResized = throttle(windowResized, 300)
window.addEventListener('resize', throttledWindowResized)

export { $viewport }
export type { Viewport }
