import { defineStore } from 'pinia';

export const useUserStore = defineStore('useUserStore', () => {
    const count = ref(0);

    function add() {
        count.value++;
    }

    return {count, add};
});
