import puppeteer from 'puppeteer'
import yargs from 'yargs'
import {
  GalaxyTabS4,
  MacbookAir13,
  MotoG4,
  Pixel5,
  SuperUltrawide49,
  Ultrawide43,
  iPadPro11,
  iPhone,
} from './src/devices'
import { Device } from './src/types/types'

const argv: any = yargs
  .option('url', {
    alias: 'u',
    description: 'url to print',
    type: 'string',
    demandOption: true,
  })
  .help()
  .alias('help', 'h').argv

;(async () => {
  const url = argv.url as string

  const getScreen = async (device: Device, url: string, path: string) => {
    const browser = await puppeteer.launch({
      // precisa configurar a url do chrome no seu sistema.
      // no readme tem alguns exemplos.
      executablePath:
        '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
      headless: true,
    })

    const page = await browser.newPage()
    await page.emulate(device)

    try {
      await page.goto(url, {
        waitUntil: 'networkidle2',
      })
      console.log(`Page loaded on ${device.name} successfully.`)
      console.log('.')
    } catch (error) {
      console.error('Error loading page:', error)
    }
    await page.screenshot({
      path: path,
    })
    await browser.close()
  }

  await getScreen(iPhone as Device, url, `./src/prints/${iPhone.name}.png`)
  await getScreen(
    iPadPro11 as Device,
    url,
    `./src/prints/${iPadPro11.name}.png`
  )
  await getScreen(
    GalaxyTabS4 as Device,
    url,
    `./src/prints/${GalaxyTabS4.name}.png`
  )
  await getScreen(Pixel5 as Device, url, `./src/prints/${Pixel5.name}.png`)
  await getScreen(MotoG4 as Device, url, `./src/prints/${MotoG4.name}.png`)
  await getScreen(
    MacbookAir13,
    url,

    `./src/prints/${MacbookAir13.name}.png`
  )
  await getScreen(Ultrawide43, url, `./src/prints/${Ultrawide43.name}.png`)
  await getScreen(
    SuperUltrawide49,
    url,

    `./src/prints/${SuperUltrawide49.name}.png`
  )
})()
