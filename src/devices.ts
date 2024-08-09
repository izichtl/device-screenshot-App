import { KnownDevices } from 'puppeteer'
import { Device } from './types/types'

export const iPhone: any = KnownDevices['iPhone 15 Pro']
export const iPadPro11: any = KnownDevices['iPad Pro 11']
export const GalaxyTabS4: any = KnownDevices['Galaxy Tab S4']
export const Pixel5: any = KnownDevices['Pixel 5']
export const MotoG4: any = KnownDevices['Moto G4']

export const MacbookAir13: Device = {
  name: 'Macbook Air 13',
  userAgent: 'NA',
  viewport: {
    width: 2560,
    height: 1600,
  },
}

export const Ultrawide43: Device = {
  name: 'Ultrawide (34")',
  userAgent: 'NA',
  viewport: {
    width: 3440,
    height: 1440,
  },
}

export const SuperUltrawide49: Device = {
  name: 'Super Ultrawide (49")',
  userAgent: 'NA',
  viewport: {
    width: 5120,
    height: 1440,
  },
}
