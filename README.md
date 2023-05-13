## 立ち上げ

- 前提条件としてこのリポジトリを clone していること

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

**_npm pnpm を極力使わず、yarn で統一する_**

## ディレクトリ構成

Todo:

## 作業前にやること

husky の設定を行う

```bash
yarn prepare
```

Editor の設定を行う eslint prettier

# Coding rule

css 名が被らないように css のクラス名はにしています。

```css
.component_name--class
```

## その他

Pref は Preference の略です。県の略称としてこのプロジェクト全体で使用します
