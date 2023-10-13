<template>
  <div
    class="flex flex-row justify-around h-8 min-w-full bg-lime-200 items-center"
  >
    <p>
      {{ category }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    type: String,
    default: '',
  },
}
</script>