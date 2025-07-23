[Live Demo](https://nickmccarty.me/OHOH-site-redesign)

# Directory Structure/Contents

```
`OHOH-site-redesign`
|
│   about.html
│   contact.html
│   index.html
│   news.html
│   partners.html
│   privacy.html
│   programs.html
│   README.md
│   resources.html
│
├───components
│       footer.css
│       footer.html
│       footer.js
│       header.css
│       header.html
│       header.js
│
└───static
    ├───css
    │       about.css
    │       contact.css
    │       home.css
    │       news.css
    │       partners.css
    │       privacy.css
    │       programs.css
    │       resources.css
    │       root.css
    │
    ├───data
    │       latest-posts.csv
    │       news.csv
    │       partners.csv
    │
    ├───images
    │       about-banner.png
    │       art-inside-out-logo.png
    │       art-inside-out-program.png
    │       better-neighbors-logo.png
    │       better-neighbors-program.png
    │       blanchet-house-logo.png
    │       bybee-lakes-hope-center-logo.png
    │       city-of-portland-logo.png
    │       city-team-logo.png
    │       contact-banner.jpg
    │       cultivate-initiatives-logo.png
    │       cultivate-initiatives-program.png
    │       fathers-heart-logo.png
    │       going-home-logo.png
    │       homeless-solutions-coalition.png
    │       homer-williams-2.jpg
    │       homer-williams-2.png
    │       homer-williams-3.png
    │       homer-williams.png
    │       homeshare-logo.png
    │       homeshare-program.png
    │       impact-nw-logo.png
    │       kids-speak-out-logo.png
    │       kids-speak-out-program.png
    │       kirk-charlton.png
    │       matthew-bordonaro.png
    │       news-banner.jpg
    │       OHOH_hero_image_1.png
    │       partners-banner.png
    │       partnership-for-progress-logo.png
    │       patrizia-montanari.png
    │       PDX_cityscape.png
    │       portland-city-seal.png
    │       portland-rescue-mission-logo.png
    │       post_1.png
    │       post_2.png
    │       post_3.png
    │       post_4.png
    │       privacy-banner.jpg
    │       programs-banner.png
    │       resources-banner.jpg
    │       river-district-navigation-center-program.png
    │       robin-davidson.png
    │       rose-haven-logo.png
    │       salvation-army-logo.png
    │       sister-maura.png
    │       team.jpg
    │       union-gospel-mission-logo.png
    │       urban-alchemy-logo.png
    │       vision-and-values-section.png
    │       we-shine-logo.png
    │
    └───js
            contact.js
            inject.js
            news.js
            partners.js
```

# Dependencies

- **External JS Libraries**:
  - [PapaParse](https://www.papaparse.com/): For parsing CSVs.
  - [Firebase](https://firebase.google.com/docs/web/setup): Used in contact form handling to record/forward submissions.
  - All external scripts (Firebase, PapaParse) load via CDN.