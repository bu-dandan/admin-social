<template>
    <div class="container">
        <div class="page-title">
            账户报表
        </div>
        <div class="empty">
            <img src="@/assets/images/permi.png" alt="">
            暂无权限
        </div>
    </div>
</template>
  
<script>

export default {
    name: 'account',
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
.page-title {
    width: 100%;
    border-radius: 8px;
    background: #fff;
    padding: 0 24px;
    line-height: 64px;
    font-size: 18px;
    font-weight: 700;
}

.empty {
    border-radius: 8px;
    background: #fff;
    min-height: calc(100vh - 160px);
    margin-top: 16px;
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