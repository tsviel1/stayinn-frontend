<template>
  <section>
    <el-row v-if="stays">
      <el-col v-for="stay in stays" :key="stay._id">
        <stay-preview :stay="stay" />
      </el-col>
    </el-row>
  </section>

</template>
 <script>
import stayPreview from './stay-preview.cmp.vue';
export default {
  name: 'stay-list',
  props: {
    stays: {
      type: Array,
      required: true
    },
  },
  components: {
    stayPreview
  },
};
</script>
 <style>
 </style>