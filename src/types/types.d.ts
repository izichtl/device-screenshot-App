interface Viewport {
  width: number
  height: number
  deviceScaleFactor?: number
  isMobile?: boolean
  hasTouch?: boolean
  isLandscape?: boolean
}

export interface Device {
  name: string
  userAgent: string
  viewport: Viewport
}
