<template>
  <div id="app">
    <PropParent/>
    <RefParent />
    <OnParent />
  </div>
</template>

<script>
import PropParent from './components/props/Parent'

import RefParent from './components/refs/Parent'

import OnParent from './components/emiton/Parent'

export default {
  name: 'App',
  components: {
    PropParent,
    RefParent,
    OnParent
  }
}
</script>

<style>
  .parent{
    padding: 16px 0;
    border-bottom: 1px solid #ededed;
  }
</style>
