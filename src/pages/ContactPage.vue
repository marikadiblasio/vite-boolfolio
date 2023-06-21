<template>
    <div>
        <h1>Contatti</h1>
        <form @submit.prevent="sendForm()" >
            <label for="name">Name</label>
            <input type="text" v-model="name" id="name" alt="">
            <label for="address">Email</label>
            <input type="mail" is="address" v-model="address" >
            <div class="mb-3">
              <label for="body" class="form-label">Corpo della mail</label>
              <textarea class="form-control" rows="3" v-model="body"></textarea>
            </div>
            <button type="submit">Invia</button>
    </form>
    </div>
</template>

<script>
import axios from 'axios';
import { store } from '../data/store';
    export default {
        name: 'ContactPage',
        data(){
            return {
                store,
                name: '',
                address: '',
                body: ''
            }
        },
        methods: {
            sendForm(){
                const data = {
                    name : this.name,
                    address : this.address,
                    body : this.body
                }
                axios.post(`${store.apiUrl}/contacts`, data).then((res)=>{
                    console.log('ciao');
                });
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>