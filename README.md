[![Coverage Status](https://coveralls.io/repos/github/kawabata324/yumemi-frontend-coding-test/badge.svg?branch=main)](https://coveralls.io/github/kawabata324/yumemi-frontend-coding-test?branch=main)

# Yumemi Frontend Coding Test

## ⚡️ Quickstart

リポジトリをクローン

```bash
git clone https://github.com/kawabata324/yumemi-frontend-coding-test.git
```

Package の Install

```bash
yarn
```

環境変数の設定

```bash
cp .env.example .env.local
```

開発環境の立ち上げ

```bash
yarn dev
```

## 🧑‍💻Before Task Start

husky の設定を行う

```bash
yarn prepare
```

eslint と prettier の設定をお使いの Editor で行う

## 👩‍💻Commit Rule

Prefix をつけて commit する

##### 🐛 バグ修正

##### ✨ 機能追加

##### 🎨 codeの構造変更

##### 🚧 WIP

##### 📝 文言修正

##### ♻️ リファクタリング

##### 🔥 不要な機能・使われなくなった機能の削除

##### 🧪 テストの追加

##### 📦 依存パッケージなどの Install

##### 🔨 config 変更

##### 💄 デザイン変更

例:

```bash
:lipstick: ログイン画面画面のボタンの幅を18pxに修正
```

gitmoji を使うと便利です

- https://marketplace.visualstudio.com/items?itemName=seatonjiang.gitmoji-vscode vscode
- https://plugins.jetbrains.com/plugin/12383-gitmoji-plus-commit-button webstorm

# CSS Rule

css 名が被らないように css のクラスは以下のように作ってください

```css
.component_name--class
```

## 🧪Test

jest の実行

```bash
yarn test --coverage
```

カバレッジレポートを Web で見る

```bash
 open coverage/lcov-report/index.html
```

storybook からアクセシビリティの確認

```bash
yarn storybook
```

Preview Mode からアクセシビリティの確認

## 📚 その他

「Pref」 は 「Preference」 の略です。
日本の県の略称としてこのプロジェクト全体で使用します
