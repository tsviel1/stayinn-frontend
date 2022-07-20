<template>
<<<<<<< HEAD
<el-card>
  <div>
    <img :src="stay.imgUrls[0]">
    <span>{{stay.name}}</span>
    <div class="buttom">{{stay.address.street}}</div>
  </div>
</el-card>
=======
  <el-card>
    <div>
      <img :src="stay.img" alt="">
      <span>{{ stay.name }}</span>
      <div class="buttom">{{ stay.loc.address }}</div>
    </div>
  </el-card>
>>>>>>> bdf822e03d5833a3608ffb71c87de3c61e9aedb9
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