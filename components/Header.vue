<template>
  <div class="header">
    <div class="left">
      <div class="name">
        <h1>{{ $t("name") }}</h1>
        <h1>{{ $t("surname") }}</h1>
        <h2 class="subtitle">{{ ageInYears }} {{ $t("age") }}</h2>
      </div>
      <div class="links">
        <a href="https://www.linkedin.com/">LinkedIn</a>
        <a href="https://github.com/">GitHub</a>
        <a href="">Resume</a>
      </div>
    </div>
    <div class="right">
      <div class="image">
        <img src="/header-person.png" alt="Dimitar Dimitrov" />
      </div>
    </div>
  </div>
</template>
<script setup>
const birthDate = new Date(2005, 9, 7);
const currentDate = new Date();
const ageInMilliseconds = currentDate - birthDate;
const ageInYears = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25));
</script>
<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20rem;
}

.name {
  line-height: 2rem;
}
.name h1 {
  font-size: 8rem;
  color: white;
}
.name h2 {
  font-size: 3rem;
}

.subtitle {
  color: #afafaf;
}

.image {
  text-align: center;
}
.image img {
  width: 40rem;
  margin: 40px 0;
}

.hire {
  font-weight: bold;
}

.links {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.links a {
  color: rgb(136, 129, 243);
}

.links a {
  margin: 0 10px;
}
</style>
