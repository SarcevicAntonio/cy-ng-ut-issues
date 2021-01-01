## This repo is only for a "bahmutov/cypress-angular-unit-test" issue.


**Note: This repo started out as a storybook angular starter**

* run `npm i`

* then `npm run cy:open` to run the tests

* run `npm start`to open storybook and see how the components should be rendered

**2 Issues found:**

* CheckboxComponent: Styles are not showing in cypress
  * should be styled like material toggle / checkbox

* CardComponent: Won't render at all
  * uses InlineSVGComponent which throws an error: `Can't resolve all parameters for InlineSVGComponent: (?, ?).`

**Note:** I had to change cy-ts-preprocessor.ts to use other loaders because it wasn't working with the default setup... might be part of the issue (to-string-loader and html-loader instead of raw-loader)

component source files are under `/projects/cyng-oasis/src/lib/...`,
spec files are with the components (e.g. `.../card/card.component.spec.ts`).

the `/src/` folder is used by storybook.

