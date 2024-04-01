<script setup lang="ts">
import { getArticles } from '@/api/textIPI'
getArticles().then(res => {
  console.log(res)
})
</script>

<template>
  <el-button type="primary">Click me</el-button>
</template>
