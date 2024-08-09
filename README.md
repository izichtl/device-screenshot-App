# Node.js Device Screenshot App

Esta aplicação Node.js captura screenshots de um site para diferentes tamanhos de tela de dispositivos e salva essas imagens em um diretório \`src/prints\`.

## Requisitos

- [Node.js](https://nodejs.org/) (v18 ou superior)

## Instalação

1. **Clone o repositório:**

   > git clone <https://github.com/izichtl/device-screenshot-App.git>
   > cd seu-repositorio

2. **Instale as dependências:**

   > npm install

## Configuração

Certifique-se de que o diretório \`src/prints\` exista para armazenar os screenshots. Caso contrário, crie-o manualmente:

> mkdir -p src/prints

**Configure corretamente o path para o browser, pode ser que o path precise ser ajustado de acordo com sua configuração**

**macOS**
Google Chrome: >/Applications/Google Chrome.app/Contents/MacOS/Google Chrome
Chromium: >/Applications/Chromium.app/Contents/MacOS/Chromium

**Linux**
Google Chrome:

> /usr/bin/google-chrome
> Chromium:
> /usr/bin/chromium-browser

**Windows**

Google Chrome:

> C:\Program Files\Google\Chrome\Application\chrome.exe

Google Chrome (Program Files (x86)):

> C:\Program Files (x86)\Google\Chrome\Application\chrome.exe

Chromium:

> C:\Program Files\Chromium\Application\chrome.exe

## Uso

Execute a aplicação passando uma URL como argumento. A aplicação irá capturar screenshots da URL em diferentes tamanhos de tela de dispositivos e salvar as imagens no diretório \`src/prints\`.

**Exemplo:**

> node app.js --url <https://example.com>
> ou
> yarn/npm start --url <https://example.com>

## Argumentos da Linha de Comando

- \`--url\` (ou \`-u\`): A URL do site para capturar screenshots.

**Exemplo de uso com argumento abreviado:**

> node app.js -u <https://example.com>

## Configuração dos Dispositivos

Os tamanhos de tela e outras características dos dispositivos são configurados no arquivo \`src/devices.ts\`. Você pode adicionar ou modificar dispositivos conforme necessário.

**Exemplo de configuração em \`src/devices.ts\`:**

Lista de dispositivos conhecidos do puppetter

> <https://github.com/puppeteer/puppeteer/blob/main/docs/api/puppeteer.knowndevices.md>

> export const devicesName = [
> {
> name: 'Pixel 5',
> userAgent: 'Mozilla/5.0 (Linux; Android 11; Pixel 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4812.0 Mobile Safari/537.36',
> viewport: {
> width: 393,
> height: 851,
> deviceScaleFactor: 3,
> isMobile: true,
> hasTouch: true,
> isLandscape: false
> }
> }

**Exemplo de typagem em:**

> interface Device {
> name: string
> userAgent: string
> viewport: Viewport
> }
> interface Viewport {
> width: number
> height: number
> deviceScaleFactor?: number
> isMobile?: boolean
> hasTouch?: boolean
> isLandscape?: boolean
> }

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para enviar pull requests ou abrir issues para bugs e melhorias.

## Licença

Este projeto é licenciado sob a [MIT License](LICENSE).
