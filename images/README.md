# Images folder

Drop real files into these folders using the exact names below — the site
already knows to look for them (see IMG_PATHS in index.html) and falls back
to the current placeholder pattern for anything missing, so nothing breaks
while you fill this in gradually.

commissions/gallery/<formatoKey>/<finalKey>/1.jpg .. 4.jpg
    4 example images per finalização tier. Used in TWO places from the same
    files:
      - the commission config modal's gallery (changes when you switch
        Finalização in the dropdown)
      - the front-page card thumbnail, which slowly crossfades through
        image "1.jpg" of each finalização tier that exists — so the card
        preview always matches what "Click to configure" leads to.
    Folders already created for every valid formatoKey/finalKey combination
    that exists in DATA (see the commissions/gallery/README.md for the list).

portfolio/thumbs/<n>.jpg
    Small/optimized image for portfolio grid item n (1, 2, 3...). Keep these
    light — they all load on the Portfolio tab at once.

portfolio/fulls/<n>.jpg
    Full-size image for the same item n, only loaded when its lightbox opens.

avatar/avatar.jpg
    Header avatar (circle).

hero/hero.jpg
    Header background art.

Recommended: JPG for photos/painted work, under ~300KB for thumbs/gallery and
under ~1.5MB for fulls, to keep the site fast on mobile.
