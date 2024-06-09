<template>
  <div>
    <div
      v-if="isTabletOrMobile"
      class="w-[100vw] h-[100%] bg-white flex justify-center items-center"
    >
      <div
        class="w-[100%] p-[1rem] flex justify-center items-start mt-[3rem]"
      >
        <div class="w-[80%] flex flex-col justify-center items-center">
          <img src="../../assets/logo_card.svg" />
          <h2 class="text-center text-blue080 text-[2.5rem] font-bold">
            Criar uma conta
          </h2>
          <div class="w-full flex flex-col mt-[1.5rem]">
            <label class="text-darkGrey text-[1rem]">Nome</label>
            <input
              v-model="name"
              class="w-[100%] border-2 border-grey p-[6px] rounded-md mb-[1rem] h-[2.5rem] hover:border-grey"
              placeholder="Digite o seu nome"
              type="name"
            />
          </div>
          <div class="w-full flex flex-col mt-[0.5rem]">
            <label class="text-darkGrey text-[1rem]">E-mail</label>
            <input
              v-model="email"
              class="w-[100%] border-2 border-grey p-[6px] rounded-md mb-[1rem] h-[2.5rem] hover:border-grey"
              placeholder="Digite o seu email"
              type="email"
            />
          </div>
          <div class="w-full flex flex-col mt-[0.5rem]">
            <label class="text-darkGrey text-[1rem]">Senha</label>
            <input
              v-model="password"
              class="w-[100%] border-2 border-grey p-[6px] rounded-md mb-[1rem] h-[2.5rem] hover:border-grey"
              placeholder="Digite a sua senha"
              type="password"
            />
          </div>
          <button
            @click="handleRegiser"
            class="w-[100%] bg-yellow800 p-[6px] rounded-md text-white font-semibold h-[2.5rem] mt-[1.5rem] hover:border-2 hover:border-yellow800 hover:bg-white hover:text-yellow800"
          >
            Criar conta
          </button>
          <router-link to="/login" class="text-yellow800 text-[1rem] mt-[0.5rem] hover:underline">
            Já possuo conta
          </router-link>
        </div>
      </div>
    </div>
    <div
      v-else
      class="w-[100vw] h-[100vh] bg-yellow800 flex justify-center items-center"
    >
      <div
        class="w-[36.25rem] h-[41.25rem] bg-white border shadow-lg rounded-lg flex justify-center items-center"
      >
        <div class="w-[80%] flex flex-col justify-center items-center">
          <img src="../../assets/logo_card.svg" />
          <h2 class="text-center text-blue080 text-[2.5rem] font-bold">
            Criar uma conta
          </h2>
          <div class="w-full flex flex-col mt-[1.5rem]">
            <label class="text-darkGrey text-[1rem]">Nome</label>
            <input
              v-model="name"
              class="w-[100%] border-2 border-grey p-[6px] rounded-md mb-[1rem] h-[2.5rem] hover:border-grey"
              placeholder="Digite o seu nome"
              type="name"
            />
          </div>
          <div class="w-full flex flex-col mt-[0.5rem]">
            <label class="text-darkGrey text-[1rem]">E-mail</label>
            <input
              v-model="email"
              class="w-[100%] border-2 border-grey p-[6px] rounded-md mb-[1rem] h-[2.5rem] hover:border-grey"
              placeholder="Digite o seu email"
              type="email"
            />
          </div>
          <div class="w-full flex flex-col mt-[0.5rem]">
            <label class="text-darkGrey text-[1rem]">Senha</label>
            <input
              v-model="password"
              class="w-[100%] border-2 border-grey p-[6px] rounded-md mb-[1rem] h-[2.5rem] hover:border-grey"
              placeholder="Digite a sua senha"
              type="password"
            />
          </div>
          <button
            @click="handleRegiser"
            class="w-[100%] bg-yellow800 p-[6px] rounded-md text-white font-semibold h-[2.5rem] mt-[1.5rem] hover:border-2 hover:border-yellow800 hover:bg-white hover:text-yellow800"
          >
            Criar conta
          </button>
          <router-link to="/login" class="text-yellow800 text-[1rem] mt-[0.5rem] hover:underline">
            Já possuo conta
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, inject } from "vue";
import { UserService } from '@services/User/userService.ts'
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { useRouter } from 'vue-router';

const isTabletOrMobile = inject("isTabletOrMobile", ref(false));
const router = useRouter();

const name = ref("");
const email = ref("");
const password = ref("");

const handleRegiser = async () => {
  if(name.value == "" || email.value == "" || password.value == "") {
    toast.warn("Preencha todos os campos", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
    });
    return;
  }

  const registerBody: any = {
    name: name.value,
    email: email.value,
    password: password.value,
  };

  try {
    console.log("Name:", name.value);
    console.log("Email:", email.value);
    console.log("Password:", password.value);

    await UserService.RegisterUser(registerBody)

    toast.success("Conta criada com sucesso!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
    });

    setTimeout(() => {
      router.push('/login')
    }, 2000);

  } catch(error){
    toast.error("Ocorreu um erro ao criar uma conta.", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
    });
  }
}
</script>
<style></style>
