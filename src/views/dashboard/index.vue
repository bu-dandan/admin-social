<template>
  <div class="container">
    <div class="top-data">
      <Review class="review-data"></Review>
      <Change class="change-data"></Change>
    </div>
    <div class="other-data">
      <MinChart class="other-item" title="用户留存趋势" id="user1" type="line"></MinChart>
      <div>
        <h1>用户留存量</h1>
        <div></div>
      </div>
      <div>
        <h1>付费趋势</h1>
        <div></div>
      </div>
      <div>
        <h1>付费量</h1>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
import Review from './components/Review'
import Change from './components/Change'
import MinChart from './components/MinChart'

export default {
  name: 'index',
  components: {
    Review, Change, MinChart
  },

  data() {
    return {
      date: [],
    }
  },
  mounted() {
  },

  computed: {


  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.top-data {
  display: flex;
  margin-bottom: 28px;

  .review-data {
    width: 60%;
    max-width: 800px;
    min-width: 760px;
  }

  .change-data {
    flex: 1;
  }
}

.other-data {
  display: flex;
  justify-content: space-between;

  .other-item {
    width: 25%;
  }
}
</style>
