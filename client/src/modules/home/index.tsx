import { useNavigate } from 'react-router-dom';
import lottie from 'lottie-web';
import { useMount, useUnmount } from 'ahooks';
import { useRef } from 'react';
import dataJson from './lottie-data.json';
import styles from './index.module.less';
import { Button } from 'antd';

function Home() {
  const navigate = useNavigate();

  const animationRef = useRef<any>();
  const animationEleRef = useRef<HTMLDivElement>(null);

  useMount(() => {
    animationRef.current = lottie.loadAnimation({
      container: animationEleRef.current as HTMLDivElement,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: dataJson,
    });
    animationRef.current.setSpeed(1.5);
  });

  useUnmount(() => {
    animationRef.current.destroy();
  });

  return (
    <div className={styles.home}>
      <div ref={animationEleRef} className={styles.animateContainer} />
      <h1 className={styles.title}>Happy Boy</h1>
      <div className={styles.happyList}>
        <Button
          size="large"
          onClick={() => {
            navigate('/xiao-liu-ren');
          }}
        >
          小六壬
        </Button>
        <Button
          size="large"
          onClick={() => {
            navigate('/happy-map');
          }}
        >
          快乐地图
        </Button>
        <Button size="large" disabled>
          快乐搜索
        </Button>
        <Button size="large" disabled>
          快乐网盘
        </Button>
      </div>
    </div>
  );
}

export default Home;
