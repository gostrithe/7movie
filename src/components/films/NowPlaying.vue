<template>
    <div>
        <div v-for="item in films" :key="item.filmId">
            {{ item }}
        </div>
    </div>
</template>

<script>
    import { getPlayings } from '@api/movieApi'

    export default {
        data() {
            return {
                films: []
            }
        },

        // 组件挂载时请求数据
        async mounted() {
            const films = await getPlayings();
            // console.log(films);
            this.films = films
        },
    }
</script>

<style lang="scss" scoped>

</style>