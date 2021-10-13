# コマンド
```sh
# webでアプリを実行
$ ionic serve

# モバイルデザインのプレビュー
$ ionic serve --lab
```

# モバイルアプリとしての実行
```sh
# 最初にwebアプリのリリース向けビルドを実施
$ ionic build --prod

# iOSアプリとして実行
ionic capacitor open ios

# Androidアプリとして実行
ionic capacitor open android
```

# TODO
- ionic serveのプロジェクト名を変更する
- proxy conf jsonの設定
