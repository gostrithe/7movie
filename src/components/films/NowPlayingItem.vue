<template>
    <li class="nowPlayingFilm-item">
        <a class="nowPlayingFilm-wrap">
            <div class="lazy-img nowPlayingFilm-img" alt="film"
                style="width: 66px; height: 94px; background: rgb(249, 249, 249); float: left;">
                <div class="padding" style="width: 66px; height: 94px; background: rgb(249, 249, 249);">
                    <img :src="film.poster" style="width: 100%;" alt="img">
                </div>
                <!-- <div class="lazy-img-wrap"
                    style="width: 66px; height: 94px; background: rgb(249, 249, 249); opacity: 1; display: block;">
                    <img src="" class="target-img">
                </div> -->
            </div>
            <div class="nowPlayingFilm-info" style="float: left;">
                <div class="nowPlayingFilm-name info-col">
                    <span class="name">{{ film.name }}</span>
                    <span class="item">{{ film.filmType.name }}</span>
                </div>
                <div class="nowPlayingFilm-grade info-col" style="visibility: hidden;">
                    <span class="label">{{ film.grade }} </span>
                    <span class="grade"></span>
                </div>
                <div class="nowPlayingFilm-actors info-col">
                    <span class="label">{{ actors }}</span>
                </div>
                <div class="nowPlayingFilm-detail info-col">
                    <span class="label">{{ `${film.nation} | ${film.runtime}分钟` }}</span>
                </div>
            </div>
            <div class="nowPlayingFilm-buy" style="float: right;">购票</div>
        </a>
    </li>
</template>

<script>
export default {
    props: {
        film: Object
    },
    computed: {
        actors() {
            let str = '主演：';
            this.film.actors.forEach(actor => {
                str += actor.name + ' ';
            });
            return str;
        }
    },
};
</script>

<style lang="scss" scoped>
</style>