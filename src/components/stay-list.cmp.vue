<template>
  <el-row>
    <el-col v-for="stay in stays" :key="stay._id">
      <stay-preview :stay="stay"/>
    </el-col>
  </el-row>

</template>
 <script>
import stayPreview from './stay-preview.cmp.vue';
export default {
  name: 'stay-list',
  components: {
    stayPreview
  },
  data() {
    return {};
  },
  created() { },
  methods: {},
  computed: {},
  unmounted() { },
};
</script>
 <style>
 </style>
