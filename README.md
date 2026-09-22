# React-Router-ReplaceNavigationApp

`useNavigate`の`replace: true`を使って、ログイン成功後にLoginページをブラウザ履歴から置き換えるReact Routerの練習アプリです。

## 目次

* [概要](#概要)
* [学習目標](#学習目標)
* [課題内容](#課題内容)
* [ページ構成](#ページ構成)
* [画面遷移](#画面遷移)
* [実装のポイント](#実装のポイント)
* [プロジェクト構成](#プロジェクト構成)
* [インストール](#インストール)
* [起動](#起動)
* [使用技術](#使用技術)

## 概要

ログインページからDashboardページへ移動するログイン処理を想定したReact Routerの練習アプリです。

通常の`navigate("/dashboard")`では、Loginページがブラウザの履歴に残ります。

そのため、Dashboardページでブラウザの「戻る」を押すとLoginページへ戻ってしまいます。

この課題では`replace: true`を使用して、Loginページをブラウザの履歴から置き換えます。

## 学習目標

* `useNavigate`の使い方を理解する
* `navigate()`によるプログラムからの画面遷移を理解する
* `replace: true`の動作を理解する
* ブラウザ履歴を意識した画面遷移を理解する

## 課題内容

以下のページを作成してください。

```text
/login       → Login
/dashboard   → Dashboard
```

Loginページには「ログイン」ボタンを配置します。

「ログイン」ボタンをクリックすると、`/dashboard`へ移動します。

このとき、`replace: true`を使用してください。

```tsx
navigate("/dashboard", { replace: true });
```

Dashboardページでブラウザの「戻る」を押しても、Loginページへ戻らないようにします。

## ページ構成

```text
/login
  ↓
ログインボタン
  ↓
/dashboard
```

通常の画面遷移では、

```text
Login → Dashboard
```

となります。

`replace: true`を使用すると、ブラウザ履歴は概念的に以下のようになります。

```text
replace: false

[Login] → [Dashboard]
   ↑
戻るとLoginへ戻る
```

```text
replace: true

[Dashboard]
   ↑
Loginが履歴から置き換えられる
```

## 画面遷移

### ログイン前

```text
/login
```

Loginページが表示されます。

### ログインボタンをクリック

```text
/login
   ↓
/dashboard
```

`useNavigate`を使用してDashboardページへ移動します。

### Dashboardでブラウザの「戻る」をクリック

`replace: true`によってLoginページが履歴に残らないため、Loginページへ戻らない動作になります。

## 実装のポイント

`useNavigate`を使用します。

```tsx
const navigate = useNavigate();
```

ログインボタンのクリック時に、`replace: true`を指定します。

```tsx
const handleLogin = () => {
  navigate("/dashboard", { replace: true });
};
```

`replace: true`を指定すると、現在の履歴エントリを新しいURLで置き換えます。

そのため、ログイン後にブラウザの「戻る」を押したとき、ログイン前のLoginページへ戻る履歴を残さないようにできます。

## プロジェクト構成

```text
src/
├── pages/
│   ├── Login.tsx
│   └── Dashboard.tsx
├── App.tsx
└── main.tsx
```

## インストール

プロジェクトでReact Routerをインストールします。

```bash
npm install react-router
```

## 起動

開発サーバーを起動します。

```bash
npm run dev
```

ブラウザで表示されたURLへアクセスしてください。

## 使用技術

* React
* TypeScript
* React Router
* Vite
* Tailwind CSS
