import childProcess from 'node:child_process'
import { defineConfig } from 'tsup'

const linkSelf = async () => {
  await new Promise((resolve) => {
    childProcess.exec('pnpm link:self', (error, _stdout, _stderr) => {
      if (error) {
        return
      }

      resolve(undefined)
    })
  })
}

export default defineConfig([
  // SSR library
  {
    entry: ['src/ssr/index.ts'],
    sourcemap: 'inline',
    outDir: 'dist/ssr',
    minify: true,
    clean: true,
    dts: true,
    treeshake: false,
    splitting: true,
    format: ['esm'],
  },
  // Client-focused libraries
  {
    entry: [
      'src/index.ts',
      'src/atoms/index.ts',
      'src/molecules/index.ts',
      'src/lib/index.ts',
    ],
    sourcemap: 'inline',
    minify: true,
    clean: false,
    dts: true,
    treeshake: false,
    splitting: true,
    format: ['esm'],
    esbuildOptions(options) {
      options.banner = {
        js: '"use client"',
      }
    },
    async onSuccess() {
      await linkSelf()
    },
  },
])
