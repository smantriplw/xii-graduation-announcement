import { mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AppLayout-d1830e61.mjs";
import { S as SectionBorder } from "./SectionBorder-bc7fc547.mjs";
import _sfc_main$2 from "./UploadExcel-2581e54f.mjs";
import _sfc_main$3 from "./Settings-ce76a9c0.mjs";
import "@inertiajs/vue3";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "./Dropdown-30489274.mjs";
import "./FormSection-dd80dd2d.mjs";
import "./SectionTitle-ef42c05a.mjs";
import "./InputError-6aeb8d97.mjs";
import "./PrimaryButton-b82fb16e.mjs";
import "./SecondaryButton-0974b11b.mjs";
import "./ActionMessage-c43f20d9.mjs";
import "./InputLabel-3c261e52.mjs";
import "./TextInput-6e39f194.mjs";
import "./Checkbox-e7ed5286.mjs";
import "./DialogModal-a8bc5746.mjs";
import "./Settings.create-d6a29e68.mjs";
const _sfc_main = {
  __name: "Kelulusan",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ title: "Dashboard" }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-semibold text-xl text-gray-800 leading-tight"${_scopeId}> Dashboard Kelulusan </h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-semibold text-xl text-gray-800 leading-tight" }, " Dashboard Kelulusan ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionBorder, null, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionBorder, null, null, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("div", { class: "max-w-7xl mx-auto py-10 sm:px-6 lg:px-8" }, [
                  createVNode("div", null, [
                    createVNode(_sfc_main$2),
                    createVNode(SectionBorder)
                  ]),
                  createVNode("div", null, [
                    createVNode(_sfc_main$3),
                    createVNode(SectionBorder)
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Kelulusan.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
