Tento projekt je vytvařen v reactu + typescript.
Jako state management vypral jsem mobx aby napsat miň kodu než bych to bylo v reduxu.
Pro takovou jednoduchou aplikace mohl jsem používat react hooks, ale chtěl jsem ukázat jak to bude vypadat na mobx, a většina velkych aplikace pro globální stav ne používá hooky.

Ui knihovna je materialUI. Taky vypral jsem knihovnu pro slider componentu - swiper, který umožňuje rychle udělat custom slider komponenty.

Napsal jsem rychle unit testy pro mobx, kde otestoval jsem actions a async actions.

2e2 testy ne stihl jsem napsat, ale udělal bych tohle přes cypress.

Udělal jsem init čast, ktera dostava datu (collections a stories) a už pak zobrazí tohle na webu. Do toho budeme vidět loading z material ui.

Napsal jsem taky dtos pro stories a collections.
A chtěl jsem udělat poznamku, že napsal jsem users: unknown, protože ne potřeboval jsem usera, ne chtěl jsem přepisovat všichni vlastnosti ho. A unknown je líp než any.

Psal jsem styly přes makestyles a vypadá to jako css-in-js. Pro kompletně stylovaní lip to psat v jiným css/scss souboru.

Požadavky na api přes axious….jako ve 99% případech
