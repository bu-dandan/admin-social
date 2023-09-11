<template>
    <div class="container">
        <div class="empty">
            <img src="@/assets/permi.png" alt="">
            暂无权限
        </div>
    </div>
</template>
  
<script>

export default {
    name: 'empty',
    data() {
        return {

        }
    },
    mounted() {
    },
    methods: {
        toPage(path) {
            this.$router.push({ path: path });
        }
    }
}
</script>
  
<style lang="scss" scoped>
.empty {
    border-radius: 8px;
    background: #fff;
    min-height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: #a3adb9;

    img {
        margin-bottom: 8px;
        width: 200px;
    }
}
</style>