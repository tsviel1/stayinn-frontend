<template>

 <el-date-picker
        v-model="value1"
        type="daterange"
        range-separator=""
        start-placeholder="Start date"
        end-placeholder="End date"
        :size="size"

    />
</template>
 <script>
 import { ref } from 'vue'


 export default {

 name: 'calender',
    components: {},
  data() {
   return {
    value1 :ref(''),
    value2 :ref('')
   };
    },
  created() {},
 methods: {},
 computed: {},
 unmounted() {},
  };
  </script>
 <style></style>