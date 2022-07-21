<template>
  <section>
    <div class="search-container">
      <div class="filter">Where</div> 
      <div class="break-point"></div>
      <div class="filter">Check in</div> 
      <div class="break-point"></div>
      <div class="filter">Check out</div> 
      <div class="break-point"></div>
      <div class="filter">Who</div>
      <div class="search-btn"><i class="fas fa-search"></i></div>
    </div>
  
      <!-- <el-button round @click="isDialog = !isDialog">Anywhere</el-button>
      <el-button round @click="isDialog = !isDialog">Any week</el-button>
      <el-button round @click="isDialog = !isDialog">Add guests -->
        <div class="little-search-btn">
          

        </div>
      <!-- </el-button> -->
 
    <div class="search-area">
      <el-dialog v-if="isDialog" v-model="isDialog" width="70%" center>

        <span>hi</span>


      </el-dialog>
    </div>
  </section>
</template>
 <script>
import calenderCmp from './calender.cmp.vue'
export default {
  name: 'search-stay',
  components: {
    calenderCmp
  },
  data() {
    return {
      show:false,
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