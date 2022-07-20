<template>
    <div>
      <img class="card-img" :src="stay.imgUrls[0]"/> 
      <span>{{ stay.name }}</span>
      <div class="buttom">{{ stay.loc.address }} • {{stay.loc.country}}</div>
    </div>
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

};
</script>
