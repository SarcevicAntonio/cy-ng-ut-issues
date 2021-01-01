**Note: This repo started out as a storybook angular starter**

**Note: cy-ts-preprocessor.ts uses other loaders to get working, might be part of the issue** (to-string-loader and html-loader instead of raw-loader)

* run `npm i` then `npm run cy:open`

**2 Issues found:**

* CheckboxComponent: Styles are not showing in cypress
  * should be styled like material toggle / checkbox

* CardComponent: Won't render at all
  * uses cyng-icon that uses InlineSVGComponent 

* run `npm start`to open storybook and see how the components should be renderd