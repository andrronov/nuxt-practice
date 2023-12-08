<script setup>
import {useCounterStore} from '~/stores/myStore'
const store = useCounterStore()
console.log(store);
const {$sayHello, $calculate} = useNuxtApp()
$sayHello('Andrew')
const aaa = $calculate(4, 345345)
const bbb = 30

const response = await $fetch('/api/hello')
console.log(response);
</script>

<template>
   <div>index page</div>
   <p>{{ aaa }}</p>
   <h1>{{ bbb }}</h1>
   <Alert />
   <ContentDoc />
   <NuxtLink to="/events">events</NuxtLink>
   <Counter />
   <Counter />
</template>