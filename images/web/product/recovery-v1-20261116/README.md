# Recovery product captures — 16 November 2026

Unchanged 1206×2622 iPhone 17 simulator screenshots from Athlon's DEBUG recovery
fixtures. The fixture JSON contains seeded recovery-engine responses; the native
fixture shifts their timestamps to capture time. No customer account data was used.

`originals/` retains the PNG captures. Each has four responsive WebP variants,
prepared by `athlon-web/scripts/prepare-product-image.py` (resizing and encoding only).
The website supplies the existing registered iPhone 17 frame separately.

`capture.json` records the source commit, simulator, launch flags and fixture mapping.
The native working tree also contained unrelated chat and legal changes at capture;
no native source was edited for these screenshots. Build: Debug, Athlon scheme,
Xcode iPhone 17 destination, without a global SDK override.

Reproduce with `athlon-web/scripts/capture-recovery.py`; it waits for each fixture
with macOS Vision OCR, hides the debug overlay, standardises the OS status bar,
and clears the status-bar override afterward. Use a NEW versioned directory for
another batch: these CDN files are immutable.

This batch covers readiness, the muscle map, hamstring detail, the three-day timeline,
the seven-day forecast, a saved-workout preview, data quality and two check-in steps.
