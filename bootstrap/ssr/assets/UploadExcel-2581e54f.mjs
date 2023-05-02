import { ref, mergeProps, withCtx, createTextVNode, unref, createVNode, openBlock, createBlock, toDisplayString, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { useForm, usePage } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./FormSection-dd80dd2d.mjs";
import { _ as _sfc_main$2 } from "./InputError-6aeb8d97.mjs";
import { _ as _sfc_main$4 } from "./PrimaryButton-b82fb16e.mjs";
import { _ as _sfc_main$5 } from "./SecondaryButton-0974b11b.mjs";
import { _ as _sfc_main$3 } from "./ActionMessage-c43f20d9.mjs";
import "./SectionTitle-ef42c05a.mjs";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
const _sfc_main = {
  __name: "UploadExcel",
  __ssrInlineRender: true,
  setup(__props) {
    const fileInput = ref(null);
    const form = useForm({
      file: null
    });
    usePage();
    const uploadFile = () => {
      if (!fileInput.value.files.length) {
        form.setError("file", "Mohon pilih salah satu file excel dari komputer Anda");
        return;
      }
      form.file = fileInput.value.files[0];
      form.post(route("dashboard.kelulusan.excel"));
    };
    const resetForm = () => {
      fileInput.value.value = "";
      form.reset();
      form.clearErrors();
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ onSubmit: uploadFile }, _attrs), {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Upload Excel File `);
          } else {
            return [
              createTextVNode(" Upload Excel File ")
            ];
          }
        }),
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Silahkan upload file excel data kelulusan siswa disini. Pastikan format tabelnya sudah sesuai ya! `);
          } else {
            return [
              createTextVNode(" Silahkan upload file excel data kelulusan siswa disini. Pastikan format tabelnya sudah sesuai ya! ")
            ];
          }
        }),
        form: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`<div class="col-span-6 sm:col-span-4"${_scopeId}><input type="file" id="file_excel" name="file_excel"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              message: ((_a = _ctx.$page.props.errors) == null ? void 0 : _a.excel_file) ?? unref(form).errors.file,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            if (unref(form).progress) {
              _push2(`<progress${ssrRenderAttr("value", unref(form).progress.percentage)} max="100"${_scopeId}>${ssrInterpolate(unref(form).progress.percentage)}% </progress>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "col-span-6 sm:col-span-4" }, [
                createVNode("input", {
                  type: "file",
                  id: "file_excel",
                  ref_key: "fileInput",
                  ref: fileInput,
                  name: "file_excel"
                }, null, 512),
                createVNode(_sfc_main$2, {
                  message: ((_b = _ctx.$page.props.errors) == null ? void 0 : _b.excel_file) ?? unref(form).errors.file,
                  class: "mt-2"
                }, null, 8, ["message"]),
                unref(form).progress ? (openBlock(), createBlock("progress", {
                  key: 0,
                  value: unref(form).progress.percentage,
                  max: "100"
                }, toDisplayString(unref(form).progress.percentage) + "% ", 9, ["value"])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        actions: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$3, {
              on: unref(form).recentlySuccessful,
              class: "mr-3"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$page.props.jetstream.flash.excel_file)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$page.props.jetstream.flash.excel_file), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: { "opacity-25": unref(form).processing },
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Upload `);
                } else {
                  return [
                    createTextVNode(" Upload ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$5, {
              disabled: unref(form).processing,
              onClick: resetForm,
              class: "ml-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Reset `);
                } else {
                  return [
                    createTextVNode(" Reset ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$3, {
                on: unref(form).recentlySuccessful,
                class: "mr-3"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$page.props.jetstream.flash.excel_file), 1)
                ]),
                _: 1
              }, 8, ["on"]),
              createVNode(_sfc_main$4, {
                class: { "opacity-25": unref(form).processing },
                disabled: unref(form).processing
              }, {
                default: withCtx(() => [
                  createTextVNode(" Upload ")
                ]),
                _: 1
              }, 8, ["class", "disabled"]),
              createVNode(_sfc_main$5, {
                disabled: unref(form).processing,
                onClick: resetForm,
                class: "ml-2"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Reset ")
                ]),
                _: 1
              }, 8, ["disabled"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Kelulusan/UploadExcel.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
