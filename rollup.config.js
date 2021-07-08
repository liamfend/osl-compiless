import path from 'path'
// import resolve from '@rollup/plugin-node-resolve' // 依赖引用插件
import commonjs from '@rollup/plugin-commonjs' // commonjs模块转换插件
// import ts from 'rollup-plugin-typescript2'
import ts from '@rollup/plugin-typescript'

const getPath = (_path) => path.resolve(__dirname, _path)

// ts
const tsPlugin = ts({
  // tsconfig: getPath(), // 导入本地ts配置
  // lib: ['es5', 'es6'],
  tsconfig: './tsconfig.json'
  // extensions
})

export default [
  {
    input: './src/components/index.tsx',
    external: ['react', 'react-dom'],
    preserveModules: true,
    output: [{ dir: './es', format: 'es' }],
    plugins: [commonjs(), tsPlugin]
  }
]
