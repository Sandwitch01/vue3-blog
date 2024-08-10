<script setup>
const {proxy} = getCurrentInstance();

const useTestStore = proxy.$store.test.useTestStore();

let log = console.log;
log("useTestStore:",useTestStore);
log("proxy.$api:",proxy.$api);
log("proxy.$api.demo:",proxy.$api.demo);

function addCount(){
  useTestStore.add();
}

async function clickRequest(){
  const res = await proxy.$api.demo.testApi();
  log("res:"+res);
}

</script>

<template>
  <router-view />
</template>

<style scoped>


</style>
