json.user_name @message.user.name
json.user_image @message.user.image.url
json.created_at time_ago_in_words(@message.created_at)+"前"
json.text @message.text
json.image @message.image.url
json.id @message.id
json.user_id @message.user.id
json.group_id @message.group.id

