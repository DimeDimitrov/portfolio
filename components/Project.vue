<template>
  <div class="project">
    <div class="left">
      <h3>{{ props.date }}</h3>
      <a v-if="props.href" :href="props.href" class="title-href">{{ props.title }}</a>
      <h1 v-else class="title">{{ props.title }}</h1>
      <h2 v-if="props.subtitle" class="subtitle">{{ props.subtitle }}</h2>
      <h3 class="description">{{ props.description }}</h3>
      <div class="tools">
        <Icon v-for="tool in props.usedTools" :name="tool" :title="tool" size="48" class="tools" />
      </div>
    </div>
    <div class="right">
      <img class="image" :src="props.image" alt="projectimage.png" />
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  title: String,
  description: String,
  subtitle: {
    type: String,
    required: false,
  },
  href: String,
  usedTools: Array,
  date: String,
  date_to: {
    type: String,
    required: false,
  },
  source: String,
  image: String,
  isOdd: Boolean,
});
</script>
<style scoped>
.project {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20rem;
}
.title-href {
  font-size: 2rem;
  color: white;
  text-decoration: none;
}
.title {
  font-size: 2rem;
  color: white;
}
.title-href:hover {
  text-decoration: underline;
  color: rgb(203, 190, 250);
}
.subtitle {
  color: rgb(187, 187, 187);
  font-size: 1rem;
}
.description {
}
.image {
  width: 40rem;
  margin: 40px 0;
}
/* .tools {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  width: auto;
  margin-top: 20px;
} */
</style>
