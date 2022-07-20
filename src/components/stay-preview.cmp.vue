<template>
<el-card>
  <div>
    <img :src="stay.img" alt="">
    <span>{{stay.name}}</span>
    <div class="buttom">{{stay.address.street}}</div>
  </div>
</el-card>
</template>
 <script>
 export default {
 name: 'stay-preview',
    components: {},
    props:{
     stay:Object 
    },
  data() {
   return {};
    },
  created() {},
 methods: {},
 computed: {},
 unmounted() {},
  };
  </script>
 <style></style>