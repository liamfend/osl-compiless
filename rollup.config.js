import path from 'path'
import resolve from 'rollup-plugin-node-resolve' // 依赖引用插件
import commonjs from 'rollup-plugin-commonjs' // commonjs模块转换插件
import ts from 'rollup-plugin-typescript2'

const getPath = (_path) => path.resolve(__dirname, _path)

const extensions = ['.js', '.ts', '.tsx']

// ts
const tsPlugin = ts({
  tsconfig: getPath('./tsconfig.json'), // 导入本地ts配置
  extensions
})

export default [
  {
    input: './src/components/index.tsx',
    external: ['ms', 'react', 'react-dom'],
    preserveModules: true,
    output: [{ dir: './es', format: 'es' }],
    plugins: [resolve(), commonjs(), tsPlugin]
  }
]
