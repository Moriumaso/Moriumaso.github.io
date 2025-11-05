Next.js Portfolio (feature/nextjs-portfolio)
このブランチには Next.js を使ったポートフォリオのスターターを追加します。
主な機能:

Markdown / MDX ベースの Projects
Projects 一覧（カード表示）と個別ページ（MDX対応）
Resume ページ（Markdown） + PDF ダウンロード
SNS アイコン表示、SEO（next-seo）、sitemap.xml 生成（next-sitemap）、robots.txt
セットアップ（ローカル）

依存インストール
開発サーバー起動
以下のコマンドをプロジェクトルートで実行してください（PowerShell で実行ポリシーによる問題が出る場合は「コマンドプロンプト」をお使いください）:
npm install
npm run dev
ブラウザで http://localhost:3000 を開いて動作確認してください。

デプロイ

推奨: Vercel（Next.js に最適）または GitHub Pages（静的 export が必要な場合）。
next-sitemap はビルド時に sitemap.xml を生成します（siteUrl は https://Moriumaso.github.io に設定済み）。
――――――――――――――――――――
作業手順（簡潔）
――――――――――――――――――――

1. VS Code でリポジトリを開く（code .）。
2. 上のファイルをそれぞれ該当パスに新規作成して貼り付ける（pages/projects/[slug].js は角括弧を含めたファイル名で作成）。
3. public/images/avatar.png と public/resume.pdf を必要に応じて置く。
4. 変更をステージ、コミット、push:
git add .
git commit -m "Init: Next.js portfolio starter (MDX, projects, resume, socials)"
git push -u origin feature/nextjs-portfolio
5. 依存をインストールして起動（PowerShell に問題がある場合はコマンドプロンプトで実行）:
npm install
npm run dev
6. ブラウザで http://localhost:3000 を確認。
7. 問題が出たらターミナルのエラーメッセージをここに貼ってください — 修正を出します。