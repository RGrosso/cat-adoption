<template>
  <UApp>
    <UHeader>
      <template #left>
        <NuxtLink to="/">
          <AppLogo class="w-auto h-14 shrink-0" />
        </NuxtLink>
        <TemplateMenu />
      </template>
      <template #right>
        <UColorModeButton />
        <UButton
          to="https://github.com/nuxt-ui-templates/starter"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
          color="neutral"
          variant="ghost"
        />
      </template>
    </UHeader>

    <UMain>
      <NuxtPage />
    </UMain>

    <USeparator icon="i-simple-icons-nuxtdotjs" />

    <UFooter>
      <template #left>
        <p class="text-sm text-muted">
          Built with Nuxt UI • © {{ new Date().getFullYear() }}
        </p>
      </template>

      <template #right>
        <UButton
          to="https://github.com/nuxt-ui-templates/starter"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
          color="neutral"
          variant="ghost"
        />
      </template>
    </UFooter>
  </UApp>
</template>

<script setup>
useHead({
  meta: [
    { name: "viewport", content: "width=device-width, initial-scale=1" }
  ],
  link: [
    { rel: "icon", href: "/favicon.ico" }
  ],
  htmlAttrs: {
    lang: "en"
  }
});

const title = "Cat adoption";
const description = "Find cats available for rehoming and give them a loving home. Browse our selection of adorable cats waiting for adoption.";

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description
});
</script>
