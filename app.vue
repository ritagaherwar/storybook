<template>
  <h1>Welcome Nuxt to Storybook</h1>
  <div class="grid justify-center items-center h-screen">
    
   <RaniumButton
    label="Click Me"
    variant="primary"
    :disabled="false"
    @click="onButtonClick"
  /> 
  </div>
  
</template>
<script lang="ts" setup>
    const onButtonClick: () => void = () => {
        console.log("Button clicked!");
    };
</script>

<style>

</style>

