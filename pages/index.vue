<template>
  <div class="page">
    <Wheader/>
    <NuxtChild :key="$route.params.id" class="page"/>
    <Wfooter/>
  </div>
</template>
<script>
import Wheader from '@/components/Header'
import Wfooter from '@/components/Footer'
export default {
  components: {
    Wheader,
    Wfooter
  }
}
</script>