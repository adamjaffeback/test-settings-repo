import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import { WithFigma } from 'storybook-addon-figma';

import ${NAME} from './${NAME}';


/* =============== */
/* story time <3 */
/* =============== */

export default {
  component: ${NAME},
  decorators: [withKnobs],
  title: '${NAME}',
};

export const Default = () => (
  <WithFigma
    url=""
  >
    <${NAME}
    />
  </WithFigma>
);
