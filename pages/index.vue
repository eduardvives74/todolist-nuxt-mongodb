<template>
  <div>
    <div v-if="productos !== null">
        <pre>
          {{ productos }}
        </pre>
    </div>
    <div v-else>
      <p>No hay productos {{ x }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productos: null,
      x: ""
    }
  },
  mounted() {
    this.getProductos()
  },
  methods: {
    async getProductos() {
      const self = this
      // GET DATA
      await this.$axios.get("/api/products")
        .then( (data) => {
          self.productos = data.data
        })
    }
  }
}
</script>
