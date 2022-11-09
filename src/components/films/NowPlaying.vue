<template>
    <div class="film-list-content">
        <div class="nowPlayingList-wrap" data-enter-time="1667990090">
            <ul class="nowPlayingList">
                <NowPlayingItem v-for="film in films" :key="film.filmId" :film="film">
                </NowPlayingItem>
            </ul>
            <!---->
            <div class="page-infinite-loading" style="display: none;">
                <div class="mint-spinner-fading-circle circle-color-91" style="width: 28px; height: 28px;">
                    <div class="mint-spinner-fading-circle-circle is-circle2"></div>
                    <div class="mint-spinner-fading-circle-circle is-circle3"></div>
                    <div class="mint-spinner-fading-circle-circle is-circle4"></div>
                    <div class="mint-spinner-fading-circle-circle is-circle5"></div>
                    <div class="mint-spinner-fading-circle-circle is-circle6"></div>
                    <div class="mint-spinner-fading-circle-circle is-circle7"></div>
                    <div class="mint-spinner-fading-circle-circle is-circle8"></div>
                    <div class="mint-spinner-fading-circle-circle is-circle9"></div>
                    <div class="mint-spinner-fading-circle-circle is-circle10"></div>
                    <div class="mint-spinner-fading-circle-circle is-circle11"></div>
                    <div class="mint-spinner-fading-circle-circle is-circle12"></div>
                    <div class="mint-spinner-fading-circle-circle is-circle13"></div>
                </div>
                <span>加载中...</span>
            </div>
        </div>
    </div>
</template>

<script>
import { getPlayings } from '@api/movieApi';
import NowPlayingItem from './NowPlayingItem.vue';

export default {
    data() {
        return {
            films: []
        };
    },
    components: {
        NowPlayingItem
    },

    // 组件挂载时请求数据
    async mounted() {
        const films = await getPlayings();
        // console.log(films);
        this.films = films;
    },
};
</script>

<style lang="scss" scoped>

</style>