<template>
  <div class="admin">
    <h1>Admin-Panel</h1>
    <AdminDisplay />
  </div>
</template>

<script>
import AdminDisplay from "@/components/AdminDisplay.vue";

export default {
  name: "Admin",
  components: {
    AdminDisplay
  }
};
</script>

<style lang="scss">
.admin {
  text-align: center;
}

h1 {
  font-size: 40px;
  color: #efefef;
}
h2 {
  font-size: 35px;
  color: #efefef;
  margin-bottom: 12px;
}
h3 {
  font-size: 32px;
  color: #efefef;
  margin-bottom: 6px;
}
</style>
