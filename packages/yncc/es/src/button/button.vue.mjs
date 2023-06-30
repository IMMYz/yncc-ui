import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, unref, renderSlot } from "vue";
import "./style/index.scss.mjs";
const __default__ = {
  name: "cc-button"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: {
    type: null
  },
  setup(__props) {
    const buttonProps = __props;
    const buttonStyle = computed(() => {
      return { [`cc-button--${buttonProps.type}`]: buttonProps.type };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        class: normalizeClass(["cc-button", unref(buttonStyle)])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
