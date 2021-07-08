import UpcomingGames from '@/UpcomingGames.vue';
import VueAxios from 'vue-axios';
import axios from 'axios';
import { createApp } from 'vue';

createApp(UpcomingGames).use(VueAxios, axios).mount('#app');
