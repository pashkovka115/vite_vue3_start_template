<template>
<div class="message-cover" :class="message.style">
  <h4>{{message.message}}</h4>
</div>
</template>

<script>
export default {
  name: "Message",
  props:{
    message: Object
  }
}
</script>


<style scoped lang="scss">
.message-cover{
  position: fixed;
  width: 200px;
  right: 32px;
  bottom: 32px;
  padding: 4px 8px;
  border: 2px solid white;
  border-radius: 8px;
  background-color: white;
}

.border-purple{
  border-color: purple;
  color: purple;
}

.border-green{
  border-color: green;
  color: green;
}
</style>
