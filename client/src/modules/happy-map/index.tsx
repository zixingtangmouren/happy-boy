import { useMount } from 'ahooks';
import styles from './index.module.less';
import { useRef } from 'react';
import { Button, Dropdown } from 'antd';
import data from './data.json';
import AMapLoader from '@amap/amap-jsapi-loader';

function HappyMap() {
  const mapRef = useRef<any>();

  const menuItems = data.map((item) => {
    return {
      key: item.name,
      label: item.name,
      onClick: () => {
        mapRef.current?.setCenter(item.LngLat);
      },
    };
  });

  const initMap = () => {
    return AMapLoader.load({
      key: '7799c82f55e2ad2c062894c45d8d4cad', // 申请好的Web端开发者Key，首次调用 load 时必填
      version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
      plugins: [''], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
    })
      .then((AMap) => {
        return AMap;
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const createMarkers = (AMap: any) => {
    const markerList = data.map((item) => {
      return new AMap.Marker({
        position: item.LngLat,
        title: item.name,
      });
    });

    if (mapRef.current) {
      mapRef.current.add(markerList);
    }
  };

  // const currentPosition = () => {
  //   window.AMap.plugin('AMap.Geolocation', function () {
  //     var geolocation = new window.AMap.Geolocation({
  //       enableHighAccuracy: true, // 是否使用高精度定位，默认：true
  //       timeout: 10000, // 设置定位超时时间，默认：无穷大
  //       offset: [10, 20], // 定位按钮的停靠位置的偏移量
  //       zoomToAccuracy: true, //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
  //       position: 'RB', //  定位按钮的排放位置,  RB表示右下
  //     });

  //     geolocation.getCurrentPosition(function (status: any, result: any) {
  //       if (status == 'complete') {
  //         onComplete(result);
  //       } else {
  //         onError(result);
  //       }
  //     });

  //     function onComplete(data: any) {
  //       // data是具体的定位信息
  //       console.log('定位成功信息：', data);
  //     }

  //     function onError(data: any) {
  //       // 定位出错
  //       console.log('定位失败错误：', data);
  //     }
  //   });
  // };

  useMount(async () => {
    const AMap = await initMap();
    mapRef.current = new AMap.Map('map-container', {
      viewMode: '2D', //是否为3D地图模式
      zoom: 14, //初始化地图级别
      center: [113.335971, 23.178009], //初始化地图中心点位置
    });

    createMarkers(AMap);

    // currentPosition();

    return () => {
      mapRef.current?.destroy();
    };
  });

  return (
    <div className={styles.happyMap}>
      <Dropdown
        menu={{
          items: menuItems,
        }}
      >
        <Button className={styles.happyBtn} size="large">
          快乐列表
        </Button>
      </Dropdown>
      <div id="map-container" />
    </div>
  );
}

export default HappyMap;
