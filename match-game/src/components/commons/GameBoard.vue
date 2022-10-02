<script setup lang="ts">
import type { CardModel } from "@/models/GameBoard";
import { ref } from "vue";
import Card from "./Card.vue";

const cards: CardModel[] = [
  {
    id: 1,
    text: "One",
  },
  {
    id: 2,
    text: "Two",
  },
  {
    id: 3,
    text: "One",
  },
  {
    id: 4,
    text: "Two",
  },
  {
    id: 5,
    text: "Three",
  },
  {
    id: 6,
    text: "Three",
  },
];

const answers = [
  {
    targetId: 1,
    answerId: 3,
  },
  {
    targetId: 2,
    answerId: 4,
  },
  {
    targetId: 5,
    answerId: 6,
  },
];

const completedAnswers = ref([]);

const currentTarget = ref({
  targetId: 0,
  answerId: 0,
});
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-8 offset-sm-2 boardContainer">
        <div class="row">
          <div
            v-for="c in cards"
            class="col-4 d-flex justify-content-center my-3"
          >
            <!-- <Card
              :card="c"
              :currentTarget="currentTarget"
              :isOpen="
                c.id === currentTarget.targetId ||
                c.id === currentTarget.answerId
              "
              :completedAnswers="completedAnswers"
            /> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.boardContainer {
  background-color: var(--cardBoardColor);
  padding: 30px 10px;
  box-shadow: var(--boxShadow);
}
</style>
