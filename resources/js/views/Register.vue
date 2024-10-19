<script setup>
import InputLabel from '../components/InputLabel.vue';
import InputText from '../components/InputText.vue';
import { ref } from 'vue';
import http from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter();
const name = ref('');
const email = ref('');
const password = ref('');

function onSubmit() {
    const formData = {
        name: name.value,
        email: email.value,
        password: password.value,
    };

    let promise = new Promise((resolve, reject) => {
        http.post('/api/register', formData)
            .then(response => {
                resolve(response.data);
                resetForm();
                console.log("Form submitted successfully", response.data);
                router.push({ name: 'login' });
            }).catch(error => {
                console.error("Error submitting form", error);
                reject(error);
            });
    });

}

function resetForm() {
    name.value = '';
    email.value = '';
    password.value = '';
}

</script>
<template>
    <div class="row d-flex align-items-center justify-content-center">
        <div class="col-md-8">

            <div class="card mt-5">
                <div class="card-header">
                    <h4>Register</h4>
                </div>
                <div class="card-body">
                    <form @submit.prevent="onSubmit" method="POST">
                        <div class="mb-3">
                            <InputLabel for="name" value="Name" />
                            <InputText v-model="name" id="name" type="text" />
                        </div>
                        <div class="mb-3">
                            <InputLabel for="email" value="Email" />
                            <InputText v-model="email" id="email" type="text" aria-describedby="emailHelp" />
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-3">
                            <InputLabel for="password" value="Password" />
                            <InputText v-model="password" id="password" type="password" />
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>

                </div>
            </div>
        </div>
    </div>
</template>
<style></style>
