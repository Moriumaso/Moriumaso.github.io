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
3. public/images/avatar.jpg (または avatar.png) と public/resume.pdf を必要に応じて置く。

画像差し替えの手順（簡単）:

- アバター（トップの写真）: `public/images/avatar.jpg` を置き換えるだけで反映されます。推奨サイズは正方形で 560x560px 程度（表示は CSS により約 280px を基準に縮小されます）。
- プロジェクトのサムネイルやギャラリー画像: `public/images/projects/` フォルダにファイルを置いて、各 Markdown/MDX の frontmatter で `thumbnail: /images/projects/your-image.jpg` のように指定してください。
- SNS アイコン（カスタム画像）: `public/icons/` に JPG/SVG/PNG を追加または差し替えるだけで使用できます。既存のアイコン（instagram, x, mail, github）は拡張子を変更して保存しても動作します（例: `instagram.jpg`）。

画像アップ後のチェック:

- 開発サーバーが動いている場合はリロードで即時反映されます（`npm run dev`）。
- 本番ビルド（`npm run build`）後も `public/` 下の画像は静的アセットとして配信されます。
4. 変更をステージ、コミット、push:
git add .
git commit -m "Init: Next.js portfolio starter (MDX, projects, resume, socials)"
git push -u origin feature/nextjs-portfolio
5. 依存をインストールして起動（PowerShell に問題がある場合はコマンドプロンプトで実行）:
npm install
npm run dev
6. ブラウザで http://localhost:3000 を確認。
7. 問題が出たらターミナルのエラーメッセージをここに貼ってください — 修正を出します。

----------------------------------------
デプロイ（公開）方法
----------------------------------------

このリポジトリは Next.js ベースです。公開方法は主に 2 通りあります。手軽で互換性が高いのは Vercel、リポジトリの GitHub Pages に置きたい場合は静的エクスポートを作る手順が必要です。どちらを採るか教えてください。下に手順を両方載せます。

A) 推奨 — Vercel（自動デプロイ / 無料枠あり）
- 手順（簡単）:
	1. https://vercel.com にアクセスしてアカウント作成（GitHub 連携）
	2. "New Project" → GitHub リポジトリを選択 → ブランチに `feature/nextjs-portfolio`（もしくは `main`）を選択
	3. ビルドコマンド: `npm run build`（デフォルトで OK）
	4. デプロイをトリガー。以降は push するたび自動で再デプロイされます。

	メリット: Next.js の機能（ISR / Image 最適化 等）をそのまま使える。設定不要で SSL / カスタムドメイン対応。

B) GitHub Pages に静的ファイルを置く（`https://<username>.github.io`）
- 注意: Next.js の `next export` による静的エクスポートは、getStaticProps/getStaticPaths を使った静的サイト生成に適していますが、getServerSideProps や一部の Next.js 機能は動作しません（本リポジトリは SSG 想定のため可能なはずです）。
- 手順（ローカルで実行する場合、PowerShell）:
	1. 依存をインストールしておく: `npm install`
	2. ビルド&エクスポート: `npm run build ; npm run export`
		 - もし `package.json` に `export` スクリプトが無ければ、先に `package.json` に以下を追加してください:
			 "scripts": {
				 "build": "next build",
				 "export": "next build && next export"
			 }
		 - 実行すると `out/` フォルダが生成されます。
	3. `out/` の中身を `gh-pages` ブランチにデプロイします（簡易手順）:
		 - (a) `npm install --save-dev gh-pages` を追加して `package.json` に `"deploy": "npm run export && gh-pages -d out -b gh-pages"` を追加し、`npm run deploy` を実行して自動で `gh-pages` ブランチへ push する方法。
		 - (b) 手動で `out/` を `gh-pages` ブランチに push する方法（`git` の `worktree` や `subtree` を利用）。

	4. GitHub リポジトリの Settings → Pages から `gh-pages` ブランチを選択して公開します。公開後に https://<username>.github.io/<repo>/ で見られます。ユーザー名ルート (`https://Moriumaso.github.io`) にしたい場合はリポジトリ名を `Moriumaso.github.io` にするか、そのリポジトリを使って Pages を設定してください。

注意点:
- 画像パス（`public/` 下のファイル）はエクスポート後も `out/` に含まれます。`next/image` を使った最適化は export 時に制限があるため、`<img>` での利用や外部の最適化を検討してください。
- sitemap や robots はビルド時に生成されますが、`next export` 実行後に `out/` に出力されていることを確認してください。

どちらで進めますか？
	- すぐに Vercel 接続を行って公開を実行してほしい（その場合、あなたの GitHub 連携許可が必要）
	- GitHub Pages に静的エクスポートして私が `gh-pages` ブランチへ push するための手順（私が代行する場合はリポジトリへの push 権限が必要）
	- 手順のみ欲しい（自分でやる）

選択を教えてください。選択に従って次の具体的な操作（自動デプロイ設定 or `package.json` の小修正と `gh-pages` 用の deploy スクリプト追加など）を実施します。