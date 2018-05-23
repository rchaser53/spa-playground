import Vue from 'vue';

import { storiesOf } from '@storybook/vue';
import Parent from './parent';

class StoryBookHandler {
  add(componentName: string, addStories) {
    this[componentName] = storiesOf(componentName, module);
    addStories(this[componentName]);
    return this;
  }
}
const storyBookHandler = new StoryBookHandler();
storyBookHandler.add('Parent', Parent);
