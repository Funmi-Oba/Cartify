<template lang="">
  <div class="flex items-center justify-center">
    <div class="bg-[#f3f3f3] flex flex-col items-center justify-center w-1/2 my-20 p-10">
      <h2 class="text-3xl text-[#333]">Login</h2>
      <p class="text-[#666] mt-2">Please login using account detail below.</p>
<p v-if="errorMessage" class="text-red-500">{{errorMessage}}</p>
      <form @submit.prevent="login" class="flex flex-col w-full mt-6 space-y-4">
        <input
          type="email"
          name=""
          v-model="email"
          placeholder="Email"
          class="bg-white text-[#333] placeholder:text-[#333] w-full p-3 focus:outline-none"
        />
        <input
          type="password"
          name=""
          v-model="password"
          placeholder="Password"
          class="bg-white text-[#333] placeholder:text-[#333] w-full p-3 focus:outline-none"
        />
        
        <div class="flex items-center justify-between mt-4">
            <div class="flex flex-col space-y-4">
                <CustomButton type="submit" class="bg-[#333] text-white border-[#333] hover:bg-white hover:text-[#333] ">
            <template #button-name>
                Sign in
            </template>
        </CustomButton>
              <button type="" class="hover:text-[#666] text-[#333]"><router-link :to="{name: 'register'}">Create Account</router-link></button>
            </div>
            

        <button type="" class="hover:text-[#666] text-[#333]">Forgot Password?</button>
        </div>
      </form>
  
    </div>
  </div>
</template>
<script setup>
import CustomButton from '@/components/CustomButton.vue';
import { useAuthStore } from '@/stores/auth';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useBreadcrumbStore } from '@/stores/breadcrumb'

const breadcrumbStore = useBreadcrumbStore()
onMounted(() => {
  breadcrumbStore.setCrumbs([{ label: 'Account' }])
})
//State
const authStore = useAuthStore();
const email = ref('');
const password = ref('');
const router = useRouter();
const errorMessage = ref(null);
// Methods
const login = async () => {
    try {
        await authStore.login(email.value, password.value);
        window.location.href = '/';
       
    } catch (error) {
        console.error(error);
        errorMessage.value = error.message;
    }
}
</script>
<style lang=""></style>
