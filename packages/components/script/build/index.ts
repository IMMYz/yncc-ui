import delPath from "../utils/delpath";
import { series, parallel, src, dest } from "gulp"
import { pkgPath, componentPath } from "../utils/paths"
// import sass from "gulp-sass"
import autoPrefixer from "gulp-autoprefixer";
import run from '../utils/run'

//删除dist
export const removeDist = () => {
  return delPath(`${pkgPath}/yncc`)
}

//打包样式
const sass = require('gulp-sass')(require('sass'));
export const buildStyle = () => {
  return src(`${componentPath}/src/**/style/**.scss`)
    .pipe(sass())
    .pipe(dest(`${pkgPath}/yncc/lib/src`))
    .pipe(dest(`${pkgPath}/yncc/es/src`));
};

//打包组件
export const buildComponent = async () => {
  run("pnpm run build", componentPath)
}

export default series(
  async () => removeDist(),
  parallel(
    async () => buildStyle(),
    async () => buildComponent()
  )
)