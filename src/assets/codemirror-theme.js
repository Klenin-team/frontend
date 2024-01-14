// This is just codemirror demo color theme with hex color codes changed to catppuccin macchiato colors
// Base code taken from https://github.com/codemirror/theme-one-dark/blob/main/src/one-dark.ts
import {EditorView} from "@codemirror/view"
import {HighlightStyle, syntaxHighlighting} from "@codemirror/language"
import {tags as t} from "@lezer/highlight"

const rosewater = "#f4dbd6",
  flamingo = "#f0c6c6",
  pink = "#f5bde6",
  mauve = "#c6a0f6",
  red = "#ed8796",
  maroon = "#ee99a0",
  peach = "#f5a97f",
  yellow = "#eed49f",
  green = "#a6da95",
  teal = "#8bd5ca",
  sky = "#91d7e3",
  sapphire = "#7dc4e4",
  blue = "#8aadf4",
  lavender = "#b7bdf8",
  text = "#cad3f5",
  subtext1 = "#b8c0e0",
  subtext0 = "#a5adcb",
  overlay2 = "#939ab7",
  overlay1 = "#8087a2",
  overlay0 = "#6e738d",
  surface2 = "#5b6078",
  surface1 = "#494d64",
  surface0 = "#363a4f",
  base = "#24273a",
  mantle = "#1e2030",
  crust = "#181926"

/// The colors used in the theme, as CSS color strings.
export const color = {
  rosewater,
  flamingo,
  pink,
  mauve,
  red,
  maroon,
  peach,
  yellow,
  green,
  teal,
  sky,
  sapphire,
  blue,
  lavender,
  text,
  subtext1,
  subtext0,
  overlay2,
  overlay1,
  overlay0,
  surface2,
  surface1,
  surface0,
  base,
  mantle,
  crust
}

/// The editor theme styles for One Dark.
export const catppuccinTheme = EditorView.theme({
  "&": {
    color: text,
    backgroundColor: surface0
  },

  ".cm-content": {
    fontFamily: "JetBrains Mono",
    caretColor: text
  },

  ".cm-cursor, .cm-dropCursor": {borderLeftColor: overlay1},
  "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {backgroundColor: surface2},

  ".cm-panels": {backgroundColor: mantle, color: subtext0},
  ".cm-panels.cm-panels-top": {borderBottom: "2px solid black"},
  ".cm-panels.cm-panels-bottom": {borderTop: "2px solid black"},

  ".cm-searchMatch": {
    backgroundColor: overlay1,
    outline: "1px solid #cad3f5"
  },
  ".cm-searchMatch.cm-searchMatch-selected": {
    backgroundColor: "#f5a97f2f"
  },

  ".cm-activeLine": {backgroundColor: surface1},
  ".cm-selectionMatch": {backgroundColor: "#aafe661a"},

  "&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket": {
    backgroundColor: surface2
  },

  ".cm-gutters": {
    backgroundColor: surface0,
    color: subtext0,
    border: "none"
  },

  ".cm-activeLineGutter": {
    backgroundColor: surface0
  },

  ".cm-foldPlaceholder": {
    backgroundColor: "transparent",
    border: "none",
    color: "#ddd"
  },

  ".cm-tooltip": {
    border: "none",
    backgroundColor: overlay0
  },
  ".cm-tooltip .cm-tooltip-arrow:before": {
    borderTopColor: "transparent",
    borderBottomColor: "transparent"
  },
  ".cm-tooltip .cm-tooltip-arrow:after": {
    borderTopColor: overlay0,
    borderBottomColor: overlay0
  },
  ".cm-tooltip-autocomplete": {
    "& > ul > li[aria-selected]": {
      backgroundColor: overlay0,
      color: lavender
    }
  }
}, {dark: true})

/// The highlighting style for code in the One Dark theme.
export const catppuccinHighlightStyle = HighlightStyle.define([
  {tag: t.keyword,
   color: red},
  {tag: [t.name, t.deleted, t.character],
   color: text},
  {tag: [t.propertyName, t.macroName],
    color: teal},
  {tag: [t.function(t.variableName), t.labelName],
   color: blue},
  {tag: [t.color, t.constant(t.name), t.standard(t.name)],
   color: text},
  {tag: [t.definition(t.name), t.separator],
   color: blue},
  {tag: [t.typeName, t.className, t.number, t.changed, t.annotation, t.modifier, t.self, t.namespace],
   color: peach},
  {tag: [t.operator, t.operatorKeyword, t.url, t.escape, t.regexp, t.link, t.special(t.string)],
   color: sky},
  {tag: [t.meta, t.comment],
   color: subtext0},
  {tag: t.strong,
   fontWeight: "bold"},
  {tag: t.emphasis,
   fontStyle: "italic"},
  {tag: t.strikethrough,
   textDecoration: "line-through"},
  {tag: t.link,
   color: blue,
   textDecoration: "underline"},
  {tag: t.heading,
   fontWeight: "bold",
   color: lavender},
  {tag: [t.atom, t.bool, t.special(t.variableName)],
   color: lavender },
  {tag: [t.processingInstruction, t.string, t.inserted],
   color: green},
  {tag: t.invalid,
   color: maroon},
])

/// Extension to enable the One Dark theme (both the editor theme and
/// the highlight style).
export const catppuccin = [catppuccinTheme, syntaxHighlighting(catppuccinHighlightStyle)]

