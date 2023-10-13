<template>
  <div
    class="flex fixed bg-green-400 px-5 py-6 box-border justify-start items-center h-16 w-full"
  >
    <div class="w-1/3">
      <h3 class="text-2xl mr-24 text-white">ChelsNews</h3>
    </div>
    <div class="menu w-1/2 flex justify-around items-center">
      <nuxt-link to="/">Tugas 3 dan 4</nuxt-link>
      <!-- <nuxt-link to="/tugas3">Tugas-3</nuxt-link> 
            <nuxt-link to="/tugas4">Tugas-4</nuxt-link> -->

    </div>
  </div>
</template>

<style scoped>
a.nuxt-link-exact-active {
  color: rgb(28, 99, 28);
  width: 96px;
  background-color: white;
  display: flex;
  align-items: center;
  padding: 6px 12px;
  border-radius: 12px;
  justify-content: center;
}
a {
  color: white;
  width: 96px;
  display: flex;
  border: 1px solid white;
  align-items: center;
  padding: 6px 12px;
  border-radius: 12px;
  justify-content: center;
}
a:hover {
  color: rgb(28, 99, 28);
  width: 96px;
  display: flex;
  border: 1px solid white;
  align-items: center;
  padding: 6px 12px;
  border-radius: 12px;
  justify-content: center;
}
</style>