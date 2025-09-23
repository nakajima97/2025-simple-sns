# 開発停止
## 理由
- Next.JS学習用にしては考えることが多い
- ログインを簡易的にしたのでOKと思ったけど簡易的でもcookieやらアクセス制御やらでめんどくさい

# シンプルSNS
## 概要
- Next.JS App Routerの学習のために作成した管理SNS

## コマンド
マイグレーションの実行
```
npx drizzle-kit push
```

### SQLite操作
接続
```
sqlite3 local.d
```

テーブル一覧
```
.table
```
