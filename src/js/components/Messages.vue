<template>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <button @click="addMessage('vue')">
          <img src="/assets/img/vue-js.svg" alt="vue-js" class="vue-img" width="50">
        </button>
      </div>

      <div class="col-6">
        <button @click="addMessage('vite')">
          <img src="/assets/img/vite.svg" alt="vite" class="vue-img" width="43">
        </button>
      </div>
    </div>
  </div>
  <Transition name="slide-fade">
  <Message v-if="showMessage" :message="message"/>
  </Transition>
</template>

<script>
import Message from "@/js/components/Message.vue";
// import message from "@/js/components/Message.vue";

export default {
  components: {Message},
  name: "Messages",
  data(){
    return {
      showMessage: false
    }
  },
  computed: {
    message() {
      return this.$store.getters.message
    }
  },
  methods:{
    addMessage(code){
      this.$store.commit('addMessage', code)
    }
  },
  watch:{
    message(){
      if (this.message){
        this.showMessage = true

        setTimeout(()=>{
          this.showMessage = false
          this.$store.commit('addMessage', 'null')
        }, 3600)
      }
    }
  }
}
</script>


<style scoped lang="scss">

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>