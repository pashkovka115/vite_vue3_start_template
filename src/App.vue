<template>
  <div class="container">
    <section>
      <Messages/>
    </section>
  </div>

  <section class="text-center-line">
    <div class="card" style="width: 350px">
      <div class="card-body">
        <h1>Vue 3
          <img src="/assets/img/vue-js.svg" alt="vue-js" class="vue-img">
          Vite 6
          <img src="/assets/img/vite.svg" alt="vite" class="vue-img">
        </h1>
        <HelloWorld/>
        <p>Counter: {{ counter }}</p>
        <p>
          <button @click="plusCount">+</button>
          &nbsp;
          <button @click="minusCount">-</button>
        </p>
        <p><span>Test span</span></p>
      </div>
    </div>
  </section>

  <div class="container">
    <button class="btn btnPrimary btnSm" @click="modalFirst = !modalFirst">Show first modal</button>
    <button class="btn btnPrimary" @click="modalFirst = !modalFirst">Show first modal</button>
    <button class="btn btnPrimary btnLg" @click="modalFirst = !modalFirst">Show first modal</button>

    <Modal title="First modal" v-show="modalFirst" @close="modalFirst = false">
      <template v-slot:body>
        <form @submit.prevent="">
          <label>Name</label>
          <input type="text">
          <label>Email</label>
          <input type="text">
          <button class="btn btnPrimary">Submit</button>
        </form>
      </template>
    </Modal>
  </div>

  <div class="container">

    <section>
      <div class="row">
        <div class="col">col &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
        <div class="col">col &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
        <div class="col">col &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
        <div class="col">col &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
        <div class="col">col &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
        <div class="col">col &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
        <div class="col">col &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
        <div class="col">col &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
        <div class="col">col &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
        <div class="col">col &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
        <div class="col">col &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
        <div class="col">col &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
      </div>

    </section>

    <section>
      <div class="row">
        <div class="col-12">
          col-12
        </div>
      </div>
      <div class="row">
        <div class="col-1">
          col-1
        </div>
        <div class="col-11">
          col-11
        </div>
      </div>
      <div class="row">
        <div class="col-2">
          col-2
        </div>
        <div class="col-10">
          col-10
        </div>
      </div>
      <div class="row">
        <div class="col-3">
          col-3
        </div>
        <div class="col-9">
          col-9
        </div>
      </div>
      <div class="row">
        <div class="col-4">
          col-4
        </div>
        <div class="col-8">
          col-8
        </div>
      </div>
      <div class="row">
        <div class="col-5">
          col-5
        </div>
        <div class="col-7">
          col-7
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          col-6
        </div>
        <div class="col-6">
          col-6
        </div>
      </div>
    </section>


    <section>
      <div class="md-body">
        <h1>Md title h1</h1>
        <h2>Md title h2</h2>
        <h3>Md title h3</h3>
        <p><a href="#">md link</a></p>
        <p>Paragraph Paragraph Paragraph Paragraph Paragraph </p>
        <ul>
          <li>item 1</li>
          <li>item 2</li>
          <li><ul>
            <li>item 2.1</li>
            <li>item 2.2</li>
            <li>item 2.3</li>
          </ul></li>
          <li>item 3</li>
        </ul>
        <p><img src="/assets/img/vite.svg"></p>
      </div>
    </section>

  </div>

</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Modal from "@/components/UI/Modal.vue";
import Messages from "@/components/Messages.vue";

export default {
  name: "App",
  components: {Messages, HelloWorld, Modal},
  data() {
    return {
      counter: 0,
      modalFirst: false
    }
  },
  methods: {
    plusCount() {
      this.counter++
    },
    minusCount() {
      this.counter--
    },
  }
}
</script>


<style scoped lang="scss">
body {
  color: #1a1a1a;

  span {
    color: rgba(255, 0, 0, 0.69);
  }
}

::placeholder {
  color: gray;
}

.vue-img {
  width: 100px;
  height: auto;
}
</style>