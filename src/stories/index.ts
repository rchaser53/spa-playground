import Vue from 'vue';

import { storiesOf } from '@storybook/vue';
import {
  ParentA,
  ParentB,
} from './parent';


storiesOf('Parent', module)
  .add('render parentA', () => ({
    components: { ParentA },
    template: '<parent-a></parent-a>'
  }))
  .add('render ParentB', () => ({
    components: { ParentB },
    template: '<parent-b></parent-b>'
  }))
