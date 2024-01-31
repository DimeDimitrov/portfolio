<template>
  <div class="project">
    <div class="left">
      <h1 class="project-title">{{ props.title }}</h1>
      <h2 v-if="props.subtitle" class="project-subtitle">{{ props.subtitle }}</h2>
      <div class="tools">
        <img v-for="tool in props.usedTools" :src="getToolSrc(tool)" :alt="tool" :title="tool" class="tools" />
      </div>
    </div>
    <div class="right">
      <img :src="props.image" alt="projectimage.png" />
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  title: String,
  subtitle: {
    type: String,
    required: false,
  },
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

const tools = [
  {
    name: "Vue.js",
    src: "/tools/vue.png",
  },
  {
    name: "React.js",
    src: "/tools/react.png",
  },
];

function getToolSrc(tool) {
  return tools.find((t) => t.name === tool).src;
}
</script>
<style scoped>
.project {
  width: 100%;
  height: 50rem;
  border-radius: 5px;
}

.project-title {
  color: #3f4055;
  font-size: 6rem;
  margin-bottom: 10px;
  text-align: center;
}

.project-subtitle {
  color: #666;
  font-size: 18px;
  margin-bottom: 10px;
}

.tools {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  width: auto;
  margin-top: 20px;
}
</style>
