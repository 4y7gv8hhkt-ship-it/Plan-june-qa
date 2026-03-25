# Playwright Login Test

SauceDemo のログイン機能を対象にした、Playwright + TypeScript の学習用自動テストです。
POM（Page Object Model）でログイン画面の操作を分離し、ログイン成功後に inventory ページへ遷移することを確認します。

## 使用技術
- Playwright
- TypeScript
- Node.js

## 実行方法
1. npm install
2. npx playwright test

## 構成
- tests/login.test.ts
- pages/LoginPage.ts

## 確認観点
- ユーザー名入力
- パスワード入力
- ログインボタン押下
- ログイン成功後のURL確認

## 今後の改善点
- ログイン失敗ケースの追加
- README内容の改善
- テスト観点の追加