<template>
    <div class="container">
        <div class="page-title">
            资金钱包
        </div>
    </div>
</template>
  
<script>

export default {
    name: 'wallet',
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
</style>
  