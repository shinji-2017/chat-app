json.user_name @message.user.name
json.user_image @message.user.image.url
json.created_at @message.created_at.strftime("%Y年%m月%d日 %H時%M分")
json.text @message.text
json.image @message.image.url
json.id @message.id
json.user_id @message.user.id

