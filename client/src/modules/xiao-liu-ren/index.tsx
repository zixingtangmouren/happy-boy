import lottie from 'lottie-web';
import styles from './index.module.less';
import { useRef, useState } from 'react';
import { useMount, useUnmount } from 'ahooks';
import dataJson from './lottie-data.json';

function XiaoLiuRen() {
  const animationRef = useRef<any>();
  const animationEleRef = useRef<HTMLDivElement>(null);
  const [result, setResult] = useState('');

  const isRequestRef = useRef(false);

  useMount(() => {
    animationRef.current = lottie.loadAnimation({
      container: animationEleRef.current as HTMLDivElement,
      renderer: 'svg',
      loop: true,
      autoplay: false,
      animationData: dataJson,
    });
  });

  useUnmount(() => {
    animationRef.current.destroy();
  });

  const start = () => {
    if (isRequestRef.current) return;

    animationRef.current.play();
    isRequestRef.current = true;
    fetch('/apis/xiao-liu-ren')
      .then((res) => res.json())
      .then((res) => {
        if (res.result) {
          setTimeout(() => {
            setResult(res.result);
          }, 2000);
        }
      });
  };

  return (
    <div className={styles.xiaoLiu} onClick={start}>
      <div ref={animationEleRef} className={styles.animateContainer} />
      <p className={styles.text}>{result ? result : '点击蓝色球体测量运势'} </p>
    </div>
  );
}

export default XiaoLiuRen;
