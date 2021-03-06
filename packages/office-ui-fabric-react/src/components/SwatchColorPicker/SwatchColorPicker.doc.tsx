import * as React from 'react';
import { SwatchColorPickerBasicExample } from './examples/SwatchColorPicker.Basic.Example';

import { IDocPageProps } from '../../common/DocPage.types';
import { SwatchColorPickerStatus } from './SwatchColorPicker.checklist';

const SwatchColorPickerBasicExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/SwatchColorPicker/examples/SwatchColorPicker.Basic.Example.tsx') as string;

export const SwatchColorPickerPageProps: IDocPageProps = {
  title: 'SwatchColorPicker',
  componentName: 'SwatchColorPicker',
  componentUrl:
    'https://github.com/OfficeDev/office-ui-fabric-react/tree/master/packages/office-ui-fabric-react/src/components/SwatchColorPicker',
  componentStatus: SwatchColorPickerStatus,
  examples: [
    {
      title: 'SwatchColorPicker',
      code: SwatchColorPickerBasicExampleCode,
      view: <SwatchColorPickerBasicExample />
    }
  ],
  propertiesTablesSources: [
    require<string>('!raw-loader!office-ui-fabric-react/src/components/SwatchColorPicker/SwatchColorPicker.types.ts')
  ],
  overview: require<
    string
  >('!raw-loader!office-ui-fabric-react/src/components/SwatchColorPicker/docs/SwatchColorPickerOverview.md'),
  bestPractices: '',
  dos: require<
    string
  >('!raw-loader!office-ui-fabric-react/src/components/SwatchColorPicker/docs/SwatchColorPickerDos.md'),
  donts: require<
    string
  >('!raw-loader!office-ui-fabric-react/src/components/SwatchColorPicker/docs/SwatchColorPickerDonts.md'),
  isHeaderVisible: true,
  isFeedbackVisible: true
};
