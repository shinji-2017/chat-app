#  Chat-app

##  概要
SPA(シングルページアプリケーション)でグループチャットアプリを作成

##  URL [Chat-app](http://3.114.20.168/)

### テスト用アカウント
####  Email
- test@test
####  password
- 123456
  
##  開発環境
- MacOS
- ruby : 2.5.1
- Ruby on Rails : 5.0.7.2
- jquery-rails : 4.3.3

##  機能一覧

###  注意
- グループ作成機能はこのURLでしか作成できません

#### URL [グループ作成機能](http://3.114.20.168/)

###  メッセージ送信機能 
#### 概要
- メッセージか送信できるよう実装
- JavaScriptを使用しメッセージが空の場合、送信できないよう実装

###  自動スクロール機能
#### 概要
- メッセージを送信したらメッセージの最下部まで自動でスクロールするよう実装

###  自動更新機能
#### 概要
- 投稿したら他のユーザーのブラウザにリロードなしでそのメッセージが表示できるよう実装

###  ログイン機能
#### 概要
- Ruby on Railsの”devise”というgemを使用し、ログイン機能を実装

### テキストエリア自動調整機能
#### 概要
  - JavaScriptを使用し改行すると、テキストエリアが自動で高さが変わるよう実装

###  ユーザー編集機能
 #### 概要
  - JavaScriptを使用し氏名、メールアドレスが空の場合編集できないよう実装
  - 左上のユーザー名をクリックし、モーダルで編集できるよう実装
#### URL   [ユーザー編集機能](http://3.114.20.168/)
  ![ユーサー編集](https://user-images.githubusercontent.com/53309563/75847044-79494c80-5e21-11ea-9b42-e66b3fe5ce10.png)
  
###  ユーザー検索機能
  #### 概要
  - ヘッダーのユーザーアイコンをクリックすることでユーザー検索の欄が表示
  - インクルメンタルサーチでリアルタイムでユーザー検索できるよう実装

  #### URL  [ユーザー検索機能](http://3.114.20.168/groups/1/messages)
  ![ユーサー検索](https://user-images.githubusercontent.com/53309563/75778933-12358480-5d9c-11ea-94de-db22428f3a46.png)
  
###  ユーザー詳細機能
#### 概要
- ユーザー名、ユーザー画像をクリックすることでAjaxで表示できるよう実装

 #### URL  [ユーザー詳細機能](http://3.114.20.168/groups/1/messages)

 ![ユーサー詳細](https://user-images.githubusercontent.com/53309563/75845812-9f6ced80-5e1d-11ea-8cf4-faa2ac703af9.png)

###  グループ作成機能
#### 概要
- 左下にある緑色のアイコンをクリックすることでグループ作成の欄が表示
- JavaScriptを使用しグループ名を入力しないと作成できないよう実装

###  グループ編集機能
#### 概要
- ヘッダー右端にあるアイコンをクリックすることで表示
- JavaScriptを使用しグループ名が空の場合、編集できないよう実装

 #### URL  [グループ編集機能](http://3.114.20.168/groups/1/messages)

 ![グループ編集](https://user-images.githubusercontent.com/53309563/75845997-3174f600-5e1e-11ea-956c-010ceefff726.png)

###  グループ詳細機能
#### 概要
- ヘッダーのインフォメーションアイコンをクリックすることでグループ詳細の欄が表示

 #### URL  [グループ詳細機能](http://3.114.20.168/groups/1/messages)

 ![グループ詳細](https://user-images.githubusercontent.com/53309563/75846306-40a87380-5e1f-11ea-8c6a-9cc02daa20da.png)


###  グループ検索機
#### 概要
- インクルメンタルサーチでリアルタイムでグループ検索できるよう実装

#### URL  [グループ検索機能](http://3.114.20.168/groups/1/messages)

 ![グループ検索](https://user-images.githubusercontent.com/53309563/75846578-1dca8f00-5e20-11ea-9a9b-d14b5c692f6f.png)



