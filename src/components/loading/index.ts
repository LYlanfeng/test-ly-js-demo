import { withInstall } from '../../utils/with-install'
import _Loading from './src'

export const Loading = withInstall(_Loading)
export default Loading

export type { LoadingProps } from './src/base'
