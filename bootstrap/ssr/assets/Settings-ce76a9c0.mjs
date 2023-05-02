import { computed, ref, withCtx, createTextVNode, unref, createVNode, withDirectives, openBlock, createBlock, Fragment, renderList, toDisplayString, vModelSelect, isRef, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { usePage, useForm, router } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./FormSection-dd80dd2d.mjs";
import { _ as _sfc_main$4 } from "./InputError-6aeb8d97.mjs";
import { _ as _sfc_main$2 } from "./InputLabel-3c261e52.mjs";
import { _ as _sfc_main$7 } from "./PrimaryButton-b82fb16e.mjs";
import { _ as _sfc_main$8 } from "./SecondaryButton-0974b11b.mjs";
import { _ as _sfc_main$3 } from "./TextInput-6e39f194.mjs";
import { _ as _sfc_main$6 } from "./ActionMessage-c43f20d9.mjs";
import { _ as _sfc_main$5 } from "./Checkbox-e7ed5286.mjs";
import { a as _sfc_main$9 } from "./DialogModal-a8bc5746.mjs";
import _sfc_main$a from "./Settings.create-d6a29e68.mjs";
import "./Dropdown-30489274.mjs";
import "./SectionTitle-ef42c05a.mjs";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
const _sfc_main = {
  __name: "Settings",
  __ssrInlineRender: true,
  setup(__props) {
    const page = usePage();
    const { props: $props } = page;
    const form = useForm({
      description: page.props.kelulusanDesc,
      closed: page.props.kelulusanClosed,
      openedAt: page.props.kelulusanOpenAt,
      name: page.props.kelulusanSettingName,
      id: page.props.kelulusanSettingId,
      activated: true
    });
    const labelSetting = computed(() => {
      const setting = $props.settings.find((s) => s.id === form.id);
      if (!setting) {
        console.log(setting, $props);
      }
      form.description = setting.description;
      form.closed = Boolean(setting.closed);
      form.activated = Boolean(setting.activated);
      form.openedAt = setting.openedAt;
      form.name = setting.name;
      return `Setting ID (selected: ${form.id})`;
    });
    const deleteRule = () => {
      router.delete(route("dashboard.kelulusan.delete_setting", {
        id: form.id
      }, {
        onFinish: () => form.reset()
      }));
    };
    const submitForm = () => {
      form.post(route("dashboard.kelulusan.update_setting", {
        id: form.id
      }, {
        preserveState: true,
        onSuccess: reloadPage
      }));
    };
    const reloadPage = () => {
      form.reset();
    };
    let displayModal = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, { onSubmit: submitForm }, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Pengaturan `);
          } else {
            return [
              createTextVNode(" Pengaturan ")
            ];
          }
        }),
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Anda dapat mengkonfigurasi waktu, status, dan deskripsi dari kelulusan. Semisalnya, Anda ingin pengguna hanya dapat melihat status kelulusan pada saat kapan. `);
          } else {
            return [
              createTextVNode(" Anda dapat mengkonfigurasi waktu, status, dan deskripsi dari kelulusan. Semisalnya, Anda ingin pengguna hanya dapat melihat status kelulusan pada saat kapan. ")
            ];
          }
        }),
        form: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
          if (_push2) {
            _push2(`<div class="col-span-6 sm:col-span-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "name",
              value: unref(labelSetting)
            }, null, _parent2, _scopeId));
            _push2(`<select class="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"${_scopeId}><!--[-->`);
            ssrRenderList(_ctx.$page.props.settings, (setting) => {
              _push2(`<option${ssrRenderAttr("value", setting.id)}${_scopeId}> [ID: ${ssrInterpolate(setting.id)}] ${ssrInterpolate(setting.name)}</option>`);
            });
            _push2(`<!--]--></select></div><div class="col-span-6 sm:col-span-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "name",
              value: "Setting name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              id: "name",
              modelValue: unref(form).name,
              "onUpdate:modelValue": ($event) => unref(form).name = $event,
              type: "text",
              class: "mt-1 block w-full",
              autocomplete: "name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              message: (_a = _ctx.$page.props.errors) == null ? void 0 : _a.name,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="col-span-6 sm:col-span-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "description",
              value: "Description"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              id: "description",
              modelValue: unref(form).description,
              "onUpdate:modelValue": ($event) => unref(form).description = $event,
              type: "text",
              class: "mt-1 block w-full",
              autocomplete: "description"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              message: (_b = _ctx.$page.props.errors) == null ? void 0 : _b.description,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="col-span-6 sm:col-span-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "closed",
              value: "Closed status"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$5, {
              value: unref(form).closed ? "closed" : "open",
              checked: unref(form).closed,
              onClick: ($event) => unref(form).closed = !unref(form).closed,
              modelValue: unref(form).closed,
              "onUpdate:modelValue": ($event) => unref(form).closed = $event
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              message: (_c = _ctx.$page.props.errors) == null ? void 0 : _c.closed,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="col-span-6 sm:col-span-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "closed",
              value: "Activate status"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$5, {
              value: unref(form).activated ? "Off" : "On",
              checked: unref(form).activated,
              onClick: ($event) => unref(form).activated = !unref(form).activated,
              modelValue: unref(form).activated,
              "onUpdate:modelValue": ($event) => unref(form).activated = $event
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              message: (_d = _ctx.$page.props.errors) == null ? void 0 : _d.activated,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="col-span-6 sm:col-span-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "openAt",
              value: "Open Date"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              id: "openAt",
              type: "date",
              name: "openAt",
              modelValue: unref(form).openedAt,
              "onUpdate:modelValue": ($event) => unref(form).openedAt = $event
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              message: (_e = _ctx.$page.props.errors) == null ? void 0 : _e.openedAt,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "col-span-6 sm:col-span-4" }, [
                createVNode(_sfc_main$2, {
                  for: "name",
                  value: unref(labelSetting)
                }, null, 8, ["value"]),
                withDirectives(createVNode("select", {
                  "onUpdate:modelValue": ($event) => unref(form).id = $event,
                  class: "border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.$page.props.settings, (setting) => {
                    return openBlock(), createBlock("option", {
                      value: setting.id,
                      ref_for: true,
                      ref: "settings"
                    }, " [ID: " + toDisplayString(setting.id) + "] " + toDisplayString(setting.name), 9, ["value"]);
                  }), 256))
                ], 8, ["onUpdate:modelValue"]), [
                  [vModelSelect, unref(form).id]
                ])
              ]),
              createVNode("div", { class: "col-span-6 sm:col-span-4" }, [
                createVNode(_sfc_main$2, {
                  for: "name",
                  value: "Setting name"
                }),
                createVNode(_sfc_main$3, {
                  id: "name",
                  modelValue: unref(form).name,
                  "onUpdate:modelValue": ($event) => unref(form).name = $event,
                  type: "text",
                  class: "mt-1 block w-full",
                  autocomplete: "name"
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_sfc_main$4, {
                  message: (_f = _ctx.$page.props.errors) == null ? void 0 : _f.name,
                  class: "mt-2"
                }, null, 8, ["message"])
              ]),
              createVNode("div", { class: "col-span-6 sm:col-span-4" }, [
                createVNode(_sfc_main$2, {
                  for: "description",
                  value: "Description"
                }),
                createVNode(_sfc_main$3, {
                  id: "description",
                  modelValue: unref(form).description,
                  "onUpdate:modelValue": ($event) => unref(form).description = $event,
                  type: "text",
                  class: "mt-1 block w-full",
                  autocomplete: "description"
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_sfc_main$4, {
                  message: (_g = _ctx.$page.props.errors) == null ? void 0 : _g.description,
                  class: "mt-2"
                }, null, 8, ["message"])
              ]),
              createVNode("div", { class: "col-span-6 sm:col-span-4" }, [
                createVNode(_sfc_main$2, {
                  for: "closed",
                  value: "Closed status"
                }),
                createVNode(_sfc_main$5, {
                  value: unref(form).closed ? "closed" : "open",
                  checked: unref(form).closed,
                  onClick: ($event) => unref(form).closed = !unref(form).closed,
                  modelValue: unref(form).closed,
                  "onUpdate:modelValue": ($event) => unref(form).closed = $event
                }, null, 8, ["value", "checked", "onClick", "modelValue", "onUpdate:modelValue"]),
                createVNode(_sfc_main$4, {
                  message: (_h = _ctx.$page.props.errors) == null ? void 0 : _h.closed,
                  class: "mt-2"
                }, null, 8, ["message"])
              ]),
              createVNode("div", { class: "col-span-6 sm:col-span-4" }, [
                createVNode(_sfc_main$2, {
                  for: "closed",
                  value: "Activate status"
                }),
                createVNode(_sfc_main$5, {
                  value: unref(form).activated ? "Off" : "On",
                  checked: unref(form).activated,
                  onClick: ($event) => unref(form).activated = !unref(form).activated,
                  modelValue: unref(form).activated,
                  "onUpdate:modelValue": ($event) => unref(form).activated = $event
                }, null, 8, ["value", "checked", "onClick", "modelValue", "onUpdate:modelValue"]),
                createVNode(_sfc_main$4, {
                  message: (_i = _ctx.$page.props.errors) == null ? void 0 : _i.activated,
                  class: "mt-2"
                }, null, 8, ["message"])
              ]),
              createVNode("div", { class: "col-span-6 sm:col-span-4" }, [
                createVNode(_sfc_main$2, {
                  for: "openAt",
                  value: "Open Date"
                }),
                createVNode(_sfc_main$3, {
                  id: "openAt",
                  type: "date",
                  name: "openAt",
                  modelValue: unref(form).openedAt,
                  "onUpdate:modelValue": ($event) => unref(form).openedAt = $event
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_sfc_main$4, {
                  message: (_j = _ctx.$page.props.errors) == null ? void 0 : _j.openedAt,
                  class: "mt-2"
                }, null, 8, ["message"])
              ])
            ];
          }
        }),
        actions: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$6, {
              on: unref(form).recentlySuccessful,
              class: "mr-3"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$page.props.jetstream.flash.settings)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$page.props.jetstream.flash.settings), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$7, {
              class: { "opacity-25": unref(form).processing },
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Save `);
                } else {
                  return [
                    createTextVNode(" Save ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$8, {
              onClick: ($event) => isRef(displayModal) ? displayModal.value = true : displayModal = true,
              class: "ml-2",
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` New + `);
                } else {
                  return [
                    createTextVNode(" New + ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$8, {
              onClick: reloadPage,
              class: "ml-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Refresh `);
                } else {
                  return [
                    createTextVNode(" Refresh ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$7, {
              type: "button",
              disabled: unref(form).processing,
              class: "bg-red-600 ml-2 hover:bg-red-500",
              onClick: deleteRule
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Delete `);
                } else {
                  return [
                    createTextVNode(" Delete ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$6, {
                on: unref(form).recentlySuccessful,
                class: "mr-3"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$page.props.jetstream.flash.settings), 1)
                ]),
                _: 1
              }, 8, ["on"]),
              createVNode(_sfc_main$7, {
                class: { "opacity-25": unref(form).processing },
                disabled: unref(form).processing
              }, {
                default: withCtx(() => [
                  createTextVNode(" Save ")
                ]),
                _: 1
              }, 8, ["class", "disabled"]),
              createVNode(_sfc_main$8, {
                onClick: ($event) => isRef(displayModal) ? displayModal.value = true : displayModal = true,
                class: "ml-2",
                disabled: unref(form).processing
              }, {
                default: withCtx(() => [
                  createTextVNode(" New + ")
                ]),
                _: 1
              }, 8, ["onClick", "disabled"]),
              createVNode(_sfc_main$8, {
                onClick: reloadPage,
                class: "ml-2"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Refresh ")
                ]),
                _: 1
              }),
              createVNode(_sfc_main$7, {
                type: "button",
                disabled: unref(form).processing,
                class: "bg-red-600 ml-2 hover:bg-red-500",
                onClick: deleteRule
              }, {
                default: withCtx(() => [
                  createTextVNode(" Delete ")
                ]),
                _: 1
              }, 8, ["disabled"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$9, {
        show: unref(displayModal),
        onClose: ($event) => isRef(displayModal) ? displayModal.value = false : displayModal = false
      }, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Buat pengaturan baru `);
          } else {
            return [
              createTextVNode(" Buat pengaturan baru ")
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$a, { form: unref(form) }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$a, { form: unref(form) }, null, 8, ["form"])
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$8, {
              onClick: ($event) => isRef(displayModal) ? displayModal.value = false : displayModal = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Close `);
                } else {
                  return [
                    createTextVNode(" Close ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$8, {
                onClick: ($event) => isRef(displayModal) ? displayModal.value = false : displayModal = false
              }, {
                default: withCtx(() => [
                  createTextVNode(" Close ")
                ]),
                _: 1
              }, 8, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Kelulusan/Settings.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
