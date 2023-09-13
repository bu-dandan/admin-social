<template>
    <div>
        <h1>数据总览</h1>
        <div class="flex-row">
            <div class="review-item">
                <h2>动态生产量</h2>
                <div class="flex-row">
                    <img src="@/assets/images/icon-edit.png" alt="">
                    <span>{{ formatNum(1902) }}</span>
                </div>
            </div>
            <div class="review-item">
                <h2>注册用户</h2>
                <div class="flex-row">
                    <img src="@/assets/images/icon-approve.png" alt="">
                    <span>{{ formatNum(2445) }}</span>
                </div>
            </div>
            <div class="review-item">
                <h2>新会员数</h2>
                <div class="flex-row">
                    <img src="@/assets/images/icon-like.png" alt="">
                    <span>{{ formatNum(3056) }}</span>
                </div>
            </div>
            <div class="review-item">
                <h2>充值金额</h2>
                <div class="flex-row">
                    <img src="@/assets/images/icon-user.png" alt="">
                    <span>{{ formatNum(688) }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>

export default {
    name: 'Review',
    props: {
    },
    data() {
        return {
            date: [],
        }
    },
    mounted() {
    },
    methods: {
        formatNum(num) {
            const numStr = num.toString().split('.'); //先转为字符串，再分开整数和小数部分
            let numInt = numStr[0]; // 整数部分
            let numDec = numStr.length > 1 ? '.' + numStr[1] : ''; // 小数部分，只有原数字存在小数点的时候，分割完长度才会大于1
            let resultInt = ''; //存储整数部分处理结果
            while (numInt.length > 3) {     //当剩余整数部分长度大于3时继续处理
                resultInt = ',' + numInt.slice(-3) + resultInt;  //把后三位截出来，和处理结果拼在一起，前面加逗号
                numInt = numInt.slice(0, -3); // 剩下的部分是除去刚刚截掉的3位的部分
            }
            return numInt + resultInt + numDec; //结果是“剩余的不足3位的整数”+“处理好的整数结果”+“小数部分”
        }
    }
}
</script>
  
<style lang="scss" scoped>
.review-item {
    width: 25%;

    img {
        width: 32px;
        height: 32px;
        margin-right: 8px;
    }

    span {
        font-size: 24px;
        font-weight: 500;
    }
}
</style>
  