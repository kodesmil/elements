import childProcess from 'node:child_process'
import { type Options, defineConfig } from 'tsup'

const nextJsOptions: Options = {
  entry: [
    'src/index.ts',
    'src/atoms/index.ts',
    'src/molecules/index.ts',
    'src/lib/index.ts',
  ],
  sourcemap: 'inline',
  minify: true,
  clean: true,
  dts: true,
  treeshake: false,
  splitting: true,
  format: ['esm'],
  esbuildOptions(options) {
    options.banner = {
      js: '"use client"',
    }
  },
}

const nextSsrJsOptions: Options = {
  entry: ['src/molecules/ssr/index.ts'],
  sourcemap: 'inline',
  minify: true,
  clean: true,
  dts: true,
  treeshake: false,
  splitting: true,
  format: ['esm'],
}

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
  {
    async onSuccess() {
      await linkSelf()
    },
    ...nextJsOptions,
    ...nextSsrJsOptions,
  },
])
