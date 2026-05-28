import satori from 'satori'
import { Resvg } from '@resvg/resvg-js'
import { readFileSync, writeFileSync } from 'fs'

const fontRegular = readFileSync(new URL('../node_modules/@fontsource/lora/files/lora-latin-400-normal.woff', import.meta.url))
const fontBold = readFileSync(new URL('../node_modules/@fontsource/lora/files/lora-latin-700-normal.woff', import.meta.url))
const fontSans = readFileSync(new URL('../node_modules/@fontsource/inter/files/inter-latin-400-normal.woff', import.meta.url))

const svg = await satori(
  {
    type: 'div',
    props: {
      style: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0f0f0f',
        fontFamily: 'Lora, serif',
      },
      children: [
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'center',
              padding: '0 80px',
              width: '100%',
            },
            children: [
              {
                type: 'div',
                props: {
                  style: {
                    fontSize: 64,
                    fontWeight: 700,
                    color: '#ffffff',
                    letterSpacing: '-1px',
                    lineHeight: 1.1,
                    marginBottom: 16,
                  },
                  children: 'Gawon Lee',
                },
              },
              {
                type: 'div',
                props: {
                  style: {
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 16,
                    fontSize: 30,
                    fontWeight: 400,
                    color: '#a3a3a3',
                    marginBottom: 24,
                  },
                  children: [
                    { type: 'span', props: { children: 'PhD Candidate' } },
                    { type: 'span', props: { style: { color: '#555' }, children: '/' } },
                    { type: 'span', props: { children: 'LARR@SNU' } },
                  ],
                },
              },
              {
                type: 'div',
                props: {
                  style: {
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 12,
                  },
                  children: [
                    'Reinforcement Learning',
                    'Robotics',
                  ].map((tag) => ({
                    type: 'div',
                    props: {
                      style: {
                        backgroundColor: '#1f1f1f',
                        border: '1px solid #333',
                        borderRadius: 8,
                        padding: '8px 18px',
                        fontSize: 22,
                        color: '#d4d4d4',
                      },
                      children: tag,
                    },
                  })),
                },
              },
            ],
          },
        },
        {
          type: 'div',
          props: {
            style: {
              position: 'absolute',
              bottom: 40,
              right: 80,
              fontSize: 22,
              color: '#555',
              fontFamily: 'Inter, sans-serif',
            },
            children: 'lgw1226.github.io',
          },
        },
      ],
    },
  },
  {
    width: 1200,
    height: 630,
    fonts: [
      { name: 'Lora', data: fontRegular, weight: 400, style: 'normal' },
      { name: 'Lora', data: fontBold, weight: 700, style: 'normal' },
      { name: 'Inter', data: fontSans, weight: 400, style: 'normal' },
    ],
  }
)

const resvg = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } })
const png = resvg.render().asPng()
writeFileSync('public/seo.png', png)
console.log('Generated public/seo.png')
