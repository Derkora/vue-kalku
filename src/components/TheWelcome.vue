<template>
  <div>
    <input type="text" v-model="angka1">
    <input type="text" v-model="angka2">
    <br>
    <button @click="tambah">+</button>
    <button @click="kurang">-</button>
    <button @click="kali">*</button>
    <button @click="bagi">/</button>
    <br>
    <p>Hasil: <span>{{ hasil }}</span></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      angka1: 0,
      angka2: 0,
      hasil: 0
    };
  },
  methods: {
    tambah() {
      this.hasil = parseFloat(this.angka1) + parseFloat(this.angka2);
    },
    kurang() {
      this.hasil = parseFloat(this.angka1) - parseFloat(this.angka2);
    },
    kali() {
      this.hasil = parseFloat(this.angka1) * parseFloat(this.angka2);
    },
    bagi() {
      if (parseFloat(this.angka2) === 0) {
        this.hasil = "Tidak dapat dibagi oleh 0";
      } else {
        this.hasil = parseFloat(this.angka1) / parseFloat(this.angka2);
      }
    }
  }
};
</script>

<style>
/* Style your calculator here */
</style>
