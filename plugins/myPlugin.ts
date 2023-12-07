export default defineNuxtPlugin((nuxtApp) => {
   return{
      provide: {
         sayHello: (name: string) => console.log(`Hello, ${name}!`),
         calculate: (aaa: number, bbb: number) => {return aaa + bbb}
      }
   }
})