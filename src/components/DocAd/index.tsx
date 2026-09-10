import React, {useEffect} from 'react';

import styles from './styles.module.css';

type AdSenseWindow = Window & {
  adsbygoogle?: unknown[];
};

export default function DocAd(): JSX.Element {
  useEffect(() => {
    const adsenseWindow = window as AdSenseWindow;
    adsenseWindow.adsbygoogle = adsenseWindow.adsbygoogle || [];
    adsenseWindow.adsbygoogle.push({});
  }, []);

  return (
    <div className={styles.container} aria-label="Advertisement">
      <ins
        className="adsbygoogle"
        style={{display: 'block'}}
        data-ad-client="ca-pub-3936883179210897"
        data-ad-slot="9166877410"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
