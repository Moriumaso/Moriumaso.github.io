---
layout: home
title: "ようこそ"
permalink: /
---

こんにちは、森 爽真です。  
ここは私のポートフォリオサイトです。下記は概要です — 自由に編集してください。

## 私について
- 出身: 東京科学大学大学院 工学院 電気電子系
- 趣味: バスケットボール、ボルダリング、ゲーム

## できること・スキル
- プログラミング言語: MATLAB, Python, HTML/CSS
- ツール: アンテナ

## 最近のプロジェクト
{% for project in site.projects limit:3 %}
- [{{ project.title }}]({{ project.url }}) — {{ project.excerpt | strip_html | truncate: 120 }}
{% endfor %}

もっと見る → [Projects](/projects/)
