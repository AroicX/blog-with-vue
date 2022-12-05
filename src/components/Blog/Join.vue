<template>
  <main>
    <div class="f_join" v-if="!joined">
      <h5>Join our Team of Writers</h5>
      <p>
        On dasdas, writers earn a living doing what they love. <br />
        Getting started is easy. Just pay a one time $25 fee and everything is
        ready to go.
      </p>

      <button type="submit" aria-label="button" @click="checkout">
        Join Us
      </button>
    </div>
    <div class="f_join" v-if="joined">
      <h5>Payment Successful, you have joined the writers.</h5>
    </div>
  </main>
</template>

<script>
export default {
  name: "join-us",
  data() {
    return {
      joined: false,
    };
  },
  methods: {
    checkout() {
      const $ = this;
      const modal = window.FlutterwaveCheckout({
        public_key: "FLWPUBK_TEST-89de5e67d9ce340e042aa8207f928e3e-X",
        tx_ref: window
          .btoa(
            String.fromCharCode(
              ...window.crypto.getRandomValues(new Uint8Array(24 * 2))
            )
          )
          .replace(/[+/]/g, "")
          .substring(0, 24),
        amount: 1000,
        currency: "NGN",
        payment_options: "card",
        meta: {
          consumer_id: 23,
          consumer_mac: "92a3-912ba-1192a",
        },
        customer: {
          email: "Arowosegbe67@gmail.com",
          phone_number: "07016762847",
          name: "Gabriel Oluwasegun Arowosegbe",
        },
        customizations: {
          title: "The Titanic Store",
          description: "Payment for an awesome cruise",
          logo: "https://www.logolynx.com/images/logolynx/22/2239ca38f5505fbfce7e55bbc0604386.jpeg",
        },
        callback: function (transction) {
          if (transction?.status === "successful") {
            $.joined = true;
            modal.close();
          }
        },
        onclose(error) {
          console.log(error);
        },
      });
    },
  },
};
</script>

<style></style>
