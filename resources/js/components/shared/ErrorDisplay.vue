<template>
  <div v-if="errors.length" class="errors pl-3">
    <span v-for="error in errors" :key="error" class="text-red-600">{{
      Object.values(error).join(", ")
    }}</span>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    id: String,
  },
  computed: {
    ...mapGetters(["errorBag"]),
    errors() {
      console.log(this.errorBag);
      return this.errorBag || [];
      //   const find = this.errorBag.find((error) => error.hasOwnProperty(this.id));
      //   console.log({ errorBag: this.errorBag, find, id: this.id });
      //   if (!find) return [];
      //   return find[this.id];
    },
  },
};
</script>

<style></style>
