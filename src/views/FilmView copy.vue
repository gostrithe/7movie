<template>
    <div>
        <nav class="tab-wrapper">
            <RouterLink class="tab" to="/films/nowPlaying" active-class="active">
                <div>正在热映</div>
            </routerLink>
            <RouterLink class="tab" to="/films/comingSoon" active-class="active">
                <div>即将上映</div>
            </RouterLink>
        </nav>

        <RouterView />
    </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>

</style>