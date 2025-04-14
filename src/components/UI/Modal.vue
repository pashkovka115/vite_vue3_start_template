<template>
  <Transition name="modal">
    <div class="modal__wrapper" @click="$emit('close')">
      <div class="modal-content" @click.stop="">
        <div class="modal-header">
          <span class="modal-title"> {{ title }} </span>
          <span class="button-close" @click="$emit('close')">×</span>
        </div>
        <div class="modal-body">
          <slot name="body">Defoult body</slot>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  name: 'BaseModal',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data () {
    return {}
  },
  mounted () {
    document.body.addEventListener('keyup', ev => {
      if (ev.keyCode === 27) this.$emit('close')
    })
  },
  computed: {},
  methods: {}
}
</script>

<style lang="scss" scoped>

.modal-enter-active {
  animation: modal-in 1s;
}
.modal-leave-active {
  animation: modal-in 0.5s reverse;
}
@keyframes modal-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}

.modal__wrapper{
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  transition: opacity .2s ease;
  right: 0;
  z-index: 998;
  background-color: rgba(00,00,00,.48);
}

.modal-content {
  position: relative;
  max-width: 600px;
  padding: 20px 18px;
  background-color: #fff;
  border: 1px solid #dcdfe6;
  transition: all .2s ease;
  border-radius: 8px;
  z-index: 999;
  overflow: hidden;
  @media screen and (min-width: 900px) {
    min-width: 500px;
  }
}
.modal-header {
  display: flex;
  align-self: center;
  justify-content: space-between;
  padding-bottom: 20px;
  span {
    font-size: 24px;
  }
  .button-close {
    cursor: pointer;
  }
}
.modal-body {
  text-align: center;
}

</style>
