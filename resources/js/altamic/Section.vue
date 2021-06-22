<template>
  <div class="altamic-section-container mb-2 bg-blue">
    Section: {{ section.uuid }}
    <button @click="removeSection(section.uuid)">Remove Section</button>
    <vue-draggable
      :id="section.uuid"
      :list="dragArray"
      :group="{ name: 'rows' }"
      ghost-class="ghost"
      class="flex flex-col gap-2"
      @change="change"
    >
      <Row
        v-for="row in dragArray"
        :key="row.uuid"
        :parentID="section.uuid"
        :row="row"
      >
        <button @click="removeRow(row.uuid)">Remove Row</button>
      </Row>
    </vue-draggable>
    <button @click="addRow()">Add Row</button>
  </div>
</template>

<script>
import VueDraggable from "vuedraggable";
import Row from "./Row.vue";
import { v4 as uuidv4 } from "uuid";
export default {
  props: {
    section: Object,
    sectionRows: Array,
    allRows: Array,
  },
  data() {
    return {
      dragArray: this.sectionRows.items,
    };
  },
  computed: {
    asd() {
      return;
    },
  },
  components: {
    Row,
    VueDraggable,
  },
  methods: {
    generateUUID(uuid = null) {
      return uuidv4();
    },
    change(e) {
      if (e.added) {
        console.log(e.added);
        const newEl = e.added.element;
        let row = this.allRows.items.find((row) => row.uuid === newEl.uuid);
        if (row && row.parent) {
          row.parent = this.section.uuid;
        }
      }
      if (e.moved) {
        const oldIndex = this.allRows.items.findIndex(
          (row) => row.uuid === e.moved.element.uuid
        );
        this.allRows.items.splice(oldIndex, 1);
        this.allRows.items.splice(e.moved.newIndex, 0, e.moved.element);
        console.log(e.moved, oldIndex);
      }
    },
    addRow() {
      this.sectionRows.items.push({
        uuid: this.generateUUID(),
        parent: this.section.uuid,
        config: {
          enabled: true,
        },
      });
    },

    removeRow(uuid) {
      const index = this.sectionRows.items.findIndex(
        (row) => row.uuid === uuid
      );
      this.sectionRows.items.splice(index, 1);

      //   this.value.rows = this.rows.toArray();

      //   this.update(this.value);
    },
  },
  mounted() {
    console.log(this.allRows);
  },
};
</script>

<style></style>
