import childProcess from 'node:child_process'
import fs from 'node:fs'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
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
  external: ['next', 'react', 'react-dom'],
  esbuildOptions(options) {
    options.banner = {
      js: '"use client"',
    }
  },
}

const _libsOptions: Options = {
  entry: ['src/lib/index.ts'],
  sourcemap: 'inline',
  minify: true,
  clean: true,
  dts: true,
  treeshake: true,
  splitting: true,
  format: ['esm'],
}

const getPackageName = async () => {
  try {
    const packageJson = JSON.parse(
      await readFile(path.join(__dirname, 'package.json'), 'utf-8')
    )
    return packageJson.name
  } catch (_error) {
    return 'package-name'
  }
}

const _addUseStatement = async (
  basePath: string,
  type: 'server' | 'client'
) => {
  const fullPath = path.join(__dirname, basePath)
  const files = fs.readdirSync(fullPath)

  for (const file of files) {
    if (file.endsWith('.js') || file.endsWith('.mjs')) {
      const filePath = path.join(fullPath, file)
      let content = await readFile(filePath, 'utf-8')
      content = `"use ${type}";\n${content}`
      fs.writeFileSync(filePath, content, 'utf-8')
    }
  }
}

const linkSelf = async () => {
  await new Promise((resolve) => {
    childProcess.exec('pnpm link:self', (error, _stdout, _stderr) => {
      if (error) {
        console.error(`exec error: ${error}`)
        return
      }

      resolve(undefined)
    })
  })

  // biome-ignore lint/suspicious/noConsoleLog: <explanation>
  console.log(
    `Run 'pnpm link ${await getPackageName()} --global' inside another project to consume this package.`
  )
}

export default defineConfig([
  // libsOptions,
  {
    async onSuccess() {
      // If you want need to add a use statement to files, you can use the following code:
      // await _addUseStatement('dist/react', 'client');

      await linkSelf()
    },
    ...nextJsOptions,
  },
])
