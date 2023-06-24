<script setup lang="ts">
const route = useRoute()
const user = useUserStore()
const name = route.params.id

watchEffect(() => {
  user.setNewName(route.params.id as string)
})

definePageMeta({
  layout: "home",
})
</script>

<template>
  <div>
    <h3 text-2xl font-500>Hi,</h3>
    <div text-xl>{{ name }}!</div>

    <template v-if="user.otherNames.length">
      <div>
        <span>Also as known as:</span>
        <ul>
          <li v-for="otherName in user.otherNames" :key="otherName">
            <router-link :to="`/hi/${otherName}`" replace>
              {{ otherName }}
            </router-link>
          </li>
        </ul>
      </div>
    </template>

    <Counter />

    <div>
      <NuxtLink class="m-3 text-sm btn" to="/"> Back </NuxtLink>
    </div>
  </div>
</template>
