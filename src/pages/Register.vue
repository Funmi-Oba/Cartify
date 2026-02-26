<template lang="">
  <div class="flex items-center justify-center">
    <div class="bg-[#f3f3f3] flex flex-col items-center justify-center w-1/2 my-20 p-10">
      <h2 class="text-3xl text-[#333]">Create Account</h2>
      <p class="text-[#666] mt-2">Please Register using account detail below.</p>

      <p v-if="errorMessage" class="text-red-500">{{errorMessage}}</p>
      <form @submit.prevent="register" class="flex flex-col w-full mt-6 space-y-4">
  
        <input
          type="text"
          name=""
          v-model="form.name"
          placeholder="Full Name"
          class="bg-white text-[#333] placeholder:text-[#333] w-full p-3 focus:outline-none"
        />
        <!-- <input
          type="text"
          name=""
            v-model="form.name"
          placeholder="Last Name"
          class="bg-white text-[#333] placeholder:text-[#333] w-full p-3 focus:outline-none"
        /> -->
        <input
          type="email"
          name=""
            v-model="form.email"
          placeholder="Email"
          class="bg-white text-[#333] placeholder:text-[#333] w-full p-3 focus:outline-none"
        />
         <input
          type="text"
          name=""
            v-model="form.phone_number"
          placeholder="Phone Number"
          class="bg-white text-[#333] placeholder:text-[#333] w-full p-3 focus:outline-none"
        />
         <input
          type="text"
          name=""
            v-model="form.address"
          placeholder="Address"
          class="bg-white text-[#333] placeholder:text-[#333] w-full p-3 focus:outline-none"
        />
        <input
          type="password"
          name=""
            v-model="form.password"
          placeholder="Password"
          class="bg-white text-[#333] placeholder:text-[#333] w-full p-3 focus:outline-none"
        />

        <CustomButton type="submit" class="bg-[#333] text-white border-[#333] hover:bg-white hover:text-[#333] self-start">
          <template #button-name> Create </template>
        </CustomButton>
        <button type="" class="hover:text-[#666] text-[#333] text-left">
          <router-link :to="{ name: 'home' }">Return to Store</router-link>
        </button>
      </form>
    </div>
  </div>
</template>
<script setup>
import CustomButton from '@/components/CustomButton.vue'
import { useAuthStore } from '@/stores/auth';
import { reactive, ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useBreadcrumbStore } from '@/stores/breadcrumb'

const breadcrumbStore = useBreadcrumbStore()
onMounted(() => {
  breadcrumbStore.setCrumbs([{ label: 'Create Account' }])
})
//State
const authStore = useAuthStore();
const form = reactive({
    name: 'Funmi',
    email: 'funmi@gmail.com',
    phone_number: '08105406668',
    address: 'Abeokuta',
    password: '12345',
});
const errorMessage = ref(null)
const router = useRouter();
// Methods
const register = async () => {
    try {
        await authStore.register(form);
        console.log(form)
    
    } catch (error) {
        console.error(error.message);
        errorMessage.value = error.message;
    }
}
</script>
<style lang=""></style>
