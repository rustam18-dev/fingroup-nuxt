import { defineStore } from "pinia";
export const useModalApplication = defineStore('ModalApplication', {
  state: () => ({
    isPiniaModalApplication: false,
  }),
  getters: {
    isModalApplication() {
      return this.isPiniaModalApplication
    },
  },
  actions: {
    isOpenModalApplicationStore() {
      this.isPiniaModalApplication = true
    },
    isCloseModalApplicationStore() {
      this.isPiniaModalApplication = false
    }
  },
})
