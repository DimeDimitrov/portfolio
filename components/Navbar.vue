<template>
  <div class="navbar-wrapper">
    <div class="navbar">
      <div class="navbar-left">
        <NuxtLink title="Switch to English" :to="switchLocalePath('en')"><img class="flag" src="/englishFlag.webp" alt="English" /></NuxtLink>
        <NuxtLink title="Смени во Македонски" :to="switchLocalePath('mk')"><img class="flag" src="/macedonianFlag.webp" alt="Македонски" /></NuxtLink>
      </div>
      <nav class="navbar-right">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/projects">Projects</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>
      </nav>
    </div>
  </div>
</template>

<script setup>
const switchLocalePath = useSwitchLocalePath();
</script>

<style scoped>
.navbar-wrapper {
  padding-top: 1rem;
  display: flex;
  justify-content: center;
}
.flag {
  height: 20px;
}

.navbar {
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-left {
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.navbar-right {
  display: flex;
  gap: 10px;
  font-weight: bold;
  font-size: 18px;
  color: #333;
}

.navbar-right a {
  color: white;
  text-decoration: none;
}
</style>
