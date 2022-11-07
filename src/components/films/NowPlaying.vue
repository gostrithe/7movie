<template>
    <div>
        <h3 class="title">正在上映</h3>
        <button @click="toDetail">电影详情</button>
        <!-- 默认跳转，非编程控制 -->
        <a href="/film/5678">电影详情</a>  
    </div>
</template>

<script>
    // vue3 api 
    // import { useRouter } from 'vue-router'

    export default {
        methods: {
            toDetail() {
                // 编程式导航（代码控制跳转）
                this.$router.push('/film/1234')
            }
        },

        // setup(props) {
        //     const router = useRouter();
        //     router.push('/film/123451')
        //     router.push({path: /film/123451})
        //     router.push({name: 'film', params: {id: 123451}})
        // }
    }
</script>

<style lang="scss" scoped>

</style>