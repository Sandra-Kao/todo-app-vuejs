<template>
 <!--  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> 
  </div>-->
  <router-view />
</template>

<style>
#app {
  font-family: "Quicksand", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
:root {
  --color-white: #fafdfe;
  --color-dark: #3b3b3b;
  --color-gray: #2a3f81;
  --color-spotlight-purple: #c81beb;
  --color-spotlight-blue: #2a79f3;
  --color-primary-light: #98b5ff;
  --color-primary-base: #3450a1;
  --color-primary-darker: #173588;
  --color-primary-darkest: #041955;
  --color-primary-base-15: rgb(52, 80, 161, 0.15);
}
* {
  margin: 0;
  padding: 0;
}
*,
*::after,
*::before {
  box-sizing: border-box;
}
html {
  /* font-size: 26px; */
  color: var(--color-white);  
  text-align: center;
  background: var(--color-primary-darker);
}
.content-wrapper {
  padding: 50px;
  border: 0.5px solid var(--color-primary-darker);
}
.padding-helf{
  padding: .5rem;
}
</style>
