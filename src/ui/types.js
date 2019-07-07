// @flow

/*
 * PALETTE
 */

export type ColorName =
  | 'Red'
  | 'Pink'
  | 'Purple'
  | 'Deep Purple'
  | 'Indigo'
  | 'Blue'
  | 'Light Blue'
  | 'Cyan'
  | 'Teal'
  | 'Green'
  | 'Light Green'
  | 'Lime'
  | 'Yellow'
  | 'Amber'
  | 'Orange'
  | 'Deep Orange'
  | 'Brown'
  | 'Grey'
  | 'Blue Grey'

export type SpecialColorName = 'Black' | 'White'

export type ShapeName =
  | '50'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | 'A100'
  | 'A200'
  | 'A400'
  | 'A700'

export type ColorData = {
  [shape: ShapeName]: string
}

export type SpecialColorData = {
  '500': string,
  text: string,
  Primary: string,
  Secondary: string,
  Icons: string,
  Disabled: string,
  Hint: string,
  Dividers: string
}

export type ColorSet = {
  [colorName: ColorName]: ColorData,
  Black: SpecialColorData,
  White: SpecialColorData
}

export type Palette = {
  backgrounds: ColorSet,
  texts: ColorSet
}

/*
 * BUTTON
 */

export type ButtonColors = {
  background: string,
  text: string
}

export type ButtonState = 'initial' | 'hover' | 'active' | 'disabled'

export type ButtonStates = {
  [state: ButtonState]: ButtonColors
}

export type ButtonColorVariant = 'neutral' | 'success' | 'warning' | 'failure'

type ButtonColorVariants = {
  [variant: ButtonColorVariant]: ButtonStates
}

/*
 * THEME
 */

type ThemeElements = {
  button: ButtonColorVariants
}

export type Theme = {
  elements: ThemeElements
}
