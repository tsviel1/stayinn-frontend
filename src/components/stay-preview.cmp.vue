<template>
  <el-card>
    <div>
      <span>{{ stay.name }}</span>
      <div class="buttom">{{ stay.loc.address }}</div>
    </div>
  </el-card>
</template>
 <script>
export default {
  name: 'stay-preview',
  components: {},
  props: {
    stay: Object
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