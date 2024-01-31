<template>
  <div class="wrapper">
    <Header />
    <div class="projects">
      <h1 id="my-projects">My Projects</h1>
      <Project
        v-for="project in projects"
        :key="project.title"
        :title="project.title"
        :subtitle="project.subtitle"
        :usedTools="project.usedTools"
        :date="project.date"
        :date_to="project.date_to"
        :source="project.source"
        :image="project.image"
      />
    </div>
  </div>
</template>
<script setup>
import Header from "/components/Header.vue";
import Project from "/components/Project.vue";

const projects = [
  {
    title: "vozackiispiti.mk",
    usedTools: ["Vue.js", "React.js"],
    date: "01.2024",
    source: "https://github.com/DimeDimitrov/oki-frontend",
    image: "vozackiispiti.png",
  },
  {
    title: "Project 2",
    subtitle: "Subtitle 2",
    usedTools: ["Vue.js", "React.js"],
    date: "2021-01-01",
    source: "",
    image: "",
  },
];
</script>
<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: rgb(221, 222, 228);
}
.projects {
  width: 100%;
}
#my-projects {
  text-align: center;
  font-size: 3rem;
}
</style>
