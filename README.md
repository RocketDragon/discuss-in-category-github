# discuss-in-category-github
A very small tweak to how discussions behave when in categories.

**This content extension is by definition, extremely adhoc, on the premise that it modifies only one specific attribute.**

> User content replacement for github/feedback#2899.

I have come to relise while testing that the script will spam the button update if new nodes are inserted.

The same happens when any hover or click events are emitted that add additional content.

*In light of this, a 100ms throttle has been added to the injection runtime.*

*It is likely to be replaced with a throttle or debounce predicate, if this continues as a side project.*

---

**PLEASE PLEASE PLEASE only use this if you are happy to put up with the lag that this extension may add.**

- This will not be published onto the chrome extension store (or any store for that matter).
- This is not intended to remain as an extension and will likely be archived or deleted once the feature change has taken place.

If you want to install this extension yourself:

- select `Code` at the top of the page and either clone or download as a zip (and extract).
- head over to your browser's extension page
- enable `Developer Mode`
  - Chrome - `chrome:extensions`
  - Opera - `opera:extensions`
  - Edge - `edge:extensions`
  - Firefox - `about:addons`
  - *generally if it's based on chromium, it'll be `{browser}:extensions`*
  - *if you do not see your browser here, please consult the organization responsible for this guidance*  
    A small minority of browsers may not support extensions at all.