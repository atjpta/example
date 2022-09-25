import { defineStore } from "pinia";
export const alertStore = defineStore("alertStore", {
    id: 'alert',
	state() {
		return {
            error: {
				message: '',
				set: false,
			},
            success: {
				message: '',
				set: false,
			},
			info: {
				message: '',
				set: false,
			},
			warning: {
				message: '',
				set: false,
			},
		};
	},
	getters: {
		
	},
	actions: {

		deleteLocalStorage(){
			localStorage.removeItem("user");
			localStorage.removeItem("info");
		},

		setSuccess(message){
			this.success.message = message
			this.success.set = true;
			setTimeout(() => {
				this.success.set = false;
			}, 1000);
		},
		setWarning(message){
			this.warning.message = message
			this.warning.set = true;
			setTimeout(() => {
				this.warning.set = false;
			}, 1000);

		},
		setInfo(message){
			this.info.message = message
			this.info.set = true;
			setTimeout(() => {
				this.info.set = false;
			}, 1000);

		},
		setError(message){
			this.error.message = message
			this.error.set = true;
			setTimeout(() => {
				this.error.set = false;
			}, 1000);

		},
	},
});
