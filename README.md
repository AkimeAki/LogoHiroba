# URL

https://logo.aki.wtf/

# 開発環境

## コマンド

### 開発サーバー起動

`npm run dev`

URL: http://localhost:8001/

## ツール

### 必須

-   Docker

### あると便利

-   Make

## 環境立ち上げ

1. コンテナ起動

    `make init`

2. コンテナにアタッチ

    `make attach`

3. 依存関係インストール

    `npm ci`

## コンテンツ管理

### ロゴに関するデータ

-   [Astroのコンテンツコレクション](https://docs.astro.build/ja/guides/markdown-content/#コンテンツコレクション)機能でロゴを管理

    `src/content/logos/<ユニークなID>.md`

-   形式は`src/sample.md`を参照

### 画像

-   PNG形式で管理
-   コンテンツコレクションのMarkdownにつけたユニークなIDと同名のpngファイルで管理

    `src/assets/logos/<ユニークなID>.png`
