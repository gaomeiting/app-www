
import store from "../../store"
import { mapGetters } from 'vuex';
import { BASE_URL } from 'api/config';
import {
    message
} from 'ant-design-vue';
export const audioHandler = {
	data() {
		return {
			currentSongIndex: -1,
			flag: false,
			currentTime: '',
			totalTime: '',
			songReady: false,
			song: false,
			diff: 0
		}
	},
	methods: {
		settingCurrentSong(index) {
			if (index === this.currentSongIndex) {
				//歌曲切换
				this.flag = !this.flag;
				this.flag ? this.$refs.audio.play() : this.$refs.audio.pause()
			} else {
				this.song = true;
				this.currentSongIndex = index
				this.$refs.audio.load()
				setTimeout(() => {
					this.song = false
					this.$refs.audio.play();
				}, 1000)
				this.flag = true;

			}
		},
		ready() {
			this.songReady = true;
		},
		updateTime(e) {
			let currentTime = e.target.currentTime | 0;
			let totalTime = this.$refs.audio && this.$refs.audio.duration | 0;
			let diff = totalTime * 1 - currentTime * 1
			this.diff = diff;
			this.currentTime = this.format(diff);
		},
		end() {
			this.flag = false;
		},
		format(n) {
			if(!n) return '';
			let m = 0;
			let s = 0;
			m = n / 60 | 0;
			s = n % 60;
			let padS = this._pad(s)
			return `${m}:${padS}`
		},
		_pad(num, n = 2) {
			let len = num.toString().length
			while (len < n) {
				num = '0' + num
				len++
			}
			return num
		}
	}
}
export const handlerError = {
	methods: {
		_handlerError(err) {
			let error = '';
			if (err) {
				if(err.status === 401) {
					store.commit('SET_LOGOUT');
					store.commit('SET_LOGIN', 0)
					return;
				}
				if (err.message) {
					error = err.message;
				} else {
					error = err.error;
				}
			} else {
				error = "接口调试中"
			}
			message.error(error, 3)
		}
	}
}
export const handlerNav = {
	data() {
		return {
			
		}
	},
	methods: {
		goNav(index) {
			this.currentNavIndex = index;
			switch (index) {
                case 0:
                    this.$router.push('/service');
                    break;
                case 1:
                    this.$router.push('/searchVoice');
                    break;
                case 2:
                    this.$router.push('/computedPrice');
                    break;
                
            }
		}
	}
}

export const handlerStatus = {
	computed: {
        ...mapGetters(['status'])
    },
	methods: {
        goCustomer() {
            if(this.status != 1) {
                message.warning('你还不是需求方,不能发布需求');
                return;
            }
            window.location.href= `${BASE_URL}/customer/`
		}
    }
}