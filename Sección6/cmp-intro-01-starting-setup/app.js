const app = Vue.createApp({
    data() {
        return {
            friends: [
                {
                    id: 'manuel',
                    name: 'Manuel Lorenz',
                    phone: '00001 00002 1234',
                    email: 'manuel.lorenz@localhost.com'

                },
                {
                    id: 'julie',
                    name: 'julie Jones',
                    phone: '00001 00002 1234',
                    email: 'julie.Jones@localhost.com'
                }
            ]
        }
    },
})
app.component('user-contact', {
    template: `      
    <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails">{{ detailAreVisible ? 'Hide':'Show' }} Details</button>
    <ul v-if="detailAreVisible">
      <li><strong>Phone:</strong> {{friend.phone}}</li>
      <li><strong>Email:</strong> {{friend.email}}</li>
    </ul>
  </li>`,
    data() {
        return {
            detailAreVisible: false,
            friend: {
                id: 'manuel',
                name: 'Manuel Lorenz',
                phone: '00001 00002 1234',
                email: 'manuel.lorenz@localhost.com'

            }
        }
    },
    methods: {
        toggleDetails() {
            this.detailAreVisible = !this.detailAreVisible;
        }
    }
});
app.mount("#app")