import { computed, defineComponent, ExtractPropTypes } from 'vue'
import { addUnit } from '@ly-js/utils'
import { name, bem, loadingProps } from './base'

const SpinIcon: JSX.Element[] = Array(12)
  .fill(null)
  .map((_, index) => <i class={bem('line', String(index + 1))} />)

const CircularIcon = (
  <svg class={bem('circular')} viewBox="25 25 50 50">
    <circle cx="50" cy="50" r="20" fill="none" />
  </svg>
)

export default defineComponent({
  name,

  props: loadingProps,

  setup(props, { slots }) {
    const spinnerStyle = computed(() => ({ color: props.color }))

    const renderText = () => {
      if (slots.default) {
        return (
          <span
            class={bem('text')}
            style={{
              fontSize: addUnit(props.textSize),
              color: props.textColor ?? props.color
            }}
          >
            {slots.default()}
          </span>
        )
      }
    }

    return () => {
      const { type, vertical } = props
      return (
        <div class={bem([type, { vertical }])}>
          <span class={bem('spinner', type)} style={spinnerStyle.value}>
            {type === 'spinner' ? SpinIcon : CircularIcon}
          </span>
          {renderText()}
        </div>
      )
    }
  }
})
