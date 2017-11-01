### Gilded Rose
## Refactoring kata (the javascript version)

This is my attempt at the lauded/dreaded gilded rose refactoring kata in javascript. Rather than deep modular abstraction I focussed on building a well constructed class with simple readable methods which hold responsibility for their own items. The exercise has 15 passing tests which were written before the refactor in order to ensure that functionality remained the same.

# Design choices

Due to the instruction not to touch the Item class I decided to stick with the ES6 class oriented design patterns demonstrated by the code owners and instead abstract the complex function into 5 functions. This is a simple solution that I will aim to do more work on in the future.

# Testing

All tests are run in Jasmine and can be found in the spec folder. To run the tests open the SpecRunner.html file in the root directory.
