<template>
  <div id="myMap"></div>
</template>

<script>
export default {
  name: 'baiduMap',
  mounted() {
    this.loadScript()
  }, methods: {
    loadScript: function () {
      let script = document.createElement("script");
      script.src = "https://api.map.baidu.com/api?v=1.0&type=webgl&ak=y7khQNoA6vjPweZc6RMveIWRBwyuVEQQ&callback=initialize";
      script.onload = () => {
        this.initMap()
      }
      document.body.appendChild(script)
    }, initMap: function () {
      let Bmap = window.BMap
      let map = new Bmap.Map('myMap'); // 创建Map实例
      map.centerAndZoom(new BMapGL.Point(116.404, 39.915), 12); // 初始化地图,设置中心点坐标和地图级别
      map.setCurrentCity('南京')
      map.enableScrollWheelZoom(true);
    }
  }
}
</script>

<style scoped>

</style>
