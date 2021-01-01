import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { action } from '@storybook/addon-actions';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';
import { FormModule } from 'projects/cyng-oasis/src/lib/form/form.module';
import { I18nModule } from '../i18n.module';

export default {
  title: 'Form',
  excludeStories: 'actions',
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [
        FormModule,
        I18nModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
      ],
    }),
  ],
};

/**
 * Checkbox
 */

export const Checkbox = () => ({
  template: `
    <cyng-checkbox [formControl]="formControl" [isSwitch]="isSwitch" [color]="color" (change)="onChange($event)">{{label}}</cyng-checkbox>
    <br><br>
    formControl.value: {{formControl.value | json}}
  `,
  props: {
    label: text('label', 'Benachrichtigungen empfangen'),
    isSwitch: boolean('isSwitch', true),
    color: text('color', '#ff0033'),
    formControl: new FormControl({ value: true, disabled: false }, [Validators.requiredTrue]),
    onChange: action('onChange'),
  },
});
