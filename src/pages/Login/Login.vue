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
            Login
          </h2>
          <div class="w-full flex flex-col mt-[1.5rem]">
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
            @click="login"
            class="w-[100%] bg-yellow800 p-[6px] rounded-md text-white font-semibold h-[2.5rem] mt-[1.5rem] hover:border-2 hover:border-yellow800 hover:bg-white hover:text-yellow800"
          >
            Entrar
          </button>
          <router-link to="/register" class="text-yellow800 text-[1rem] mt-[0.5rem] hover:underline">
            Não possuo conta
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
            Login
          </h2>
          <div class="w-full flex flex-col mt-[1.5rem]">
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
            @click="login"
            class="w-[100%] bg-yellow800 p-[6px] rounded-md text-white font-semibold h-[2.5rem] mt-[1.5rem] hover:border-2 hover:border-yellow800 hover:bg-white hover:text-yellow800"
          >
            Entrar
          </button>
          <router-link to="/register" class="text-yellow800 text-[1rem] mt-[0.5rem] hover:underline">
            Não possuo conta
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useUserContext } from "@contexts/userContext/UserContext.vue";
import { User } from "@models/User";
import { useRouter } from 'vue-router';
import { ref, inject } from "vue";
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const isTabletOrMobile = inject("isTabletOrMobile", ref(false));
const { handleLogin } = useUserContext();
const router = useRouter();

const email = ref("");
const password = ref("");

const login = async () => {
  if(email.value == "" || password.value == "") {
    toast.warn("Preencha todos os campos", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
    });
  }

  try {
    console.log("Email:", email.value);
    console.log("Password:", password.value);

    const user: User | undefined | null = await handleLogin(
      email.value,
      password.value
    );

    if(user) {
      console.log(user)
      toast.success("Login realizado com sucesso", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
      });

      router.push('/')
    }
  } catch(error){
    toast.error("Email ou senha incorreto!", {
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
