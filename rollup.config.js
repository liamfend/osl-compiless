import path from 'path'
import resolve from 'rollup-plugin-node-resolve' // 依赖引用插件
import commonjs from 'rollup-plugin-commonjs' // commonjs模块转换插件
import { eslint } from 'rollup-plugin-eslint' // eslint插件
import ts from 'rollup-plugin-typescript2'
const getPath = _path => path.resolve(__dirname, _path)

const extensions = [
	'.js',
	'.ts',
	'.tsx'
  ]

  // ts
const tsPlugin = ts({
	tsconfig: getPath('./tsconfig.json'), // 导入本地ts配置
	extensions
  })

  
  // eslint
const esPlugin = eslint({
	throwOnError: true,
	include: ['components/**/*.tsx'],
	exclude: ['node_modules/**', 'lib/**','es/**']
  })

export default [  
	{
		input: 'components/index.tsx',
		external: ['ms','react','react-dom'],
		preserveModules:true,
		output: [
			{ dir: './lib/', format: 'cjs',exports:'auto' },
			{ dir:  './es/', format: 'es' }
			// { file: './lib/index.js', format: 'cjs' },
			// { file:  './es/index.js', format: 'es' }
		],
        plugins: [
			resolve(), // so Rollup can find `ms`
			commonjs(), // so Rollup can convert `ms` to an ES module
			//esPlugin,
   		     tsPlugin,
		]
	}
];
