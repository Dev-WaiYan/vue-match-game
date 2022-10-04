<script setup lang="ts">
import type {
  CardModel,
  CurrentTarget,
  CompletedAnswer,
} from "@/models/GameBoard";

interface Props {
  isOpen: boolean;
  card: CardModel;
  currentTarget: CurrentTarget;
  completedAnswers: CompletedAnswer[];
}

const { currentTarget } = withDefaults(defineProps<Props>(), {
  isOpen: false,
});

function click(c) {
  if (currentTarget.answerId !== 0 || currentTarget.targetId === 0) {
    currentTarget.targetId = c.id;
    currentTarget.answerId = 0;
  } else {
    currentTarget.answerId = c.id;
  }

  console.log("currentTarget", currentTarget);
}
</script>

<template>
  <div class="cardContainer" @click="click(card)">
    {{ isOpen ? card.text : "Initial" }}
  </div>
</template>

<style scoped>
.cardContainer {
  width: 100px;
  height: 100px;
  background-color: var(--cardBgColor);
  box-shadow: var(--boxShadow);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
</style>
