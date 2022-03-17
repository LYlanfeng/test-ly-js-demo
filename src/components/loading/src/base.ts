import {} from 'vue'
import { createNamespace } from '../../../utils/create'
import type { PropType, ExtractPropTypes } from 'vue'

const [name, bem] = createNamespace('loading')

export { name, bem }

export type LoadingType = 'circular' | 'spinner'

export const loadingProps = {
  color: {
    type: String,
    default: '#c9c9c9'
  },
  type: {
    type: String as PropType<LoadingType>,
    default: 'circular'
  },
  size: {
    type: [String, Number],
    default: '32px'
  },
  textSize: {
    type: [String, Number],
    default: '16px'
  },
  textColor: {
    type: String,
    default: '#c9c9c9'
  },
  vertical: Boolean
}

export type LoadingProps = ExtractPropTypes<typeof loadingProps>
