'use strict';

module.exports = {
  extends: 'stylelint-config-standard',
  'plugins': [
    'stylelint-scss'
  ],
  rules: {
    'at-rule-no-unknown': null, // Handled by stylelint-scss at-rule-no-unknown
    'color-hex-length': 'long',
    'color-named': 'never',
    'declaration-no-important': true,
    'max-nesting-depth': 3,
    'no-eol-whitespace': [
      true,
      {
        ignore: ['empty-lines']
      }
    ],
    'selector-list-comma-newline-after': 'always',
    'selector-max-id': 0,
    'selector-class-pattern': [
      /^((row)|(col-.*)|(spacing-.*)|((\.?[cel]-)([a-z][a-z]+(-([a-z]+|[0-9]+))*)(__[a-z][a-z]+(-([a-z]+|[0-9]+))*)?(--[a-z][a-z]+(-([a-z]+|[0-9]+))*)?(:{1,2}[a-z][a-z]+(-[a-z0-9]+)*(\(["a-z0-9]+\))?)?))+$/m,
      {
        resolveNestedSelectors: true
      }
    ],
    'scss/at-rule-no-unknown': true
  }
};

/**
 * BEM pattern
 *
 * fixedValue = .row | .col-.* | .spacing-.*
 * bemName = Namespace Block (Element)? (MODIFIER)? (Pseudo)? | Fixed-Value
 * Pattern = fixedValue | bemName
 * Namespace = .[cel]-
 * Block = [a-z]char+(-charOrNum+)*
 * Element = __Block (BEM Name)?
 * Modifier = --Block
 * Pseudo = :Block(\([":a-z0-9]+\))?
 * char = [a-z0-9]
 * charOrNum = ([a-z]+|[0-9]+)
 *
 * ^((row)|(col.*)|((\.?[cel]-)([a-z][a-z]+(-([a-z]+|[0-9]+))*)(__[a-z][a-z]+(-([a-z]+|[0-9]+))*)?(--[a-z][a-z]+(-([a-z]+|[0-9]+))*)?(:{1,2}[a-z][a-z]+(-[a-z0-9]+)*(\(["a-z0-9]+\))?)?))+$
 *
 *
 * valid
 c-block
 c-block:hover
 c-block-foo
 c-block-foo:first-child
 c-block--foo
 c-block--foo:focus
 c-block__element
 c-block__element:nth-child(5)
 c-block__element--modifier
 c-block__element--modifier-foo
 c-block__element--modifier-foo-baa
 c-block.c-block
 c-block__element.c-block
 c-block__element.c-block__element
 c-block__element--modifier.c-block
 c-block__element--modifier.c-block__element
 c-block__element--modifier.c-block__element--modifier
 c-block-name-foo-baa
 c-block__element-name-foo
 c-block-name-foo-baa__element-name-foo
 c-main-content__content.c-main-content__content--main-navigation-open
 c-advertisement-1
 c-advertisement__element-1
 c-advertisement__element--modifier-1
 c-advertisement-1__element
 c-advertisement__element-1--modifier
 c-advertisement-1__element-1--modifier-1
 row
 col-6

 * invalid
 foo
 align--left
 c-block---foo
 c-block--element--foo
 c-block__element__element
 cc-foo
 c-block__element__element.c-block
 c-block__element.c-block__element__element
 c-block__element--modifier--modifier.c-block
 c-block__element--modifier.c-block__element--modifier--modifier
 c-advertisement1
 c-advertisement__element1
 c-advertisement__element--modifier1

 *
 **/
