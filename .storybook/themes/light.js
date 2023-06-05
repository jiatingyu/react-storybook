import { create } from '@storybook/theming'
import pkg from '../../package.json'

export default create({
  base: 'dark',
  brandTitle: `J组件库 v.${pkg.version}`,
  brandUrl: '',
})
