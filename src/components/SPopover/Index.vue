<script>
const getParents = ({ parentElement: parent }) =>
  parent ? [parent, ...getParents(parent)] : []

const checkPlacement = (types, p) =>
  typeof p === 'string' && types.indexOf(p) > -1

export default {
  name: 'SPopover',

  props: {
    /**
     * The target of the popover, the popover will be positioned relative
     * to the target when open.
     * When the popover has no explicit target, it will be
     * positioned at the bottom of the screen.
     */
    target: {
      type: [Object, Element]
    },

    arrowSpacing: {
      type: [Number, String],
      default: 15
    },

    /**
     * Determines the distance between the target element and the popover arrow.
     */
    elementSpacing: {
      type: [Number, String],
      default: 0
    },

    /**
     * Whether to show the popover below or above the target element.
     */
    position: {
      type: String,
      default: 'bottom',
      validator: p => checkPlacement(['bottom', 'top'], p)
    },

    /**
     * The horizontal alignment of the popover element relative to the target.
     */
    align: {
      type: String,
      default: 'center',
      validator: v => checkPlacement(['right', 'center', 'left'], v)
    },

    /**
     * The element to set the scroll listener to, the popover closes when
     * scroll is triggered in this element. Defaults to the body element.
     */
    selector: String
  },

  data () {
    return {
      coordinates: {},
      observer: {}
    }
  },

  watch: {
    target: {
      handler: 'setPosition',
      immediate: true
    }
  },

  mounted () {
    const target = this.$el
    const config = { attributes: true, attributeFilter: ['style'] }
    const callback = mutationsList => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'attributes') this.setPosition()
      }
    }

    this.observer = new MutationObserver(callback)
    this.observer.observe(target, config)

    const scrollElement = this.selector ? document.querySelector(this.selector) : window

    window.addEventListener('click', this.emissionHandler)
    window.addEventListener('resize', this.setPosition)
    document.addEventListener('keydown', this.clickEscape, true)
    scrollElement.addEventListener('scroll', this.setPosition)
  },

  computed: {
    boxShadow () {
      const boxShadow = this.position === 'bottom'
        ? '-1px -1px 6px -1.5px rgba(0, 0, 0, 0.2)'
        : '2px 2px 2px 0.5px rgba(0, 0, 0, 0.2)'

      return { '--box-shadow': boxShadow }
    },

    arrowAlignment () {
      if (this.align === 'left') return { '--right': `${this.arrowSpacing}px` }
      if (this.align === 'right') return { '--left': `${this.arrowSpacing}px` }
      return { '--left': `calc(50% - ${this.arrowSpacing / 2}px)` }
    },

    arrowBorder () {
      const borderColor = 'white'
      const defaultBorderColor = 'transparent'
      const isTop = this.position === 'top'
      const setColor = (isTop && borderColor) || defaultBorderColor

      return {
        '--border-bottom-color': setColor,
        '--border-right-color': setColor,
        '--border-left-color': setColor,
        '--border-top-color': setColor
      }
    },

    style () {
      return {
        ...this.coordinates,
        ...this.arrowAlignment,
        ...this.arrowPosition,
        ...this.arrowBorder,
        ...this.boxShadow
      }
    }
  },

  methods: {
    setPosition () {
      if (!this.target) return

      this.$nextTick(() => {
        const popover = this.$el.getBoundingClientRect()
        const target = this.target.hasOwnProperty('$el')
          ? this.target.$el.getBoundingClientRect()
          : this.target.getBoundingClientRect()

        // set top position
        let top = this.position === 'top'
          ? target.top - (8 + popover.height) - this.elementSpacing
          : target.top + (8 + target.height) + this.elementSpacing

        // set left position
        let left = target.left + (target.width / 2)
        if (this.align === 'left') left = left - popover.width + 20
        if (this.align === 'right') left = left - 20
        if (this.align === 'center') left = left - popover.width / 2

        // set coordinates
        this.coordinates = { top: top + 'px', left: left + 'px' }

        // set arrow position
        const arrowPosition = this.position === 'bottom' ? '-5' : popover.height - 5
        this.arrowPosition = { '--top': arrowPosition + 'px' }
      })
    },

    emissionHandler (e) {
      if (!this.target) return

      const targets = e.target ? [e.target, ...getParents(e.target)] : []
      const isTarget = targets.includes(this.target.$el)
      const isOutside = !targets.includes(this.$el)

      /**
       * Event is emitted when the user clicks outside the popover, or
       * presses the ESC key (closes it, basically). This event really should
       * be called `close`, sorry :(
       * @event handler
       * @type {undefined}
       */
      if (!isTarget && isOutside) this.$emit('handler')
    },

    clickEscape (e) {
      if (e.key === 'Escape' || e.keyCode === 27) this.$emit('handler')
    }
  },

  beforeDestroy () {
    const scrollElement = this.selector ? document.querySelector(this.selector) : window

    window.removeEventListener('click', this.emissionHandler)
    window.removeEventListener('resize', this.setPosition)
    document.removeEventListener('keydown', this.clickEscape, true)
    scrollElement.removeEventListener('scroll', this.getPosition)

    this.observer.disconnect()
  },

  render (h) {
    return h('div', {
      staticClass: 's-popover',
      class: { '-bottom': !this.target },
      style: this.style
    }, this.$slots.default)
  }
}
</script>

<style lang="scss">
@import "./src/styles/_index.scss";

$s-popover-arrow-size: 10px;
$s-popover-background: #fff;
$s-popover-border: 1px solid black;

%arrow-effect {
  position: absolute;
  content: '';
  width: $s-popover-arrow-size;
  height: $s-popover-arrow-size;
  background-color: $s-popover-background;
  border-radius: 4px 0 4px 0;
}

%arrow {
  &::before {
    @extend %arrow-effect;
    z-index: inherit;
    transform: rotate(45deg);
  }
}

%base {
  display: block;
  position: fixed;
  border-radius: 5px;
  box-shadow: 0 2px 6px 0 rgba(0,0,0,0.2);
  z-index: $z-index-1;
}

.s-popover:not(.-bottom) {
  @extend %base;
  @extend %arrow;

  &::before {
    top: var(--top);
    left: var(--left);
    right: var(--right);
    box-shadow: var(--box-shadow);
    border-bottom-color: var(--border-bottom-color);
    border-right-color: var(--border-right-color);
    border-left-color: var(--border-left-color);
    border-top-color: var(--border-top-color);
  }
}

.s-popover.-bottom {
  @extend %base;
  margin: 10px;
  bottom: 0;
  left: calc(50% - 10px);
  transform: translateX(-50%);
  width: 100%;
  max-width: 300px;
  border-bottom-color: var(--border-bottom-color);
  border-right-color: var(--border-right-color);
  border-left-color: var(--border-left-color);
  border-top-color: var(--border-top-color);
}
</style>
