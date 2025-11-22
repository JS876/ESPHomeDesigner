# Release Notes - v0.4.2

## 🚀 Enhancements

- **Graph Widget Automation**:
  - Automatically populates `min_value` and `max_value` settings when a sensor with `min`/`max` attributes or `%` unit is selected.
  - New graph widgets now default to `continuous: true` for smoother lines.
- **Circle Aspect Ratio**:
  - The editor now enforces a 1:1 aspect ratio for Circle widgets during resize, preventing the creation of unsupported ellipses.

## 🐛 Bug Fixes

- **Page Jump Fix**: Resolved an issue where the editor would reset to the first page after updating the layout from YAML. It now preserves your current page view.
- **Graph Persistence**: Fixed a bug where the `Continuous` line setting for graphs was not saving correctly to YAML. It now persists round-trip.
- **Weather Text Color**: Fixed an issue where the text color of Weather widgets would revert to black after a layout update.

## 📝 Notes

- **Ellipse Support**: Native ellipse drawing is not supported by the ESPHome display component. A Proof of Concept for custom lambda-based ellipse drawing is available in the documentation if needed.
- **Dithered Area Charts**: Native support for filled/dithered area charts is currently unavailable in ESPHome.
