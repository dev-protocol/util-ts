import typescript from '@rollup/plugin-typescript'
import multi from '@rollup/plugin-multi-entry'
import dts from 'rollup-plugin-dts'

export default [
	{
		input: ['src/**/*.ts', '!**/*.test.ts'],
		output: [
			{
				file: 'dist/index.mjs',
				format: 'es',
			},
			{
				file: 'dist/index.js',
				format: 'cjs',
			},
		],
		plugins: [typescript({ module: 'esnext' }), multi()],
	},
	{
		input: 'dist/src/index.d.ts',
		output: [{ file: 'dist/util-ts.d.ts', format: 'es' }],
		plugins: [dts()],
	},
]
