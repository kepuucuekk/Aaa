ARYA TRADING JOURNAL V5.3 — AURORA REFERENCE

This release is built on the functional V5.0 app and keeps its existing
trade data schema, localStorage key, journal forms, calendar, analytics,
tools, risk calculator, backup/restore and PWA behavior.

Visual work:
- Rebuilt the metallic ARYA monogram and header composition.
- Added layered candle-bar / diagonal background ornamentation.
- Recreated the crown and settings controls as detailed SVG icons.
- Reworked the P/L + Win Rate card, corner light effects and typography.
- Reworked the four compact dashboard metric cards to match the reference:
  Total Trades, Best Trade, This Month, Avg R/R.
- Rebuilt the Equity Curve panel and empty-state grid.
- Reworked the Catat Trade CTA, Recent Journal card and bottom navigation.

Data integrity:
- Best Trade and This Month are calculated from actual saved trades.
- No sample trades or fake profit figures are inserted.
- Existing LocalStorage key and trade records are retained.

Install:
1. Export a JSON backup from Tools first.
2. Extract this ZIP.
3. Upload the contents of arya_trading_journal_v4/ to the ROOT of the SAME
   GitHub Pages repository, replacing existing files.
4. Commit and wait for Pages to publish.
5. Force-close the Home Screen app and reopen it.
6. Keep the same site URL and do not clear Safari website data.


V5.4 MIDNIGHT AURORA POLISH
- Reconstructed dashboard styling closer to the supplied ARYA reference.
- Refined header, neon geometric summary, stat cards, equity panel and navigation icons.
- Fixed empty Equity Curve rendering and added real-data chart grid/gradient/markers.
- Existing trade records, local storage key, and core workflows are retained.


V5.15 REFERENCE LOCK
- Reasserted the exact reference header artwork as a single image asset.
- Locked mobile dashboard card proportions and dark navy/black palette to the supplied reference.
- Added service-worker cache version bump and precached reference-header.jpg to prevent stale CSS/artwork.
- Presentation-only changes; existing trade data, calculations, storage keys, forms, and navigation logic are preserved.


V5.16 PATCH
- Fixes the missing/blank dashboard header by embedding the exact reference-header artwork directly into the page CSS.
- Updates the service-worker cache name so the new build is fetched.
- No trade calculations, storage keys, DOM IDs, or event handlers were changed.
