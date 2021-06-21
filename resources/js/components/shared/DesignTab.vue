<template>
  <div class="options__tab">
    <vsa-list>
      <vsa-item :initActive="true">
        <vsa-heading>
          Layout
        </vsa-heading>
        <vsa-content class="flex-grow">
          <div class="flex col-gap-4">
            <div class="flex-grow">
              <div class="attributes">
                <div
                  v-for="(option, key) in attributes"
                  :key="key"
                  class="attribute"
                >
                  <label>{{ option.display }}</label>
                  <component
                    class="mb-2"
                    :is="`${option.type}-fieldtype`"
                    :handle="option.handle"
                    :config="option"
                    v-model="option.value"
                    @input="
                      updateField({
                        option: 'inline',
                        key,
                        val: $event,
                      })
                    "
                  />
                </div>
              </div>
            </div>
            <BoxModelUI :field="field" @input="updateField($event)" />
          </div>
        </vsa-content>
      </vsa-item>
      <vsa-item>
        <vsa-heading>
          Background
        </vsa-heading>
        <vsa-content>
          <div>
            <label>Test</label>
          </div>
        </vsa-content>
      </vsa-item>
    </vsa-list>
  </div>
</template>

<script>
import {
  VsaList,
  VsaItem,
  VsaHeading,
  VsaContent,
  VsaIcon,
} from "vue-simple-accordion";
import "vue-simple-accordion/dist/vue-simple-accordion.css";
import BoxModelUI from "./BoxModelUI.vue";
import OptionsFields from "../../mixins/OptionsFields";
export default {
  components: { BoxModelUI, VsaList, VsaItem, VsaHeading, VsaContent, VsaIcon },
  props: {
    field: {
      type: Object,
    },
    overRideDefaultOptions: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {
      attributes: {
        width: {
          cast_booleans: false,
          clearable: false,
          listable: "hidden",
          taggable: false,
          push_tags: false,
          type: "select",
          icon: "select",
          options: this.getTWClasses("width", "w"),
          handle: "width",
          display: "Width",
          value: this.field.config?.inline?.width ?? null,
          ...this.overRideDefaultOptions?.inline?.width,
        },
        height: {
          placeholder: "Add a tailwind-style width classes",
          input_type: "text",
          type: "text",
          icon: "text",
          handle: "height",
          display: "Height",
          value: this.field.config?.inline?.height ?? null,
          ...this.overRideDefaultOptions?.inline?.height,
        },
      },
    };
  },
  mixins: [OptionsFields],
};
</script>

<style>
.vsa-list {
  --vsa-highlight-color: transparent;
  --vsa-border-width: 0;
  --vsa-max-width: none;
}

.vsa-item__trigger {
  padding: 0;
  border-bottom: 1px solid var(--vsa-border-color);
}
.vsa-item__trigger__content {
  font-weight: normal;
}
.vsa-item__trigger:focus,
.vsa-item__trigger:hover {
  color: unset;
}

.vsa-item__trigger:focus .vsa-item__trigger__icon--is-default:after,
.vsa-item__trigger:focus .vsa-item__trigger__icon--is-default:before,
.vsa-item__trigger:hover .vsa-item__trigger__icon--is-default:after,
.vsa-item__trigger:hover .vsa-item__trigger__icon--is-default:before {
  background-color: var(--vsa-text-color);
}

.vsa-item__trigger__icon--is-default {
  width: 16px;
}

.vsa-item__trigger__icon--is-default:after,
.vsa-item__trigger__icon--is-default:before {
  width: 18px;
  height: 1px;
}

.vsa-item__trigger[aria-expanded="true"]
  .vsa-item__trigger__icon--is-default:before {
  transform: rotate(45deg) translate3d(10px, 15px, 0);
}

.vsa-item__trigger[aria-expanded="true"]
  .vsa-item__trigger__icon--is-default:after {
  transform: rotate(-45deg) translate3d(-10px, 15px, 0);
}
</style>
