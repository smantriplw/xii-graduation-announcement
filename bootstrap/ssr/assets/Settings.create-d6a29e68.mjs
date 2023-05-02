import { withCtx, createTextVNode, unref, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { useForm, usePage } from "@inertiajs/vue3";
import { S as SectionTitle } from "./SectionTitle-ef42c05a.mjs";
import "./InputLabel-3c261e52.mjs";
import { _ as _sfc_main$1 } from "./TextInput-6e39f194.mjs";
import { _ as _sfc_main$2 } from "./InputError-6aeb8d97.mjs";
import { _ as _sfc_main$5 } from "./PrimaryButton-b82fb16e.mjs";
import { _ as _sfc_main$4 } from "./ActionMessage-c43f20d9.mjs";
import { _ as _sfc_main$3 } from "./Checkbox-e7ed5286.mjs";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
const _sfc_main = {
  __name: "Settings.create",
  __ssrInlineRender: true,
  props: {
    form: Object
  },
  setup(__props) {
    const parentProps = __props;
    const form = useForm({
      name: "",
      activated: false,
      closed: false,
      openedAt: null,
      description: ""
    });
    usePage();
    const submitForm = () => {
      var _a, _b;
      if (!form.openedAt) {
        form.setError("openedAt", "Tanggal harus diisi ya!");
      } else if (((_a = form.name) == null ? void 0 : _a.length) < 4) {
        form.setError("name", "Jumlah karakter nama harus lebih dari 4 karakter");
      } else if (((_b = form.description) == null ? void 0 : _b.length) > 20) {
        form.setError("description", "Deskripsi harus terdiri atas minimal 10 karakter dan lebih");
      }
      form.post(route("dashboard.kelulusan.settings"), {
        onSuccess: () => {
          parentProps.form = form;
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      _push(`<!--[--><div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">`);
      _push(ssrRenderComponent(SectionTitle, null, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Name `);
          } else {
            return [
              createTextVNode(" Name ")
            ];
          }
        }),
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Mohon masukan nama setting pada kolom disebelah kanan ini `);
          } else {
            return [
              createTextVNode(" Mohon masukan nama setting pada kolom disebelah kanan ini ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1, {
        type: "text",
        id: "setting_name",
        name: "setting_name",
        modelValue: unref(form).name,
        "onUpdate:modelValue": ($event) => unref(form).name = $event
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        message: (_a = _ctx.$page.props.errors) == null ? void 0 : _a.name
      }, null, _parent));
      _push(`</div><div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">`);
      _push(ssrRenderComponent(SectionTitle, null, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Description `);
          } else {
            return [
              createTextVNode(" Description ")
            ];
          }
        }),
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Berikan deskripsi setting Anda disini `);
          } else {
            return [
              createTextVNode(" Berikan deskripsi setting Anda disini ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1, {
        type: "text",
        id: "setting_desc",
        name: "setting_desc",
        modelValue: unref(form).description,
        "onUpdate:modelValue": ($event) => unref(form).description = $event
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        message: (_b = _ctx.$page.props.errors) == null ? void 0 : _b.description
      }, null, _parent));
      _push(`</div><div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">`);
      _push(ssrRenderComponent(SectionTitle, null, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Closed `);
          } else {
            return [
              createTextVNode(" Closed ")
            ];
          }
        }),
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Apakah Anda ingin menutup pengumuman? `);
          } else {
            return [
              createTextVNode(" Apakah Anda ingin menutup pengumuman? ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        checked: unref(form).closed,
        modelValue: unref(form).closed,
        "onUpdate:modelValue": ($event) => unref(form).closed = $event,
        onClick: ($event) => unref(form).closed = !unref(form).closed
      }, null, _parent));
      _push(`</div><div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">`);
      _push(ssrRenderComponent(SectionTitle, null, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Activate `);
          } else {
            return [
              createTextVNode(" Activate ")
            ];
          }
        }),
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Apakah Anda ingin mengaktifkan pengaturan ini? `);
          } else {
            return [
              createTextVNode(" Apakah Anda ingin mengaktifkan pengaturan ini? ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        checked: unref(form).activated,
        modelValue: unref(form).activated,
        "onUpdate:modelValue": ($event) => unref(form).activated = $event,
        onClick: ($event) => unref(form).activated = !unref(form).activated
      }, null, _parent));
      _push(`</div><div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">`);
      _push(ssrRenderComponent(SectionTitle, null, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Tanggal `);
          } else {
            return [
              createTextVNode(" Tanggal ")
            ];
          }
        }),
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Tanggal berapa Anda ingin pengumuman dapat diakses? `);
          } else {
            return [
              createTextVNode(" Tanggal berapa Anda ingin pengumuman dapat diakses? ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1, {
        type: "date",
        id: "setting_date",
        name: "setting_date",
        modelValue: unref(form).openedAt,
        "onUpdate:modelValue": ($event) => unref(form).openedAt = $event
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        message: (_c = _ctx.$page.props.errors) == null ? void 0 : _c.openedAt
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$4, {
        on: unref(form).recentlySuccessful
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$page.props.jetstream.flash.settings)}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$page.props.jetstream.flash.settings), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$5, {
        class: "mt-4 { 'opacity-25': form.processing }",
        onClick: submitForm,
        disabled: unref(form).processing
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Create `);
          } else {
            return [
              createTextVNode(" Create ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Kelulusan/Settings.create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
