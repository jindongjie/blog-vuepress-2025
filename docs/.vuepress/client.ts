import { defineClientConfig } from "vuepress/client";
import RepoCard from "vuepress-theme-plume/features/RepoCard.vue";
import "./styles/index.scss";

export default defineClientConfig({
  enhance({ app }) {
    app.component("RepoCard", RepoCard);
  },
});
