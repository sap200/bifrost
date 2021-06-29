<template>
    <div id="main">
        <div id="balance">
            <button @click="fetchBalance"> refresh </button>
            Bank Balances
            <ul>
                <li v-for="(obj, ind) in balances" :key="ind">
                    <label> {{obj.amount}} </label> <label style="color: red;"> {{obj.denom}} </label> 
                </li>
            </ul>
        </div>

        <div id="payment">
            <section>
                <label> Tezos Receiver </label> <br> 
                <input type="text" name="tezos-receiver" v-model="tezosReceiver"/>
            </section>
            <section>
                <label> Amount </label> <br>
                <input type="number" name="amount" min="0" v-model="amount"/>
            </section>
            <section>
                <label> Denom </label> <br>
                <input type="text" name="denom" v-model="denom"/>
            </section>
            <section>
                <button @click="sendToTezos"> Send </button>
            </section>

        </div>
    </div>
    
</template>

<script>
export default {

    data() {
        return {
            balances: [],
            tezosReceiver: "",
            amount: 0,
            denom: "",
        }
    },

    computed: {
        selectedAccount() {
			return this.$store.getters['common/wallet/address']
		}
    },

    methods: {
        async fetchBalance() {
            const res = await fetch("http://localhost:1317/cosmos/bank/v1beta1/balances/" + this.selectedAccount)
            const new_res = await res.json()
            this.balances = await new_res.balances
        },

        async sendToTezos() {

            if (this.selectedAccount == "") {
                alert("Login to send to tezos")
                return
            }

            if (this.tezosReceiver == "") {
                alert("Tezos receiver cannot be empty")
                return
            }

            if (this.amount == 0) {
                alert("Amount cannot be zero")
                return
            }

            if (this.denom == "") {
                alert("Denom cannot be empty")
                return
            }

            if (this.denom != "mutez" && this.denom != "token") {
                alert("Denom has to be mutez or token")
                return
            } 

            let payload = {
                creator: this.selectedAccount,
                amount: this.amount,
                denom: this.denom.trim(),
                tezosReceiver: this.tezosReceiver.trim(),
            }

            console.log(payload)

            let result = await this.$store.dispatch('sap200.bifrost.bifrost/sendMsgCreateSendToTezos', { value: payload, fee: [] })
            console.log(await result.rawLog)
        }
    },

    created() {
        this.fetchBalance()
    }

}
</script>

<style scoped>

#payment {
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.26);
    margin: 1rem auto;
    justify-content: center;
    align-items: center;
    width: 60%;
    border-radius: 5px;
    padding: 2rem;
    background-image: linear-gradient(to right, white);
    font-family: monospace;
}

#balance {
    margin: 1rem auto;
    justify-content: center;
    align-items: center;
    width: 60%;
    text-align: right;
    color: blue;
    font-size: 2rem;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

input {
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-size: 2rem;
}

label {
    margin-right: 3rem;
    font-size: 2.5rem;
    color: black;
    margin-bottom: 2rem;
}

button {
    font-size: 2rem;
    padding: 1rem;
    background-image: linear-gradient(to right, violet, blueviolet);
    color: white;
    width: 10rem;
    border-width: 0;
    border-radius: 3px;
    cursor: pointer;
}

button:hover {
    font-size: 2.1rem;
}

ul {
    list-style-type: none;
}
</style>
