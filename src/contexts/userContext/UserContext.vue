<template>
  <slot />
</template>

<script lang="ts">
import { ref, provide, inject, onMounted } from 'vue';
import { UserService } from '@services/User/userService';
import { User } from '@models/User';

const UserContextSymbol = Symbol('UserContext');

interface UserContext {
  user: User | null;
  handleLogin: (email: string, password: string) => Promise<User | null | undefined>;
  handleLogout: () => void;
  updateUserInfo: (updatedUser: User) => void;
}

export function useUserContextProvider() {
  const user = ref<User | null>(null);

  const handleLogin = async (email: string, password: string) => {
    try {
      const response = await UserService.Login(email, password);
      if (response) {
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify(response.user));
        const { id, name, email } = response.user;
        user.value = { id, name, email };
        return response.user;
      }
    } catch (error) {
      throw new Error('Usuario ou senha inválidos');
    }
  };

  const handleLogout = () => {
    try {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      user.value = null;
    } catch (error) {
      console.log(error);
    }
  };

  const updateUserInfo = (updatedUser: User) => {
    const { id, name, email } = updatedUser;
    user.value = { id, name, email };
    localStorage.setItem('user', JSON.stringify({ id, name, email }));
  };

  onMounted(() => {
    try {
      const userData = localStorage.getItem('user');
      if (userData) {
        const { id, name, email } = JSON.parse(userData);
        user.value = { id, name, email };
      }
    } catch (error) {
      console.error(error);
    }
  });

  provide(UserContextSymbol, {
    user,
    handleLogin,
    handleLogout,
    updateUserInfo,
  } as unknown as UserContext);
}

export function useUserContext(): UserContext {
  const context = inject<UserContext>(UserContextSymbol);
  if (!context) {
    throw new Error('useUserContext must be used within a UserContextProvider');
  }
  return context;
}
</script>

<script setup lang="ts">

useUserContextProvider();
</script>
