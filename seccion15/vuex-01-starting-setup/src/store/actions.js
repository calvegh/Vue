export default {
  login(context, payload) {
    //LOGIN
    console.log(payload.value);
    context.commit('login', payload);
  },
};
