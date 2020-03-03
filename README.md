##messagesテ-ブル

|Column|Type|Option|
|------|----|------|
|text|string|
|image|string|
|group_id|integer|null :false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|

###Association
- belongs_to :group
- belongs_to :user


##groupsテーブル

|Column|Type|Option|
|------|----|------|
|name|string|null :false|
|imae|string|

###Association
- has_many :messages
- has_many :groups_users
- has_many :users, through: :groups_users

##usersテーブル

|Column|Type|Option|
|------|----|------|
|name|string|null :false|
|email|string|null :false, unipue :true|
|status|string|
|image|string|

###Association
- has_many :messages
- has_many :groups_users
- has_many :groups, through: :groups_users

##groups_usersテーブル

|Column|Type|Option|
|------|----|------|
|group_id|integer|null :false|
|user_id|integer|null :false|


###Association
- belongs_to :message
- belongs_to :user


