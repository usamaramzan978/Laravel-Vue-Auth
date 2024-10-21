<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuth } from '../composables/useAuth';
import InputLabel from '../components/InputLabel.vue';
import InputText from '../components/InputText.vue';

let router = useRouter();
const { login } = useAuth();


const email = ref('');
const password = ref('');

async function onSubmit() {
    const formData = {
        email: email.value,
        password: password.value,
    };

    const result = await login(formData);

    if (result.success) {
        resetForm();
        router.push({ name: 'dashboard' });
        console.log('Logged in:', result.user);
    } else {
        console.error('Login failed');
    }
}

function resetForm() {
    email.value = '';
    password.value = '';
}
</script>
<template>
    <div class="row d-flex align-items-center justify-content-center">
        <div class="col-md-8">

            <div class="card mt-5">
                <div class="card-header">
                    <h4>Login</h4>
                </div>
                <div class="card-body">
                    <form @submit.prevent="onSubmit" method="POST">
                        <div class="mb-3">
                            <InputLabel for="email" value="Email" />
                            <InputText v-model="email" id="email" type="text" aria-describedby="emailHelp" />
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-3">
                            <InputLabel for="password" value="Password" />
                            <InputText v-model="password" id="password" type="password" />
                        </div>
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1">
                            <label class="form-check-label" for="exampleCheck1">Remember me</label>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>

                </div>
            </div>
        </div>
    </div>
</template>
<style></style>
