<template>
  <div>
    <button @click="getEndpoint">button</button>
    <child :create-setter="createSetter" :article="article"></child>
  </div>
</template>