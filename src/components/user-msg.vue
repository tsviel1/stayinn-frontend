<template>
  <div v-if="msg" class="user-msg" :class="msg.type">
    <div class="texts">
      <!-- <h2>{{ msg.type }}</h2> -->
      <p>{{ msg.txt }} </p>
     <close-svg @click="msg=!msg"/>
      <router-link v-if="msg.link" :to="msg.link" class="learn-more">Learn More about this website</router-link>
    </div>
  </div>
</template>

<script>
import closeSvg from './svg/close-svg.vue';
import { eventBus } from '@/services/event-bus.service.js';
import CloseSvg from './svg/close-svg.vue';


export default {
  data() {
    return {
      msg: null,
      removeEventListener: null,
    };
  },
  created() {
    this.unsubscribe = eventBus.on('show-msg', this.showMsg);
  },
  components: {
    closeSvg,
    CloseSvg
},
  methods: {
    showMsg(msg) {
      this.msg = msg;
      setTimeout(() => {
        this.msg = null;
      }, 6500);
    },
  },
  unmounted() {
    this.unsubscribe();
  },
};
</script>

<style lang="scss" scoped>
.user-msg {
  position: fixed;
  top: 9%;
  right: 4.5%;
  padding: 15px 15px 15px 20px;
  transform:traslateX(-50%) ;
  transition:opacity 0.3s;
  border-radius: 5px;

  &.success {
    background-color: #f0f9eb;
    border: 1px solid #e1f3d8;
    color: #67c23a;
  }

  &.error {
    background-color: #fef0f0;
    border: 1px solid #fde2e2;
    color: #f56c6c;
  }

  p {
    margin: 0;
  }

  .texts {
    display: flex;
    align-items: center;
    text-align: center;

    svg {
      height: 20px;
      padding-left: 10px;
      text-align: center;
      color: #a8abb2;
    }

  }
}
</style>
