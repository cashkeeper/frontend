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

export type ButtonStates = {
  initial: ButtonColors,
  hover: ButtonColors,
  active: ButtonColors,
  disabled: ButtonColors
}

export type ButtonState = $Keys<ButtonStates>

type ButtonColorVariants = {
  neutral: ButtonStates,
  success: ButtonStates,
  warning: ButtonStates,
  failure: ButtonStates
}

export type ButtonColorVariant = $Keys<ButtonColorVariants>

/*
 * THEME
 */

type ThemeElements = {
  button: ButtonColorVariants
}

export type Theme = {
  elements: ThemeElements
}
