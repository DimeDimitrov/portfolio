<template>
  <div class="wrapper">
    <Header />
    <div class="projects">
      <h1 id="my-projects">My Portfolio</h1>
      <Project
        v-for="project in projects"
        :key="project.title"
        :href="project.href"
        :title="project.title"
        :description="project.description"
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
    title: "This website",
    description: "My personal portfolio website",
    usedTools: ["devicon:vuejs", "uil:react", "devicon:typescript"],
    date: "02.2024",
    source: "https://github.com/DimeDimitrov/portfolio",
    image: "portfolio.png",
  },
  {
    title: "vozackiispiti.mk",
    href: "https://vozackiispiti.mk",
    subtitle: "Personal Project",
    description: "A website for showing the world different statissctics about the driving tests in Macedonia.",
    usedTools: ["devicon:vuejs", "uil:react"],
    date: "01.2024",
    source: "https://github.com/DimeDimitrov/oki-frontend",
    image: "vozackiispiti.png",
    isOdd: true,
  },
  {
    title: "Paid Internship",
    subtitle: "Aarons Department - Skopje",
    description: "I was a part of the team that was working on the new website for the company.",
    usedTools: ["devicon:laravel", "devicon:php", "devicon:vuejs", "devicon:tailwindcss"],
    date: "06.2023",
    date_to: "09.2023",
    image: "aarons.jpg",
  },
  {
    title: "souksb.mk",
    subtitle: "СОУ Киро Спанџов Брко - Кавадарци",
    description: "A website for the high school I graduated from.",
    usedTools: ["devicon:bootstrap"],
    date: "2021-01-01",
    source: "https://github.com/DimeDimitrov/ksb-website-react",
    image: "souksb.png",
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
