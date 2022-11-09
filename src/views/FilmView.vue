<template>
    <div class="film-list" data-enter-time="1667990090" style="top: 0px;">
        <!---->
        <div class="city-fixed">
            <span>广州</span>
            <i class="iconfont icon-sousuo-paixujiantouxia" style="font-size: 10px;"></i>
        </div>
        <!---->
        <div class="tabs-bar-wrapper">
            <div class="tabs-bar">
                <ul class="tabs-nav">
                    <li class="active" style="width: 50%;">
                        <span>
                            <router-link to="/films/nowPlaying">正在热映</router-link>
                        </span>
                    </li>
                    <li class="" style="width: 50%;">
                        <span>
                            <router-link to="/films/comingSoon">即将上映</router-link>
                        </span>
                    </li>
                    <div class="tab-ink-bar-wrapper" style="transform: translate3d(0%, 0px, 0px); width: 50%;">
                        <span class="tab-ink-bar" style="width: 56px;"></span>
                    </div>
                </ul>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>

</style>