<template>
  <div class="code">
    Hello World
    <ul>
      <li v-for="user in users" :key="user.id">{{user.login}}</li>
    </ul>

    <ul>
      <li v-for="item in items" :key="item.id">{{item.title}}</li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from "vuex"

  export default {
    computed: mapState([
      "users",
      "ids",
      "items"
    ])
  }
</script>
