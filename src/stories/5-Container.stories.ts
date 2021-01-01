import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { action } from '@storybook/addon-actions';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';
import { OasisModule } from 'projects/cyng-oasis/src/public-api';
import { I18nModule } from 'src/i18n.module';
import { lorem100 } from 'src/lorem';

export default {
  title: 'Container',
  decorators: [
    withKnobs,
    moduleMetadata({
      declarations: [],
      imports: [
        OasisModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        I18nModule,
      ]
    })
  ]
};

/**
 * cyng-Card
 */

export const Card = () => ({
  template: `
  <cyng-card [dismissable]="dismissable" [loading]="loading">
  <h2 class="m8">{{headline}}</h2>
    <p>{{paragraph}}</p>
  </cyng-card>`,
  props: {
    dismissable: boolean('dismissable', true),
    headline: text('headline', 'Headline'),
    paragraph: text('paragraph', lorem100),
    loading: boolean('loading', false),
  }
});

export const CardHeaderAction = () => ({
  template: `
  <cyng-card [actionLabel]="actionLabel" (action)="onAction($event)" [loading]="loading">
  <h2 class="m8">{{headline}}</h2>
    <p class="m8">{{regularText}}</p>
    <p class="m8">{{paragraph}}</p>
  </cyng-card>`,
  props: {
    onAction: action('onAction'),
    actionLabel: text('actionLabel', 'Add variant'),
    headline: text('headline', 'Variants'),
    regularText: text('regularText', 'This is an example of a card with a header action. For example this could be a card with multiple items and the header action creates a new item or something. View Actions tab below for output events.'),
    paragraph: text('paragraph', lorem100),
    loading: boolean('loading', false),
  }
});

export const CardMedia = () => ({
  template: `
  <cyng-card [img]="img" [alt]="alt" [dismissable]="dismissable" [loading]="loading" style="width: 480px;">
  <h2 class="m8">{{headline}}</h2>
  <p class="m8">{{regularText}}</p>
  <p class="m8">{{paragraph}}</p>
  </cyng-card>`,
  props: {
    img: text('img', 'https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2020/01/q3V3Xe3-796x531.jpg'),
    alt: text('alt', 'everyones favorite stock photo model'),
    headline: text('headline', 'Media Card'),
    regularText: text('regularText', 'This is an example of a card with an image.'),
    paragraph: text('paragraph', lorem100),
    dismissable: boolean('dismissable', false),
    loading: boolean('loading', false),
  }
});

export const CardExpandalbe = () => ({
  template: `
  <cyng-card [title]="headline" [expandable]="true" [dismissable]="dismissable" [loading]="loading">
    {{paragraph}}
  </cyng-card>`,
  props: {
    dismissable: boolean('dismissable', true),
    headline: text('headline', 'Expand Me!'),
    paragraph: text('paragraph', lorem100),
    loading: boolean('loading', false),
  }
});
