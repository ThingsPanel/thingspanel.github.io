import React, {type ReactNode} from 'react';

import DocAd from '@site/src/components/DocAd';
import DocItemContent from '@theme-original/DocItem/Content';
import type {Props} from '@theme/DocItem/Content';

export default function DocItemContentWithAd(props: Props): ReactNode {
  return (
    <>
      <DocItemContent {...props} />
      <DocAd />
    </>
  );
}
