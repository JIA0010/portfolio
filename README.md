# Portfolio Website

モダンでプロフェッショナルなポートフォリオサイトです。

## 📁 プロジェクト構造

```
portfolio/
├── index.html          # メインHTMLファイル
├── styles.css          # スタイルシート
├── script.js           # JavaScriptファイル
├── assets/             # 画像などのアセット
│   └── sabolock-screenshot.png  # プロジェクト画像（追加してください）
└── README.md           # このファイル
```

## 🚀 セットアップ

### 1. 個人情報の更新

`index.html` を開き、以下のプレースホルダーを実際の情報に置き換えてください：

- `[Your Name]` → あなたの名前
- `[your-username]` → GitHubユーザー名
- `your.email@example.com` → メールアドレス
- `[入学年]` → 実際の入学年
- `[期間]` → 個人事業の期間
- `[専攻名]` → 放送大学の専攻名
- その他の `[...]` で囲まれた部分

### 2. プロジェクト画像の追加

`assets/` フォルダに以下の画像を追加してください：

- `sabolock-screenshot.png` - SaboLockのスクリーンショット（推奨サイズ: 1200x600px）

### 3. ローカルでのプレビュー

任意のHTTPサーバーでプレビューできます：

```bash
# Python 3を使用する場合
python3 -m http.server 8000

# Node.jsのhttp-serverを使用する場合
npx http-server
```

ブラウザで `http://localhost:8000` にアクセスしてください。

## 📦 GitHub Pagesへのデプロイ

### 方法1: GitHub Actionsを使用（推奨）

1. GitHubで新しいリポジトリを作成
2. このフォルダの内容をプッシュ：

```bash
git init
git add .
git commit -m "Initial commit: Portfolio website"
git branch -M main
git remote add origin https://github.com/[your-username]/portfolio.git
git push -u origin main
```

3. リポジトリの Settings → Pages → Source で `main` ブランチを選択
4. `https://[your-username].github.io/portfolio/` でアクセス可能になります

### 方法2: 手動デプロイ

1. リポジトリ名を `[your-username].github.io` にする
2. ファイルをプッシュ
3. `https://[your-username].github.io/` で直接アクセス可能

## ✨ 機能

- ✅ レスポンシブデザイン（モバイル対応）
- ✅ スムーススクロール
- ✅ スクロールアニメーション
- ✅ モダンなグラデーション
- ✅ ホバーエフェクト
- ✅ セマンティックHTML5
- ✅ アクセシビリティ対応
- ✅ SEO最適化

## 🎨 カスタマイズ

### カラーテーマの変更

`styles.css` の `:root` セクションでカラーパレットをカスタマイズできます：

```css
:root {
    --primary-color: #2563eb;    /* メインカラー */
    --secondary-color: #8b5cf6;  /* セカンダリカラー */
    --accent-color: #06b6d4;     /* アクセントカラー */
    /* ... */
}
```

### フォントの変更

Google Fontsから好きなフォントを選び、`index.html` のリンクと `styles.css` の `--font-sans` を更新してください。

## 📱 ブラウザ対応

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)
- iOS Safari (12+)
- Android Chrome (最新版)

## 🔧 今後の拡張案

- [ ] ダークモード切り替え機能
- [ ] 多言語対応（英語/日本語）
- [ ] ブログセクションの追加
- [ ] お問い合わせフォーム
- [ ] アニメーション付きスキルバー
- [ ] プロジェクトフィルター機能

## 📄 ライセンス

MIT License - 自由に使用・カスタマイズしてください。

## 🙋‍♂️ サポート

質問や問題がある場合は、GitHubのIssuesで報告してください。

---

**作成者**: [Your Name]  
**更新日**: 2025年11月2日
