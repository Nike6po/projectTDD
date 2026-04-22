<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" lg="6">
        <h1 class="text--secondary mb-3 mt-3">Мои заказы</h1>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12" sm="8" lg="6">
        <v-list v-if="userOrders.length > 0" subheader two-line flat>
          <v-list-item 
            v-for="order in userOrders" 
            :key="order.id"
          >
            <template v-slot:prepend>
              <v-list-item-action>
                <v-checkbox
                  :model-value="order.done"
                  color="primary"
                  @click="markDone(order)"
                ></v-checkbox>
              </v-list-item-action>
            </template>

            <v-list-item-title>{{ order.name }}</v-list-item-title>
            <v-list-item-subtitle>{{ order.phone }}</v-list-item-subtitle>

            <template v-slot:append>
              <v-list-item-action>
                <v-btn class="primary" :to="'/ad/' + order.adId">Открыть объявление</v-btn>
              </v-list-item-action>
            </template>
          </v-list-item>
        </v-list>
        
        <!-- Сообщение, если нет заказов -->
        <v-card v-else class="text-center pa-5">
          <h3 class="text--secondary">У вас пока нет заказов</h3>
          <p>Купите что-нибудь!</p>
          <v-btn color="primary" to="/">На главную</v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    userOrders() {
      return this.$store.getters.userOrders || []
    }
  },
  methods: {
    markDone(order) {
      order.done = !order.done
      console.log('Заказ обработан:', order.id, order.done)
    }
  }
}
</script>