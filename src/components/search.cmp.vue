<template>
  <section class="search-container">
    <div class="search-btns flex">
      <el-button round @click="isDialog = !isDialog">Anywhere</el-button>
      <el-button round @click="isDialog = !isDialog">Any week</el-button>
      <el-button round @click="isDialog = !isDialog">Add guests
        <div class="little-search-btn">
          

        </div>
      </el-button>
    </div>
    <div class="search-area">
      <el-dialog v-if="isDialog" v-model="isDialog" width="70%" center>

        <span>hi</span>


      </el-dialog>
    </div>
  </section>
</template>
 <script>
export default {
  name: 'search-stay',
  components: {},
  data() {
    return {
      isDialog: false
    };
  },
  created() { },
  methods: {},
  computed: {},
};
</script>
 <style>
 </style>